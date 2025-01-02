import React from 'react';
import background4 from '../../assets/images/background4.jpg';
import mulherprogramandoF from '../../assets/images/mulherprogramandoF.png';
import SearchBar from '../../components/SearchBar';
/* import { Button } from '@mui/material'; */




const AboutPage = ({handleSearchSubmit}) => {

    const containerStyle = {
        backgroundImage: `url(${background4}`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh', 
        width: '100vw', 
        display: 'flex',
        flexDirection: 'column', 
      };


    return ( 

        <div style={containerStyle}>

            <SearchBar/>


            <h2>About this Project</h2>
            <p>This is a Webpage Project created with React for learning practice </p>
            <p>Created from: Mariah</p>

            

            <img src={mulherprogramandoF} alt="woman programming" />

            <a href="https://github.com/Mah30" target='_blank'>GitHub</a>
            <a href="https://www.linkedin.com/in/alinemariah-webdesigner/" target='_blank'>Linkedin</a>
        </div>

        


     );
}
 
export default AboutPage;