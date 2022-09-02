import React from 'react'

const Dashboard = React.lazy(() => import('./pages/home/dashboard'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(
  () => import('./views/base/breadcrumbs/Breadcrumbs')
)

const routes = [
  { path: '/', name: 'Home', element: Dashboard },
  {
    path: '/base/accordion',
    name: 'Accordion',
    element: Accordion,
  },
  {
    path: '/base/breadcrumbs',
    name: 'Breadcrumbs',
    element: Breadcrumbs,
  },
]

export default routes
