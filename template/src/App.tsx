import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.css'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./pages/login/login'))
const Page404 = React.lazy(() => import('./pages/error/404'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<DefaultLayout />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
