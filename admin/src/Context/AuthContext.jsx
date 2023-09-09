import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../Reducer/AuthReducer";

const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const innitialState = {
        user: JSON.parse(localStorage.getItem("user")) || null,
        loading: false,
        err: null
    }
    const [state, dispatch] = useReducer(AuthReducer, innitialState)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])



    return <AuthContext.Provider value={{...state, dispatch}}> 
        {children}
    </AuthContext.Provider>
}

const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export {AuthContext, AuthContextProvider, useAuthContext}