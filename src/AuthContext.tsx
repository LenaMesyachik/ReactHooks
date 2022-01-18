import {createContext, Dispatch, FC, SetStateAction, useMemo, useState} from "react";
 type ContextType = {
     isAuth:boolean,
     setIsAuth: Dispatch<SetStateAction<boolean>>
 }
export const AuthContext = createContext<ContextType>({} as ContextType)
export const AuthProvider: FC = ({children}) => {

    const [isAuth, setIsAuth] = useState(true)
    const value = useMemo(() => ({
        isAuth,
        setIsAuth
    }), [isAuth]) //измен только при изм isAuth

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}