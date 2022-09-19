import React from "react";

/* -- import pagine */
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Location from './routes/Location';
import About from './routes/About';
import NotFound from './routes/NotFound';

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/Portfolio',
        element: <Portfolio/>
    },
    {
        path: '/Location',
        element: <Location/>
    },
    {
        path: '/About',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFound/>
    }

];