import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

const About = React.lazy(() => import('./pages/about'))
const Cats = React.lazy(() => import('./pages/cats'))
const Dogs = React.lazy(() => import('./pages/dogs'))
const Contact = React.lazy(() => import('./pages/contact'))
const Employee = React.lazy(() => import('./pages/employee'))

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="cats"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Cats />
            </React.Suspense>
          }
        />
        <Route
          path="dogs"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Dogs />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="employee/:id"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Employee />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
