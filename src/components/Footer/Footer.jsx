import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>

            <footer className = {styles.footer}>

             

                <p>Desenvolvido por Mariah.       Find this source on {""}
                    <a href="https://github.com/Mah30/react-project-frontend" target='_blank'>
                    
                        GitHub! 

                    </a>
                </p>    
            
            </footer>
        </>

    );
};


export default Footer;