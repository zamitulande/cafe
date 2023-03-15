import CafeContext from "./CafeContext"
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
        setPedido([...pedido, producto])
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