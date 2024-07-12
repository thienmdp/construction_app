import '@/css/index.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from '@/redux/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary.js'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FF4E4E'
              }
            }}
          >
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </ConfigProvider>
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
)
