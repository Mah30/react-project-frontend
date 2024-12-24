/* import React from 'react';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Button from '@mui/material/Button';
import { useRef} from 'react'; */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
/* import Sidebar from './components/Sidebar/Sidebar'; */

function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            /* sx={{ mr: 1 }} */
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> {/* Permite que o Typography ocupe o espaço restante, empurrando outros elementos para as extremidades.  */}
            
            News

          </Typography>

          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
          
        </Toolbar>
      </AppBar>
      
      <Sidebar state = {state} setState = {setState} toggleDrawer = {toggleDrawer}></Sidebar>
    </Box>
  );
}

export default Navbar;




/* const Navbar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    

    return ( 

        <header>                       

            <nav className={styles.nav} ref={navRef}>

                <img className={styles.logo} src="./src/assets/img/logo.png"/>

                <h2>M'Art</h2>

                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/service">Service</a>
                    <a href="/about">About</a>
                    
                    <button className='nav-btn' nav-close-btn onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                      
            </nav>

            <button className='nav-btn' onClick={showNavBar}> 
                <FaBars/>
            </button>

        </header>
    );
}
 
export default Navbar; */