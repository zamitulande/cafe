import CafeContext from "./CafeContext"
import { categorias as categoriasDB } from '../data/Categorias'
import { useState } from "react"

export const CafeProvider=({children})=>{ 
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActua] = useState(categorias[0])

    const handleClickCategoria=(id)=>{
       const categoria= categorias.filter(categoria => categoria.id === id)[0]
       setCategoriaActua(categoria)
    }

    return(
        <CafeContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >{children}</CafeContext.Provider>
    )
}