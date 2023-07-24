import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     <Toaster></Toaster>
     </div>
  </React.StrictMode>,
)
