import CafeContext from "./CafeContext"
import {toast} from 'react-toastify'
import { categorias as categoriasDB } from '../data/Categorias'
import { useState } from "react"

export const CafeProvider=({children})=>{ 
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActua] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])

    const handleClickCategoria=(id)=>{
       const categoria= categorias.filter(categoria => categoria.id === id)[0]
       setCategoriaActua(categoria)
    }

    const handleClickModal=()=>{
        setModal(!modal)
    }

    const handleSetProducto = producto =>{
        setProducto(producto)
    }

    const handleAgregarPedido= ({categoria_id, imagen, ...producto})=>{
       
        if(pedido.some(pedidoState=>pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState=>pedidoState.id === producto.id ? producto : pedidoState)
           setPedido(pedidoActualizado)
           toast.success('Pedido Actualizado')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }
    }
    return(
        <CafeContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                handleSetProducto,
                producto,
                pedido,
                handleAgregarPedido
            }}
        >{children}</CafeContext.Provider>
    )
}