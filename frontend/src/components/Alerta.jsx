import React from 'react'

const Alerta = ({children}) => {
  return (
    <div
        className=' text-center my-2 bg-red-600 text-white font-bold p-3 upper'
    >{children}</div>
    
  )
}

export default Alerta