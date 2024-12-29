import React from 'react';
import Register from './Register';
/* import React, { useState } from 'react';  */
import { Routes, Route } from 'react-router-dom';




const Login = () => {
    return ( 
        <div>

            <h1> Login</h1>

            <Routes>
                <Route path = '/login/register' element ={<Register/>} />

                
                
                
                
            </Routes>    
        </div>
     );
}
 
export default Login;




/* const Login = () => {
    const [showRegister, setShowRegister] = useState(false);

    return ( 
        <div>
            {showRegister ? (
                <Register />
            ) : (
                <div>
                    <h1>Login</h1>
                    <button onClick={() => setShowRegister(true)}>Go to Register</button>
                </div>
            )}
        </div>
    );
}

export default Login; */