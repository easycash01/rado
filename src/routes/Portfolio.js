import React from 'react'

import './../css/lavoriPage.css';
import Gallery from '../components/Gallery';

import {motion} from 'framer-motion'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Portfolio() {
  return (
    <div className='paginaLavori' >

        <motion.div className='imgLavori'
         key="2"
         initial={{ opacity: 0, x: 400 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 400 }}
         transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className='containerMio cont-desc-Lavori'>
          
          <div className='logoPortfolio'>
          
          <img src='./img/loghi/logoRado_bianco.png' alt=''></img>

          </div>
          <div className='descrizione-lavori'>
          <h3>PORTFOLIO</h3>
          <hr className='lineaPort'></hr>
          <br></br>
          <h3>RADO TATTOO</h3>
          <br></br>
          <p>Una collezione degli ultimi lavori eseguiti sui clienti che si sono prestati
            a voler documentare il lavoro eseguito.
            Se siete curiosi o interessati di voler vedere altri lavori, di sotto sono presenti
            i link per entrare nei social network.
          </p>
             <br></br>
            

            <div className="socialPortfolio">
            <p>Seguimi sui social</p>
       <a href='https://www.facebook.com/radotatt' target={'_blank'}>
       <FontAwesomeIcon icon={brands('square-facebook')} id="icon-Port" />
       </a>
       
       <a href='https://www.instagram.com/rado_tattoo_american_district/' target={'_blank'}>
<FontAwesomeIcon icon={brands('square-instagram')} id="icon-Port2" />
       </a>
       </div>

          </div>
          </div>
          {/* <hr className='containerMio lineaPort'></hr> */}
        </motion.div>
       
     

        <motion.div className='contGalleria containerMio'
         key="3"
         initial={{ opacity: 0, y: 300 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 300 }}
         transition={{ duration: 0.7, ease: "easeInOut" }}
        >
      <Gallery></Gallery>

       <br></br> <br></br> <br></br>
        </motion.div>
      

    </div>
  )
}

export default Portfolio