import React from 'react';
import styles from '../HomePage/HomePage.module.css';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import SearchBar from '../../components/SearchBar';
import CoursePage from '../CoursePage/CoursePage';
import Space from '../../components/Space';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { borderRadius } from '@mui/system';


/* import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; */



const HomePage = () => {

    return ( 
        
        <div>

            <SearchBar/>
            
            <Carousel
             NextIcon = {<ChevronRightIcon />}
             PrevIcon = {<ChevronLeftIcon />}
             /* indicators={false} */ // Remove os indicadores abaixo do carrossel
            navButtonsAlwaysVisible // Opcional: Torna os botões de navegação sempre visíveis
            animation="slide" // Controla a animação (slide
            navButtonsProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    height: '40px',
                    width: '40px', 
                },
            }}
            navButtonsWrapperProps={{
                style: {
                position: 'absolute',
                bottom: '-10px', // Move os botões para a parte inferior da imagem
                left: '50%' ,
                /* right: '50%', */
                transform: 'translateX(-40%)', 
                display: 'flex', // Garante alinhamento
                justifyContent: 'center', // Centraliza os botões horizontalmente
                gap: '5px',
                 },
            }}
            >
                
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

            <Space /> <Space />

            <CoursePage isHomepage={true} />
          
        </div>
        
     );
}
 
export default HomePage;