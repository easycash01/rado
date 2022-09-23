import React, {useReducer} from 'react'
/* import reacr dom router (il link per al posto di A e href) */
import { Link } from "react-router-dom";

/* importo css */
import '../css/stileComp.css';

/* font awesome per react */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

/* importo motion di frame motion 
per fare transitor page ed effetti */
import {motion} from 'framer-motion'




const reducer = (state, action ) =>{
  if (action.type === 'APRICHIUDIMENU'){
    return {
      isMenuOpen: !state.isMenuOpen
    }
  }
  return state;
};

const initialState = {
  isMenuOpen: false
}

const variants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 10, velocity: -100 },
      duration: 0.5
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
      duration: 9
    }
  }
};


/* INIZIO DEL COMPONENTE MENU */

const MyMenu = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  var url = window.location.pathname;

const toogleMenu = ()=>{
  dispatch ({type: 'APRICHIUDIMENU'})
  
}

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
    
    <div className='bottMobile' onClick={() =>toogleMenu()}>
       {
      state.isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="iconaToggleMenu" id="bottoneMobile"/> :  <FontAwesomeIcon icon={faBars} className="iconaToggleMenu" id="bottoneMobile"/>
       }
    {/*    <FontAwesomeIcon icon={faBars} className="iconaToggleMenu" id="bottoneMobile"/> */}
    </div>

    <motion.div className='menuMobile' id={state.isMenuOpen ? "menu-mobileOpen" : "menu-mobileClose" }
    /* key={0}
    initial={{ opacity: 0, x: 400 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0}}
    transition={{ duration: 1.5, ease: "easeInOut"}} */
   variants={variants}
   initial="closed"
   animate={state.isMenuOpen ? 'open' : 'closed'}
   transition={{ 
     duration: 800, 
     staggerChildren: 4, 
     staggerDirection: !state.isMenuOpen  ? 1 : -1 
   }}
    >
    <ul className='listaMenuMobile'>
           <div onClick={() =>toogleMenu()}><Link to='/'> <li class={url === "/" ? "active" : ""}>HOME</li> </Link> </div> 
           <div onClick={() =>toogleMenu()}><Link to='/Portfolio'> <li class={url === "/Portfolio" ? "active" : ""}>PORTFOLIO</li> </Link> </div>
           <div onClick={() =>toogleMenu()}><Link to='/Location'> <li class={url === "/Location" ? "active" : ""}>LOCATION </li> </Link> </div>
           <div onClick={() =>toogleMenu()}><Link to='/About'> <li class={url === "/About" ? "active" : ""}>ABOUT </li> </Link> </div>
            {/* <Link to='/Contact'> <li>CONTACT</li> </Link>  */}
         
        </ul>
    </motion.div>


  </div>
  </>
  
  )
}

export default MyMenu;