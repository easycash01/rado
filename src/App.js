/* -- import array di immagini */
/* import immagini from './immagini'; */

/* page transitor React
framer motion 
yarn -i framer-motion */
/* Page Transitions In React - React Router V6 and Framer Motion Tutorial */


/* -- import react router */
import { BrowserRouter as Router,} from 'react-router-dom';
import MyRouting from './components/MyRouting';

/* -- import componenti */
import MyMenu from './components/MyMenu';
import Footer from './components/Footer';
import React from 'react';

import './css/mobile.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <>
    <div className="App">
<Router>
<MyMenu></MyMenu>
<AnimatedRoutes></AnimatedRoutes>
{/* <MyRouting></MyRouting> */}

</Router>
    </div>
    <Footer></Footer>
    </>
  );
}



export default App;

