import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboards = React.lazy(() => import('./views/Dashboards'));
const DashboardViewer = React.lazy(() => import('./components/Dashboard/DashboardViewer'));
const About = React.lazy(() => import('./views/About'));


const routes = [
    {path: '/', exact: true, name: 'Base', component: DefaultLayout},
    {path: '/dashboards', exact: true, name: 'Dashboards', component: Dashboards},
    {path: '/dashboards/:id', exact: true, name: 'Dashboard Details', component: DashboardViewer},
    {path: '/about', exact: true, name: 'About', component: About},
];

export default routes;
