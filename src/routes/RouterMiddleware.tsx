import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../store';
import { privateRoutes, publicRoutes } from './routes';
import Layout from '../layout';

const RenderComponent = (El: any, layout?: boolean) => {
  if (layout) return <Layout><El /></Layout>
  return <El />
}

const RouterMiddleware: React.FC = (): React.JSX.Element => {
  const { isAuth } = useAuth();

  function checkRole(role: string[] | string) {
    // if (Array.isArray(role)) {
    //   return user?.roles?.some((r) => role?.includes(r));
    // }

    // return user?.roles?.includes(role);
    return true
  }

  if (isAuth) {
    return (
      <Routes>
        {privateRoutes
          // ?.filter((route) => checkRole(route.isRole))
          ?.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                // checkRole("administrator") ? (
                //   <AdminLayout>{RenderComponent(route.component)}</AdminLayout>
                // ) : (
                //   <UserLayout>{RenderComponent(route.component)}</UserLayout>
                // )
                RenderComponent(route.component, true)
              }
            />
          ))}

        <Route
          path="*"
          element={
            <Navigate
              to={checkRole("administrator") ? "/dashboard" : "/"}
              replace
            />
          }
        />
      </Routes>
    );
  }

  return (
    <Routes>
      {publicRoutes?.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={RenderComponent(route.component)}
        />
      ))}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}


export default RouterMiddleware;
