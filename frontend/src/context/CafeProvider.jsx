import CafeContext from "./CafeContext"
import {toast} from 'react-toastify'
import { categorias as categoriasDB } from '../data/Categorias'
import { useEffect, useState } from "react"

export const CafeProvider=({children})=>{ 
        
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActua] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const nuevoTotal =  pedido.reduce((total, producto)=>(producto.precio * producto.cantidad)+total,0)
        setTotal(nuevoTotal)
    }, [pedido])

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

    const handleAgregarPedido= ({categoria_id, ...producto})=>{
       
        if(pedido.some(pedidoState=>pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState=>pedidoState.id === producto.id ? producto : pedidoState)
           setPedido(pedidoActualizado)
           toast.success('Pedido Actualizado')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }
    }
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }
    const handleEliminarProductoPedido = id =>{
        const EliminarProducto = pedido.filter(producto=> producto.id !== id)
        setPedido(EliminarProducto)
        toast.warning('Eliminado del Pedido')
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
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
            }}
        >{children}</CafeContext.Provider>
    )
}