import React from 'react';
import { useContext } from 'react'; // ✅ useContext React থেকে
import { AuthContext } from '../contextProvider/AuthProvider';

const Auth = () => {
   const auth = useContext(AuthContext)
   return auth;
};

export default Auth;