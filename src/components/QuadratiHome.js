import React from 'react'
import { Link } from "react-router-dom";

import {motion} from 'framer-motion'

const QuadratiHome = () => {
  return (
    
    <div className='quadratiHomeFlex'>

<motion.div
key={1}
 initial={{ opacity: 0, x: 400 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 100 }}
 transition={{ duration: 0.5, ease: "easeIn"}}
>
   <Link to='/portfolio' className='Quad-portfolio'>
        <div className='Quad-portfolio'>
            <div className='scrittaQuadrati'>
              <h3>LAVORI</h3>
            </div>
        </div>    
     </Link>
</motion.div>  

<motion.div
key={2}
 initial={{ opacity: 0, x: 400 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 100 }}
 transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3}}
 
>
        <Link to='/Location' className='Quad-location'>    
        <div className='Quad-location'>
            <div className='scrittaQuadrati'>
            <h3>LOCATION</h3>
            </div>
        </div>
        </Link>
</motion.div>


<motion.div
key={2}
 initial={{ opacity: 0, x: 400 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 100 }}
 transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6}}
 
>
        <Link to='/About' className='Quad-Moreinfo'>
        <div className='Quad-Moreinfo'>
              <div className='scrittaQuadrati'>
              <h3>MORE INFO</h3>
              </div>
        </div>
        </Link>
</motion.div>        
    </div>
  )
}

export default QuadratiHome