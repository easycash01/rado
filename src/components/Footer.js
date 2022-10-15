import React from 'react'

/* CARICO LE ICONE DI FONT AWESOME */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Footer() {

  return (
    <div className='mioFooter'>
      <div className='cont-space'>
        <div className='F-space1'>
       
        <p className='scrittaIcon'>RADO TATTOO STUDIO</p>
        <a href='https://www.facebook.com/radotatt' target={'_blank'}>
        <FontAwesomeIcon icon={brands('square-facebook')} id="icon-foot" />
        </a>
        
        <a href='https://www.instagram.com/rado_tattoo_american_district/' target={'_blank'}>
<FontAwesomeIcon icon={brands('square-instagram')} id="icon-foot2" />
        </a>
        </div>
        <div className='F-space2'>
           <img src='img/loghi/logoRadoBianco.png' className='logoFooter'></img>
        </div>
        <div className='F-space3'>
        <p>All rights reserved RadoTattoo <br></br>
        Copyright © 2022 </p>
        </div>
      </div>  
    </div>
  )
}

export default Footer