import React from 'react';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

import { useState } from 'react';

const HomePage = () => {
    


    return ( 
        <div>
            <h1>HomePage</h1>
                

            <Carousel>
            <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px", width: "100vw" }}></div>
            <div style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px", width: "100vw" }}></div>
            <div style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px", width: "100vw" }}></div>
            </Carousel>   
          
        </div>
     );
}
 
export default HomePage;