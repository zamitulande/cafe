import React from 'react'
import Productos from '../components/Productos'
import {productos} from '../data/productos'
import useCafe from '../hooks/useCafe'

const Inicio = () => {

  const {hola}= useCafe()
  console.log(hola)
  return (
    <>
      <h1 className='text-4xl font-black'>Inicio</h1>
      <p className='text-2xl my-10'>
          Elige y recibe tu pedido a continuacion
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map((producto)=>(
           <Productos
              key={producto.id}
              producto={producto}
           />
        ))}
      </div>
    </>
  )
}

export default Inicio