import React from 'react'
/* font awesome per react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown , faHome, faClock } from '@fortawesome/free-solid-svg-icons';


import {motion} from 'framer-motion'

const Location = () => {
  return (
    <div className='location-page'> 
    <div className='locationflex'>
   
     <div className='locationTop'>  </div> 

     <div className='locationTopinfo'>   
<motion.div className='logoLocation'
    key="5"
    initial={{ opacity: 0, x: 400 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 400 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}>
<img src="img/loghi/logoRadoBianco.png"></img>
<br></br> <br></br>
<p>DI ALESSANDRO SOLIVERAS</p>
 <br></br> <br></br>

</motion.div>

<motion.div className='divFreccetta'
    key="5"
    initial={{ y: 400 }}
    animate={{ y: 0 }}
    exit={{ y: 400 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
>
<p className='indicazione'>Scorri la pagina</p>
<FontAwesomeIcon icon={faAngleDoubleDown } className="freccetta" id=""/>
</motion.div>
</div>
</div>



<div className='descloc containerMio'>
      <div className='location-six'>
      <img src='img/loghi/logoRado_bianco.png' className='logolocation'></img>
      <br></br><br></br>
      <p>LOCALE TOTALMENTE RINNOVATO</p>
      <br></br>
      <p>Studio completamente rinnovato e ristrutturato, un design unico, elaborato ed ideato da professionisti del settore
       che si accosta alla perfezione con il lavoro e il background dell'artista.<br></br> 
       Lo studio RADO TATTOO si presenta accogliente ordinato e ben organizzato, con attenzione particolare alla cura 
       della pulizia e dell'igiene. </p>
      </div>

      <div className='location-dex'>
      {/* <img src='img/nego.43.jpg' className='negoFuori2'></img> */}
      </div>
</div>


<div className='descloc2 containerMio'>
      <div className='location-six2'> </div>

      <div className='location-dex2'>
      <img src='img/radostudio3_2.jpg' className='negoFuori'></img>
    {/*   <img src='img/radoDecoration.jpg' className='negodentro'></img> */}
      </div>
</div>


<div className='titoloPort'>
<img src='img/sepa2.png' className=''></img>  
<br></br><br></br>
<p>LOCATION</p>
</div>

<div className='descloc3 containerMio'>
      <div className='location-six3'>  
      <h1>RADO TATTOO STUDIO</h1>
      <h2>DI ALESSANDRO SOLIVERAS</h2>
      <br></br> 
      
      <FontAwesomeIcon icon={faClock} className="icon-location" id=""/>
      <p className='indicazione'>E' preferibile prenotare un appuntamento, dal Lunedi' al Sabato.</p>
      <p className='indicazione'>Puoi richiedere un appintamento premento il pulsante Whatsapp.</p>
      <a href="https://wa.me/+393420836045" target={'_blank'}>
{/* <FontAwesomeIcon icon={brands('whatsapp')} className="logoWp" /> */}
<img src='img/loghi/Wp.png' className='logoWplocation'></img>
        </a>
      <p></p>
      <br></br>
      <FontAwesomeIcon icon={faHome} className="icon-location" id=""/>
      <br></br> 
      <p>Via Cardinale Guglielmo Massaia, 17</p>
      <p>07100 Sassari SS</p>      
   <br></br> 
   <p className='indicazione'>Premi il pulsante per aprire la mappa di google sul tuo dispoditivo</p>
     <a href="https://www.google.com/maps/place/Rado+Tattoo+di+Alessandro+Soliveras/@40.747464,8.5493461,15z/data=!4m5!3m4!1s0x0:0x643c619a04d8e3bd!8m2!3d40.747464!4d8.5493461" target="blank">
      <button className='bottoneMaps'>APRI GOOGLE MAPS</button>
     </a>
      </div>

      <div className='location-dex3'>
      <div className='doveSiamo containerMio'>
<iframe className='mappaG'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10466.794705963495!2d8.552404087882591!3d40.74454179953972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x643c619a04d8e3bd!2sRado%20Tattoo%20di%20Alessandro%20Soliveras!5e0!3m2!1sit!2sit!4v1665587559833!5m2!1sit!2sit"
             
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="true"
              tabIndex="0"
            />
         
</div> 
      </div>
</div>





<br></br> <br></br> <br></br> <br></br>

<br></br> <br></br>
<div className='negofooter'>

</div>
    </div> /* chiusura location-page */
  )
}

export default Location