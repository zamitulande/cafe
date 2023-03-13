import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>Layout
        {/* Outlet carga el componente inicio que esta exportado en router*/}
        <Outlet/>
    </div>
  )
}

export default Layout