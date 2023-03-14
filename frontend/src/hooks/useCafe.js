import { useContext } from "react";
import CafeContext from "../context/CafeContext";

const useCafe=()=>{
    return useContext(CafeContext)
}
export default useCafe;