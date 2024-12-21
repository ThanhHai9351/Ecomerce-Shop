import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { HelmetProvider } from 'react-helmet-async'
import Loading from './components/bar/loading'
import App from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
