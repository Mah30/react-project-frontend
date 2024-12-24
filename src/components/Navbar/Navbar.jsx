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
  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sidebar></Sidebar>
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