import React from 'react'
import { Outlet } from 'react-router-dom'
import Resumen from '../components/Resumen'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className=' md:flex'>
      <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          {/* Outlet carga el componente inicio que esta exportado en router*/}
          <Outlet/>
        </main>
      <Resumen/>
    </div>
  )
}

export default Layout