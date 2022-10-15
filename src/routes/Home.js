import React from 'react'
import '../css/homepage.css';

import QuadratiHome from '../components/QuadratiHome';
/* import {motion} from 'framer-motion' */

function Home() {
  return (
    <div className='spazioHome'
 /*    key="1"
    initial={{ scaleY: 5 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.5, ease: "easeIn"}} */
    >
        <div className="imgMain">
          {/* <img src='img/rado1.jpg'></img> */}
          <div className='dentroImgHome'>
            <div className='sopraImgHome1'>
              <img src='img/loghi/logoRadoBianco.png' className='logoSopraHome'></img>
              <div>
              <img src='img/loghi/logoRado_bianco.png' className='logoSopraHome2'></img>
              </div>
            </div>

            <div className='sopraImgHome2'>
             <h1>RADO TATTOO STUDIO</h1>
             <h2>DI ALESSANDRO SOLIVERAS</h2>
            
            
            </div>
            
          </div>
        </div>

        <div className='quadratiHome'>
          <QuadratiHome></QuadratiHome>  
        </div>

    </div>
  )
}

export default Home