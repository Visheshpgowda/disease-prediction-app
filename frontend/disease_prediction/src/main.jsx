import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Layout from './Layout.jsx'
import './index.css'
import AiChatbot from './components/AiBot/AiChatbot.jsx'
import Predict from './components/Predict/Predict.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Dashboard />} />
      <Route path='/predict' element={<Predict />} />
      <Route path='/chat' element={<AiChatbot />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
