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
  
  // get routes
  useEffect(() => {
    const getRoutes = async() => {
      try {
        // // Retrieve all routes from api
        // const tmpRoutes = await GraphqlQueryListAllRoutes();
        // const routes = tmpRoutes.map(route => {
        //   const { path, module, action, parameters, isAdmin } = route;
        //   const moduleId = parameters?.items.find((param: {name: string} | null) => param?.name === 'id')?.value ?? '';
        //   const routeParameters = {
        //     items: parameters?.items
        //       .filter(item => (item !== null))
        //       .map(item => ({
        //         name: item?.name ?? '',
        //         value: item?.value ?? '',
        //       })) ?? []};
        //   return { path, module, action, moduleId: moduleId, isAdmin, parameters: routeParameters };
        // });

        // // Import module elements
        // const moduleMapping: TDynamicModules = {};
        // for (const route of routes) {
        //   const moduleElement = await import(`pages/module/${route.module.name.toLowerCase()}${route.isAdmin ? '/admin' : ''}`);
        //   moduleMapping[route.module.id + (route.isAdmin ? 'Admin' : '')] = moduleElement.default;
        // }
        // setModuleMapping(moduleMapping);
        // setRoutes(routes);
        // setLoading(false);
        
        // 1. Routes by module
        const getRoutesByModule = async() => {
          const modules = await GraphqlQueryListAllModules();
          const routes: IRoute[] = [];
          for (const module of modules) {
            // Paths for open contents
            const modulePath = module.name.toLowerCase();
            const paths = [modulePath, `${modulePath}/:id`, `${modulePath}/:action/:id`];
            for (const path of paths) {
              routes.push({
                path,
                module,
                action: '',
                moduleId: '',
                isAdmin: false,
                parameters: undefined
              });
            }

            // Paths for admin contents
            const adminPaths = [modulePath, `${modulePath}/:action`, `${modulePath}/:action/:id`];
            for (const path of adminPaths) {
              routes.push({
                path,
                module,
                action: '',
                moduleId: '',
                isAdmin: true,
                parameters: undefined
              });
            }
          }
          return routes;
        };

        // 2. Routes by menu
        const getRoutesMyMenu = async() => {
          const menus = await GraphqlQueryListAllMenu();
          const routes = menus.map(menu => {
            const path = menu.url;
            const module = menu.module;
            const action = '';
            const moduleId = menu.moduleId;
            const isAdmin = false;
            return { path, module, action, moduleId, isAdmin };
          });
          return routes;
        };

        const routesByModule = await getRoutesByModule();
        const routesByMenu = await getRoutesMyMenu();
        const allRoutes = [...routesByModule, ...routesByMenu];
        //console.info(allRoutes);
        setRoutes(allRoutes);

        // 3. Import module elements
        const moduleMapping: TDynamicModules = {};
        for (const route of allRoutes) {
          const moduleElement = await import(`pages/module/${route.module.name.toLowerCase()}${route.isAdmin ? '/admin' : ''}`);
          moduleMapping[route.module.id + (route.isAdmin ? 'Admin' : '')] = moduleElement.default;
        }
        setModuleMapping(moduleMapping);
        setLoading(false);
      } catch(error) {
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
