import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'
import Resumen from '../components/Resumen'
import Sidebar from '../components/Sidebar'
import useCafe from '../hooks/useCafe'
import ModalProducto from '../components/ModalProducto'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Layout = () => {

  const {modal} = useCafe();
  return (
    <>
    <div className=' md:flex'>
      <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          {/* Outlet carga el componente inicio que esta exportado en router*/}
          <Outlet/>
        </main>
      <Resumen/>
    </div>
        <Modal isOpen={modal} style={customStyles} ariaHideApp={false}>
          <ModalProducto/>
        </Modal>  

        <ToastContainer/>  
    </>
    
  )
}

export default Layout