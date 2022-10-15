import React from 'react'
/* import { faWhatsapp } from '@fortawesome/free-brands-svg-icons' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function About() {
  return (
    <div className='paginaAbout'>
       <div className='info'>
       <img src='img/loghi/logoRadoBianco.png' className='logoAboutScritta'></img>
       <br></br>
       <img src='img/loghi/logoRado_bianco.png' className='logoAbout'></img>
       <br></br>

     <br></br>
      
<p className='indicazione'>Contattami ora da WhatsApp</p>

<a href="https://wa.me/+393420836045" target={'_blank'}>
{/* <FontAwesomeIcon icon={brands('whatsapp')} className="logoWp" /> */}
<img src='img/loghi/Wp.png' className='logoWpimg'></img>
        </a>
        <br></br> 
        <p className='indicazione'>Social Network</p>
      <a href='https://www.facebook.com/radotatt' target={'_blank'}>
        <FontAwesomeIcon icon={brands('square-facebook')} className="iconAbout" />
        </a>
        <a href='https://www.instagram.com/rado_tattoo_american_district/' target={'_blank'}>
<FontAwesomeIcon icon={brands('square-instagram')} className="iconAbout" />

        </a>
        <br></br><br></br>
        <h1 className='titoloAbout'>RADO TATTOO - DI ALESSANDRO SOLIVERAS</h1>
       </div>
       <img src='img/sepa2.png' className='nodesk'></img> 

        <div className='imgAbout'></div>
       
    </div>
  )
}

export default About