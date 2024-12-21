import { lazy } from 'react'

//404 Page
const NotFoundPage = lazy(() => import('@/pages/not-found-page'))
//Auth Page
const LoginPage = lazy(() => import("@/pages/auth/login"))
const RegisterPage = lazy(() => import("@/pages/auth/register"))
//Customer
const HomePage = lazy(() => import('../pages/customer/home-page'))
export interface Route {
  path: string
  element: any
  isShowHeader: boolean
  isAdmin: boolean
}

export const routes: Route[] = [
  //customer
  { path: '/', element: HomePage, isShowHeader: true, isAdmin: false },
  //   //admin
  //   { path: "/admin/dashboard", element: (DashboardAdmin), isShowHeader: false, isAdmin: true },
  //   //auth
    { path: "/account/login", element: LoginPage, isShowHeader: false, isAdmin: false },
    { path: "/account/register", element: RegisterPage, isShowHeader: false, isAdmin: false },
  //   { path: "/account/reset-password", element: ResetPassPage, isShowHeader: false, isAdmin: false },
  //   { path: "/account/forgot-password", element: ForgortPassPage, isShowHeader: false, isAdmin: false },
  //   // not found page
  {
    path: '*',
    element: NotFoundPage,
    isShowHeader: false,
    isAdmin: false,
  },
]
