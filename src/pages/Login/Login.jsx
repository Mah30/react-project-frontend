import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 
const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault(); //impede o carregamento da pagina

        const newLogin = { email, password };

        
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json' ,
                },
                body: JSON.stringify(newLogin),      
            });

            if (!response.ok) {
                throw new Error ('Login failed');
            }

            if(response.ok) {
                const newLoginData = await response.json();
                navigate(`/login/ ${newLoginData}`)
            }
         }  catch (error) {
            console.log(error)
    }
  };
     

    return ( 
        <div>
            
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Type your Email here"  
                /> 
                </label>
                <br />
                <label> Password
                <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Type your password here"
                />
                </label>

                <br />

                <button type='submit'>Sign in</button>
                {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                
            </form>
        </div>
     );
};
 
export default Login;

 


