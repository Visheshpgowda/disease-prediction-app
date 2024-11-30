import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import AddSymptons from './components/AddSymptons/AddSymptons.jsx'
import AboutUs from './components/AboutUs/About.jsx'
import Layout from './Layout.jsx'
import './index.css'

const router = new createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<AboutUs />} />
      <Route path="/AddSymptons" element={<AddSymptons />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} /> 
  </React.StrictMode>
)