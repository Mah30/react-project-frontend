import React from 'react';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import SearchBar from '../SearchBar';
import CoursePage from '../CoursePage/CoursePage';


/* import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; */



const HomePage = () => {
  
    return ( 
        
        <div>

            <SearchBar/>
            
            <Carousel>
            <div style={{ 
                backgroundImage: `url(${img1})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "300px", 
                width: "100vw" 
                }}
                ></div>
            <div style={{ 
                backgroundImage: `url(${img2})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "300px", 
                width: "100vw" 
                }}
                ></div>
            <div style={{ 
                backgroundImage: `url(${img3})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "300px", 
                width: "100vw" 
                }}
                ></div>
            </Carousel> 

            <h1>A melhor Plataforma de Cursos Online, para voce! </h1>

            <CoursePage/>
          
        </div>
        
     );
}
 
export default HomePage;