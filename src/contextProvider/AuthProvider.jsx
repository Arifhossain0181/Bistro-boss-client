import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../src/Firebase/Firebase.config.js";
import UseAxiosPublic from "../Hooks/UseAxiosPublic.jsx";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      //   console.log(currentuser)
      if (currentuser) {
        // get token and store in  client side
        const userinfo = {
          email: currentuser.email,
        };
        axiosPublic.post("/jwt", userinfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        //do
        localStorage.removeItem("access-token");
      }
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  // create user
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sigin
  const signwithemailPassword = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };
  // uPdate user Profile
  const uPdateProfile = (name, photo) => {
    const user = auth.currentUser;
    if (!user) return Promise.reject(new Error("No current user"));
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  //Google sign in
  const googleSignIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authinfo = {
    user,
    loading,
    createuser,
    signwithemailPassword,
    logout,
    uPdateProfile,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
