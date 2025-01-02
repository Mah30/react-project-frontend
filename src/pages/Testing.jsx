import React from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Testing = () => {
    return ( 

        <Box sx={{ display: 'flex', gap: 2 }}>
   <Button
    sx={{
      textTransform: 'capitalize',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradiente
      color: 'white',
      borderRadius: '8px',
      padding: '8px 16px',
      '&:hover': {
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', // Gradiente invertido
      },
    }}
    component={Link}
    to="/login"
  >
    Login
  </Button>
  <Button
    sx={{
      textTransform: 'capitalize',
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      color: 'white',
      borderRadius: '8px',
      padding: '8px 16px',
      '&:hover': {
        background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
      },
    }}
    component={Link}
    to="/register"
  >
    Register
  </Button>


  
</Box>


     );
}
 
export default Testing;