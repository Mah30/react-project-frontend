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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

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
             /* indicators={false} */ 
            navButtonsAlwaysVisible 
            animation="slide" 
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
                bottom: '-10px', 
                left: '20%' ,
                /* right: '50%', */
                transform: 'translateX(20%)', 
                display: 'flex', 
                justifyContent: 'center', 
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

            
          
            <Button
            color="primary"
            /* variant="outlined" */
            variant="contained"
            
            sx={{
              position: 'absolute',
              top: '72%',
              right: '20px',
              /* transform: 'translateY(-50%)',  */

              '&:hover': {
            backgroundColor: '#115293',
            /* left: '60%' */ 
            justifyContent: 'flex-end' ,
              },
            }}
            component={Link}
            to="/coursepage"
          >
            Click for more
          </Button>
          
        </div>
        
     );
}
 
export default HomePage;