import React from 'react';
import background3 from '../assets/images/background3.jpg';

const ContainerStyle = () => {

    const containerStyle = {
        backgroundImage: `url(${background3})`, // imagem de fundo
        backgroundSize: 'cover', // p imagem cobre o contêiner
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh', 
        width: '100vw', 
        display: 'flex',
        flexDirection: 'column', 
      };
    return ( 
        <div style={containerStyle}>

        </div>   
     );
}
 
export default ContainerStyle;