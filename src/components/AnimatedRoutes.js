import React from 'react';

import {Route, Routes,useLocation} from 'react-router-dom';

/* -- import pagine */
import Home from '../routes/Home';
import Portfolio from '../routes/Portfolio';
import Location from '../routes/Location';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
  const {location} = useLocation();
console.log(location); 
  return (
    <AnimatePresence>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes