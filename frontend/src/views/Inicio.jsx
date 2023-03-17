import React from 'react'
import useSWR from 'swr'
import Productos from '../components/Productos'
import clienteAxios from "../config/axios"
import {productos as data} from '../data/productos'
import useCafe from '../hooks/useCafe'

const Inicio = () => {

  const {categoriaActual}= useCafe()

  //consulta SWR
  const fetcher =()=>clienteAxios('/api/productos').then(data =>data.data)
  const {data, error, isLoading} = useSWR('/api/productos', fetcher,{
    refreshInterval:1000
  })
  if(isLoading) return 'Cargando...'
  const productos = data.data.filter(producto=> producto.categoria_id === categoriaActual.id)
  return (
    <>
      <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
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