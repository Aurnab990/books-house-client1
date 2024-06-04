import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Routes/Routes'
import Authprovider from './Authprovider/Authprovider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    
  </React.StrictMode>,
)