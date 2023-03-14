import CafeContext from "./CafeContext"

export const CafeProvider=({children})=>{
    const hola = "hola zami"
    return(
        <CafeContext.Provider
            value={{
                    hola
            }}
        >{children}</CafeContext.Provider>
    )
}