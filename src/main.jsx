import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import {router} from './Router/Router'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './contextProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <HelmetProvider>
     <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />

    </div>
   </HelmetProvider>
  </AuthProvider>
  </StrictMode>,
)
