import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/img/notFoundImage.jpg';



const NotFoundPage = () => {
    return ( 
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 style={{color: "#16425b"}}>404 Not Found</h2>
            <p style={{color: "#16425b"}}>Sorry, the page you're looking for doesn't exist.</p>
            <img
            src={notFoundImage}
            alt='Image to not found page'
            style = {{maxWidth: "100%", height: "auto", }}
            
            />
            <Link to ="/" style = {{color:"blue", textDecoration: "underline"}}>Back to Home Page</Link>
        </div>
     );
}
 
export default NotFoundPage;