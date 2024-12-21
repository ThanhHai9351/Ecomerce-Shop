import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import Loading from '@/components/bar/loading'
import App from '@/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@mui/material/styles'
import './index.css'
import { Provider } from 'react-redux'
import store from '@/store/store'
import AppProvider from '@/app_provider'

const accessToken = localStorage.getItem('accessToken') || ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider initialSessionToken={accessToken}>
        <HelmetProvider>
          <Suspense fallback={<Loading />}>
            <App />
            <ToastContainer />
          </Suspense>
        </HelmetProvider>
      </AppProvider>
    </Provider>
  </StrictMode>,
)
