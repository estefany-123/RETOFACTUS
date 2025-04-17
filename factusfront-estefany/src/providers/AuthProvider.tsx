import { createContext, useContext, useEffect, useState } from "react";

type Auth = {
    authenticated : boolean,
    setAuthenticated : React.Dispatch<React.SetStateAction<boolean>>,
    user : User,
    setUser : React.Dispatch<React.SetStateAction<User>>
}

type User = {
    email : string | null
}

export const AuthContext = createContext<Auth | null>(null);

export const useAuth = () => useContext(AuthContext) as Auth;

export default function AuthProvider({children} : {children : React.ReactNode}){

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        if(token && email){
            setUser({email : email});
            setAuthenticated(true);
        }
    },[]);

    const [user, setUser] = useState<User>({email : null});
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return(
        <AuthContext.Provider value={{authenticated, setAuthenticated, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}