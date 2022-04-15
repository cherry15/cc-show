import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/header'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

const store = setupStore()
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
