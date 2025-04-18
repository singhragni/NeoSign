import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Error';
import Body from './Body';
import "./index.css";

// Route the path.

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Body/>,
        errorElement: <Error/>
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={appRoute}></RouterProvider>)