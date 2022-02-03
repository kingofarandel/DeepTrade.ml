import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import GuestGuard from './components/Auth/GuestGuard';
import AuthGuard from './components/Auth/AuthGuard';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [
    {
        exact: true,
        guard: GuestGuard,
        path: '/auth/signin',
        component: lazy(() => import('./views/auth/signin/SignIn1'))
    },
    {
        exact: true,
        guard: GuestGuard,
        path: '/auth/signup',
        component: lazy(() => import('./views/auth/signup/SignUp1'))
    },
    {
        exact: true,
        path: '/auth/signin-2',
        component: lazy(() => import('./views/auth/signin/SignIn2'))
    },
    {
        exact: true,
        path: '/auth/signup-2',
        component: lazy(() => import('./views/auth/signup/SignUp2'))
    },
    {
        path: '*',
        layout: AdminLayout,
        guard: AuthGuard,
        routes: [
            {
                exact: true,
                path: '/app/dashboard/default',
                component: lazy(() => import('./views/dashboard/DashDefault'))
            },

            {
                exact: true,
                path: '/basic/button',
                component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
            },
            {
                exact: true,
                path: '/basic/badges',
                component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
            },
            {
                exact: true,
                path: '/basic/breadcrumb',
                component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
            },
            {
                exact: true,
                path: '/basic/collapse',
                component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
            },
            {
                exact: true,
                path: '/basic/tabs-pills',
                component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
            },
            {
                exact: true,
                path: '/basic/typography',
                component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
            },

            {
                exact: true,
                path: '/forms/form-basic',
                component: lazy(() => import('./views/forms/FormsElements'))
            },
            {
                exact: true,
                path: '/tables/bootstrap',
                component: lazy(() => import('./views/tables/BootstrapTable'))
            },

            {
                exact: true,
                path: '/charts/nvd3',
                component: lazy(() => import('./views/charts/nvd3-chart'))
            },
            {
                exact: true,
                path: '/maps/google-map',
                component: lazy(() => import('./views/maps/GoogleMaps'))
            },

            {
                exact: true,
                path: '/sample-page',
                component: lazy(() => import('./views/extra/SamplePage'))
            },

            {
                exact: true,
                path: '/models',
                component: lazy(() => import('./views/model'))
            },

            {
                exact: true,
                path: '/datastore',
                component: lazy(() => import('./views/datastore'))
            },

            {
                // exact: true,
                path: '/accounts',
                component: lazy(() => import('./views/accounts'))
            },
            {
                // exact: true,
                path: '/trades',
                component: lazy(() => import('./views/trades'))
            },
            {
                // exact: true,
                path: '/instances',
                component: lazy(() => import('./views/instances'))
            },
            {
                // exact: true,
                path: '/api_keys',
                component: lazy(() => import('./views/api-keys'))
            },
            {
                exact: true,
                path: '/notebooks',
                component: lazy(() => import('./views/notebooks'))
            },
            {
                exact: true,
                path: '/billingPage',
                component: lazy(() => import('./views/billingPage'))
            },

            {
                path: '*',
                exact: true,
                component: () => <Redirect to={BASE_URL} />
            }
        ]
    }
];

export default routes;
