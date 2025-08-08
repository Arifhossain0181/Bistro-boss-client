import React from 'react';
import axios from 'axios';  
export const axiossecure = axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxioshook = () => {
    return axiossecure
   
};

export default UseAxioshook;