import React from 'react'
import { formatoDinero } from '../helpers';
import useCafe from '../hooks/useCafe';

const Productos = ({producto}) => {

  const {handleClickModal,handleSetProducto} = useCafe();

    const {nombre, precio, imagen, categoria_id, id} = producto;
  return (
    
    <div className='border p-3 sha bg-white'>
        <img 
            alt={`imagen${imagen}`} 
            src={`/img/${imagen}.jpg`}
            className="w-full"
        />
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>{formatoDinero(precio)}</p>
            <button type='button' 
                    className=' bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold '
                    onClick={()=>{
                      handleClickModal()
                      handleSetProducto(producto)
                    }}        
            >
              Agregar
            </button>
        </div>
    </div>
  )
}

export default Productos