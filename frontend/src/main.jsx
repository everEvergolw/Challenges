import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authentication, {PageType} from './pages/Authentication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/login",
    element: <Authentication pageType={PageType.LOGIN}/>,
  },

  {
    path: "/register",
    element: <Authentication pageType={PageType.REGISTER}/>,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
