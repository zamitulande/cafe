import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='max-w-4xl m-auto mt-0 md:mt-8 flex flex-col md:flex-row items-center'>
        <img 
            src='../img/logo.svg'
            alt='imagen logotipo'
            className='max-w-xs'
        />
        <div className=' p-10 w-full'>
            {/* Outlet carga el componente login que esta exportado en router */}
            <Outlet/>
        </div>        
    </main>
  )
}

export default AuthLayout