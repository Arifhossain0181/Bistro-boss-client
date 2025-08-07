import React from 'react';
import {useState , useEffect} from 'react'
import {createContext ,} from 'react'
import { getAuth } from "firebase/auth";
import app from '../../src/Firebase/Firebase.config.js'
import { onAuthStateChanged , createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut } from "firebase/auth";



const auth = getAuth(app);
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading,setloading] = useState(true);


    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth ,currentuser =>{
            setuser(currentuser)
            console.log(currentuser)
            setloading(false)
        })
        return () =>{
            return unsubscribe()
        }

    } ,[])

    // create user 
    const createuser = ( email, password) =>{
        setloading(true)
      return   createUserWithEmailAndPassword (auth, email, password)
    }

    //sigin 
    const signwithemailPassword = (email ,password)=>{
        setloading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }
    //logout 
    const logout =() =>{
        setloading(true);
        return signOut(auth)
    }
    // uPdate user Profile
    const uPdateProfile =(name ,Photo) =>{
  return    uPdateProfile(auth,currentuser ,{
        displayName:name,PhotoURL:Photo
      })
    }
    const authinfo ={
        user,loading,createuser,signwithemailPassword,logout,uPdateProfile
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;