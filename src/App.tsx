import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Layout from 'layout/Layout';
import AdminLayout from 'layout/admin/AdminLayout';
import Signup from 'pages/auth/Signup';
import PageNotFound from 'layout/PageNotFound';
import { GraphqlQueryListAllMenu, GraphqlQueryListAllModules } from 'function/amplify/graphqlQueries';
import { IModuleProp, IRoute } from 'interfaces';
import { Dashboard, Members, Menu } from 'pages/admin';
import 'App.scss';
import LoadingPage from 'component/LoadingPage';

type TDynamicModules = Record<string, React.FC<IModuleProp>>;

interface IAction {
  id: string;
  name: string;
  isIndex: boolean;
}

interface IModule {
  id: string;
  name: string;
  actions: {
    items: IAction[];
  }
}

const App = () => {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [moduleMapping, setModuleMapping] = useState<TDynamicModules>({});
  const [loading, setLoading] = useState(true); // State to track if componentMap is loaded
  
  // get routes
  useEffect(() => {
    const getRoutes = async() => {
      try {
        const menus = await GraphqlQueryListAllMenu();
        
        const getFirstIndexAction = (module: IModule): string => {
          return module.actions?.items?.find((action: IAction) => action.isIndex)?.name ?? '';
        };

        // Map menus to routes
        const menuRoutes: IRoute[] = menus.map((menu) => ({
          path: menu.url,
          module: {
            id: menu.module.id,
            name: menu.module.name,
          },
          moduleId: menu.moduleId,
          action: getFirstIndexAction(menu.module as IModule)
        }));

        const modules = await GraphqlQueryListAllModules();

        // // Map modules to routes
        const moduleRoutes: IRoute[] = [];
        for (const module of modules) {
          for (const action of module.actions?.items ?? []) {
            moduleRoutes.push({
              path: 
                (action?.isIndex ?? false) ?
                  `${module.name.toLocaleLowerCase()}/:id` :
                  `${module.name.toLocaleLowerCase()}/${action?.name}/:id`,
              module: {
                id: module.id,
                name: module.name,
              },
              moduleId: '',
              action: action?.name ?? ''
            });
          }
        }
        
        const allRoutes = [...menuRoutes, ...moduleRoutes];

        // Import module elements
        const moduleMapping: TDynamicModules = {};
        for (const route of allRoutes) {
          const moduleElement = await import(`pages/module/${route.module.name.toLowerCase()}`);
          moduleMapping[route.module.id] = moduleElement.default;
        }

        setModuleMapping(moduleMapping);
        setRoutes(allRoutes);
        setLoading(false);
      } catch(error) {
        console.log(error);
      }
    };
    getRoutes();
  }, []);

  interface RouteProps {
    index: number;
    route: {
      path: string;
      moduleId: string;
      action: string;
    };
    ModuleComponent?: React.ComponentType<{ id: string; action: string }>;
  }
  
  const RouteWrapper: React.FC<RouteProps> = ({ ModuleComponent, route }) => {
    const { id: paramId } = useParams<{ id: string }>();

    // Use `paramId` if available; otherwise, fall back to `route.moduleId`
    const id = paramId || route.moduleId;
    
    if (!id) {
      console.log('ID not found for RouteWrapper');
      return <PageNotFound />;
    }

    if (!ModuleComponent) {
      console.log('module component not found for RouteWrapper');
    }

    return ModuleComponent ? (
      <ModuleComponent id={id} action={route.action} />
    ) : (
      <PageNotFound />
    );
  };

  return (
    <>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => {
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
              })}
              <Route path="signup" element={<Signup />} />  {/* Signup route */}
              <Route path="*" element={<PageNotFound />} /> {/* Page not found route */}
            </Route>
            <Route path="admin/" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="menu" element={<Menu />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
