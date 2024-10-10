import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../OutlateAll/Main/Main';
import Home from '../../Home/Home';
import Error from '../Error/Error';
import Login from '../../AuthencationAll/Login/Login';

let route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }, 
    {
        path: "*",
        element: <Error></Error>
    }

])

export default route;