import React from 'react';
import styles from '../HomePage/HomePage.module.css';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import SearchBar from '../SearchBar';
import CoursePage from '../CoursePage/CoursePage';
import Space from '../../components/Space';


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
            <div style={{ 
                backgroundImage: `url(${img4})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "300px", 
                width: "100vw" 
                }}
                ></div>
            <div style={{ 
                backgroundImage: `url(${img5})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "300px", 
                width: "100vw" 
                }}
                ></div>
            </Carousel> 

            <Space />

            <h1>A melhor Plataforma de Cursos Online, para voce! </h1>

            <Space />

            <CoursePage isHomepage={true} />
          
        </div>
        
     );
}
 
export default HomePage;