import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Auth from "../Hooks/Auth"; 
export const axiossecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxioshook = () => {
    const navigate =useNavigate()
    const {logout} = Auth()
    // Add a request interceptor authorization header for evry sceure call to request from the server
  axiossecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("interceptor is working"),
        (config.headers.Authorization = `bearer ${token}`);
      return config;
    },
    function (error) {
      
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // Add a response interceptor 401 and 403 error handle
    axiossecure.interceptors.response.use(function(response){
        return response;
    },
async function(error){
    const status= error.response.status;
    console.log("response interceptor error",status.response);
    // for 401 or 403 logout the user and move
    if(status === 401 || status ===403){
await logout()
      navigate('/login')
            
    }
    return Promise.reject(error);

})

  return axiossecure;
};

export default UseAxioshook;
