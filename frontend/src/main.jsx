import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authentication, {PageType} from './pages/Authentication.jsx';
import AddChallenge from './pages/AddChallenge.jsx'

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

  {
    path: "/add-challenge",
    element: <AddChallenge/>,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

      <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <RouterProvider router={router} />
    </CookiesProvider>

  </React.StrictMode>,

)
