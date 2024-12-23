import { lazy } from 'react'

//404 Page
const NotFoundPage = lazy(() => import('@/pages/not-found-page'))
//Auth Page
const LoginPage = lazy(() => import('@/pages/auth/login'))
const RegisterPage = lazy(() => import('@/pages/auth/register'))
//Customer
const HomePage = lazy(() => import('../pages/customer/home-page'))
const CategoryCustomerPage = lazy(() => import('@/pages/customer/category'))
const CategoryDetailPage = lazy(() => import('@/pages/customer/category/category-detail'))
const ProductPage = lazy(() => import('@/pages/customer/product'))

export interface Route {
  path: string
  element: any
  isShowHeader: boolean
  isAdmin: boolean
}

export const routes: Route[] = [
  //customer
  { path: '/', element: HomePage, isShowHeader: true, isAdmin: false },
  { path: '/collections', element: CategoryCustomerPage, isShowHeader: true, isAdmin: false },
  { path: '/collection/:slug', element: CategoryDetailPage, isShowHeader: true, isAdmin: false },
  { path: '/products', element: ProductPage, isShowHeader: true, isAdmin: false },
  //   //admin
  //   { path: "/admin/dashboard", element: (DashboardAdmin), isShowHeader: false, isAdmin: true },
  //   //auth
  { path: '/account/login', element: LoginPage, isShowHeader: false, isAdmin: false },
  { path: '/account/register', element: RegisterPage, isShowHeader: false, isAdmin: false },
  //   // not found page
  {
    path: '*',
    element: NotFoundPage,
    isShowHeader: false,
    isAdmin: false,
  },
]
