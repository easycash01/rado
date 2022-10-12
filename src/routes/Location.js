import React from 'react'
/* font awesome per react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import { MotionConfig } from 'framer-motion';

import {motion} from 'framer-motion'

const Location = () => {
  return (
    <div className='location-page'> 
     <div className='locationTop'>  </div> 

<motion.div className='logoLocation'
    key="5"
    initial={{ opacity: 0, x: 400 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 400 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}>
<img src="img/loghi/logoRadoBianco.png"></img>
 <br></br>
{/*<img src="img/loghi/logoRado_bianco.png"></img> */}
</motion.div>

<motion.div className='divFreccetta'
    key="5"
    initial={{ y: 400 }}
    animate={{ y: 0 }}
    exit={{ y: 400 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
>
<FontAwesomeIcon icon={faSquareCaretDown} className="freccetta" id=""/>
</motion.div>


<h2 className='titoloLocation'>LOCATION</h2>

    <div className='descloc'>

      <div className='location-six'>
     
      </div>

      <div className='location-dex'>
      
      </div>
</div>



<br></br> <br></br> <br></br> <br></br>
<br></br> <br></br> <br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
<br></br> <br></br>
    </div> /* chiusura location-page */
  )
}

export default Location