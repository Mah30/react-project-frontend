import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../assets/images/notFoundImage.jpg';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';



const NotFoundPage = () => {
    const navigate = useNavigate();

    


    return ( 

        <>
            <SearchBar/>
        
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1 style={{color: "#16425b"}}>404 Not Found</h1>
                <h3 
                style={{color: "#16425b"}}>Sorry, the page you're looking for doesn't exist.</h3>
                
                <img
                src={notFoundImage}
                alt='Image to not found page'
                style = {{maxWidth: "60%", height: "auto", }}
                />

            </div>

                <Link to ="/" style = {{color:"blue", textDecoration: "underline"}}>

                    <button
                    className="btn btn-primary"
                    >
                    Back to Homepage
                    </button>
                </Link>
                
            
        </>
     );
}
 
export default NotFoundPage;

// Botar o botao de voltar para cima, na pagina