import React from 'react';
import axios from 'axios';   // <-- এই লাইন মিসিং ছিল

const axiosPublic = axios.create({
  baseURL: `http://localhost:5000`
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
