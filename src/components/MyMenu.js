import React from 'react'
/* import reacr dom router (il link per al posto di A e href) */
import { Link } from "react-router-dom";

/* importo css */
import '../css/stileComp.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const MyMenu = () => {
  return (
    <>
  <div className='menu'>
  
  <Link to='/'>
    <div className='logoMenu'>  
    <img src="img/loghi/logoRadoBianco.png "></img>  
    </div>    
    </Link> 

    <div className='spazioMenu'>
        <ul className='listaMenu'>
            <Link to='/'> <li>HOME</li> </Link> 
            <Link to='/Portfolio'> <li>PORTFOLIO</li> </Link> 
            <Link to='/Location'> <li>LOCATION </li> </Link> 
            <Link to='/About'> <li>ABOUT </li> </Link> 
            {/* <Link to='/Contact'> <li>CONTACT</li> </Link>  */}
         
        </ul>
      
    </div>  
    
    <div className='bottMobile'>
 
       <FontAwesomeIcon icon={faBars} className="iconaToggleMenu" id="bottoneMobile"/>
    </div>

  </div>
  </>
  )
}

export default MyMenu;