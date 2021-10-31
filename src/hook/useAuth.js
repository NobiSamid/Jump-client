import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider";

// this component is one of the powerful component that pass data of usefire base everywhere

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;