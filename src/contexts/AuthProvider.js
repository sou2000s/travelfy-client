import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [userProfile , setUserProfile] = useState() 
    const [loading  , setLoading] = useState(true)

    const googleProvider  = new GoogleAuthProvider()


    const googleAuthentication = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const createUser = (email , password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth , email , password)
    }
  
    const setUserNameAndProfile = (profile)=>{

        return updateProfile(auth.currentUser , profile)
    }
    
    const login = (email , password) => {
        setLoading(true)

          return signInWithEmailAndPassword(auth , email , password)
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        return signOut(auth)
    }

    const authInfo = {
        createUser ,
        user ,
        setUserNameAndProfile , 
        setUserProfile,
        logout,
        login,
        googleAuthentication,
        loading,
        setLoading            
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
           setLoading(false)

        })
        return ()=> unsubscribe()
    } , [userProfile])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;


