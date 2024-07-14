import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
// 1
export const AuthContex = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email ,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const singIn =(email ,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribd =onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        });
        return () =>{
           return unsubscribd()
        }
    }, []);

    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
        logOut

    }
    return (
        <AuthContex.Provider value={authInfo} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;