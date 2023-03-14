import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CafeProvider } from './context/CafeProvider'

import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CafeProvider>
      <RouterProvider router={router}/>
    </CafeProvider>             
  </React.StrictMode>
)
