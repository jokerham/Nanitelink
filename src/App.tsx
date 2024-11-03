import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Layout from 'layout/Layout';
import AdminLayout from 'layout/admin/AdminLayout';
import Signup from 'pages/auth/Signup';
import PageNotFound from 'layout/PageNotFound';
import { GraphqlQueryListAllMenu, GraphqlQueryListAllModules } from 'function/amplify/graphqlQueries';
import { IRoute } from 'interfaces';
import { Dashboard, Members, Menu, Module } from 'pages/admin';
import 'App.scss';
import LoadingPage from 'component/LoadingPage';

type TDynamicModules = Record<string, React.FC>;

interface RouteWrapperProps {
  index: number;
  route: IRoute;
  ModuleComponent?: React.ComponentType;
}

const RouteWrapper = ({ ModuleComponent, route }: RouteWrapperProps) => {
  const { id, action } = useParams<{ id: string, action: string }>();

  const props = route.parameters?.items?.reduce((acc: { [key: string]: string }, param) => {
    acc[param.name] = param.value;
    return acc;
  }, {}) ?? {};

  if (id) {
    props['id'] = id;
  }
  if (route.moduleId) {
    props['id'] = route.moduleId;
  }
  if (action) {
    props['action'] = action;
  } else {
    props['action'] = route.action;
  }

  if (ModuleComponent) {
    return <ModuleComponent {...props} />;
  } else {
    return <PageNotFound />;
  }
};

const App = () => {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [moduleMapping, setModuleMapping] = useState<TDynamicModules>({});
  const [loading, setLoading] = useState(true); // State to track if componentMap is loaded
  
  // Get Routes By Module (Promise)
  const getRoutesByModule = async () => {
    const modules = await GraphqlQueryListAllModules();
    const routes = [];
    for (const module of modules) {
      const modulePath = module.name.toLowerCase();
      const paths = [modulePath, `${modulePath}/:id`, `${modulePath}/:action/:id`];
      for (const path of paths) {
        routes.push({ path, module, action: '', moduleId: '', isAdmin: false, parameters: undefined });
      }
      const adminPaths = [modulePath, `${modulePath}/:action`, `${modulePath}/:action/:id`];
      for (const path of adminPaths) {
        routes.push({ path, module, action: '', moduleId: '', isAdmin: true, parameters: undefined });
      }
    }
    return routes;
  };
  
  // Get Routes by Menu (Promise)
  const getRoutesMyMenu = async () => {
    const menus = await GraphqlQueryListAllMenu();
    return menus.map(menu => ({
      path: menu.url,
      module: menu.module,
      action: '',
      moduleId: menu.moduleId,
      isAdmin: false,
      parameters: undefined,
    }));
  };

  // Get Routes (useEffect)
  useEffect(() => {
    const getRoutes = async () => {
      try {
        // 1. Fetch routes by module and menu in parallel
        const fetchRoutes = async () => {
          const [routesByModule, routesByMenu] = await Promise.all([
            getRoutesByModule(),
            getRoutesMyMenu(),
          ]);
          return [...routesByModule, ...routesByMenu];
        };
  
        const allRoutes = await fetchRoutes();
        setRoutes(allRoutes);
  
        // 2. Import module elements in parallel
        const loadModules = async () => {
          const moduleMappingEntries = await Promise.all(
            allRoutes.map(async route => {
              const moduleElement = await import(`pages/module/${route.module.name.toLowerCase()}${route.isAdmin ? '/admin' : ''}`);
              return [route.module.id + (route.isAdmin ? 'Admin' : ''), moduleElement.default];
            })
          );
          return Object.fromEntries(moduleMappingEntries);
        };
  
        const moduleMapping = await loadModules();
        setModuleMapping(moduleMapping);
  
        setLoading(false);
      } catch (error) {
        //console.error(error);
      }
    };
  
    getRoutes();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes
                .filter(route => !route.isAdmin)
                .map((route, index) => {
                  const ModuleComponent = moduleMapping[route.module.id]; // Assign the component
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={ModuleComponent ? 
                        <RouteWrapper ModuleComponent={ModuleComponent} route={route} index={0} /> :
                        <PageNotFound />}
                    />
                  );
                })
              }
              <Route path="signup" element={<Signup />} />  {/* Signup route */}
              <Route path="*" element={<PageNotFound />} /> {/* Page not found route */}
            </Route>
            <Route path="admin/" element={<AdminLayout />}>
              <Route path="menu" element={<Menu />} />
              <Route path="module" element={<Module />} />
              <Route path="members" element={<Members />} />
              <Route index element={<Dashboard />} />
              {routes
                .filter(route => route.isAdmin)
                .map((route, index) => {
                  const ModuleComponent = moduleMapping[route.module.id + (route.isAdmin ? 'Admin' : '')]; // Assign the component
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={ModuleComponent ? 
                        <RouteWrapper ModuleComponent={ModuleComponent} route={route} index={0} /> :
                        <PageNotFound />}
                    />
                  );
                })
              }
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
