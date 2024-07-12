import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import path from '@/constants/path'
import { useAppSelector } from './redux/store'
import DashboardLayout from './layouts/DashboardLayout'
import DefaultLayout from './layouts/DefaultLayout'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import { Landing } from '@/pages/Landing'
import { FreeTrial } from '@/pages/FreeTrial'
import { Dashboard } from '@/pages/Dashboard'
import Page_404 from '@/pages/Page_404'

function ProtectedRoute() {
  const isAuthenticated = useAppSelector((auth) => auth.authState.isAuthenticated)
  return isAuthenticated ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to='/sign-in' />
  )
}
function RejectedRoute() {
  const isAuthenticated = useAppSelector((auth) => auth.authState.isAuthenticated)
  return !isAuthenticated ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to='/dashboard' />
  )
}
function PublicRoute() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.signin,
          element: <SignIn />
        },
        {
          path: path.register,
          element: <SignUp />
        }
      ]
    },
    {
      path: '',
      index: true,
      element: (
        <DefaultLayout>
          <Landing />
        </DefaultLayout>
      )
    },
    {
      path: '',
      element: <PublicRoute />,
      children: [
        {
          path: path.landing,
          element: <Landing />
        },
        {
          path: path.trial,
          element: <FreeTrial />
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.dashboard,
          element: <Dashboard />
        }
      ]
    },
    {
      path: '*',
      element: (
        <DefaultLayout>
          <Page_404 />
        </DefaultLayout>
      )
    }
  ])
  return routeElements
}
