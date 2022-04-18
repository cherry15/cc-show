import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Loading from './components/loading/loading'
import Countries from './pages/countries'
import Home from './pages/home'

const About = React.lazy(() => import('./pages/about'))
const Contact = React.lazy(() => import('./pages/contact'))
const Country = React.lazy(() => import('./pages/country'))
const CountriesHome = React.lazy(() => import('./pages/countries-home'))
const AdminHome = React.lazy(() => import('./pages/admin-home'))
const Admin = React.lazy(() => import('./pages/admin'))

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<Loading />}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route path="countries" element={<Countries />}>
        <Route
            path=":id"
            element={
              <React.Suspense fallback={<Loading />}>
                <Country />
              </React.Suspense>
            }
          />
          <Route
            index element={
              <React.Suspense fallback={<Loading />}>
                <CountriesHome />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="admin" element={<Admin />}>
        <Route
            path=":id"
            element={
              <React.Suspense fallback={<Loading />}>
                <Country />
              </React.Suspense>
            }
          />
          <Route
            index element={
              <React.Suspense fallback={<Loading />}>
                <AdminHome />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
