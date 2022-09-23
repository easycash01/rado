import React from 'react'

import './../css/lavoriPage.css';
import Gallery from '../components/Gallery';

import {motion} from 'framer-motion'

function Portfolio() {
  return (
    <div className='paginaLavori' >
        <div className='imgLavori'>
          <h2>PORTFOLIO</h2>
        </div>
       
        <motion.div className='contGalleria containerMio'
         key="2"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
        >
      <Gallery></Gallery>

       <br></br> <br></br> <br></br>
        </motion.div>
      

    </div>
  )
}

export default Portfolio