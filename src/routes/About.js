import React from 'react'
/* import { faWhatsapp } from '@fortawesome/free-brands-svg-icons' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {motion} from 'framer-motion'


function About() {
  return (
    <div className='paginaAbout'>
       <motion.div className='info'
        key="9"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
       >
       <img src='img/loghi/logoRadoBianco.png' className='logoAboutScritta'></img>
       <br></br>
       <img src='img/loghi/logoRado_bianco.png' className='logoAbout'></img>
       <br></br>
       <h1 className='titoloAbout'>RADO TATTOO DI ALESSANDRO SOLIVERAS</h1>
     <br></br>
      
<p className='indicazione indiMobile'>Contattami ora da WhatsApp</p>

<a href="https://wa.me/+393405858078" target={'_blank'}>
{/* <FontAwesomeIcon icon={brands('whatsapp')} className="logoWp" /> */}
<img src='img/loghi/Wp.png' className='logoWpimg'></img>
        </a>
        <br></br> 
        <p className='indicazione'>Seguimi sui Social Network</p>
      <a href='https://www.facebook.com/radotatt' target={'_blank'}>
        <FontAwesomeIcon icon={brands('square-facebook')} className="iconAbout iconAboutMobile" />
        </a>
        <a href='https://www.instagram.com/rado_tattoo_american_district/' target={'_blank'}>
<FontAwesomeIcon icon={brands('square-instagram')} className="iconAbout iconAboutMobile" />

        </a>
        <br></br>
       </motion.div>


       <img src='img/sepa2.png' className='nodesk'></img> 

        <div className='imgAbout'></div>
       
    </div>
  )
}

export default About