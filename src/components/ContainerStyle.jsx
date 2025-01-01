import React from 'react';
import background3 from '../assets/images/background3.jpg';

const ContainerStyle = () => {

    const containerStyle = {
        backgroundImage: `url(${background3})`, // Define a imagem de fundo
        backgroundSize: 'cover', // Faz a imagem cobrir o contêiner
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Evita repetição
        height: '100vh', // Ocupa 100% da altura da viewport
        width: '100vw', // Ocupa 100% da largura da viewport
        display: 'flex',
        flexDirection: 'column', // Organiza os elementos verticalmente
      };
    return ( 
        <div style={containerStyle}>

        </div>   
     );
}
 
export default ContainerStyle;