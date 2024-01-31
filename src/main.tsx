import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from  './View/Login.tsx'
import './index.css'
import Home from "./View/home.tsx";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
},
    {
        path:'/home',
        element: <Home/>,
    },
    {
  path: '/login',
  element: <Login />,
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
