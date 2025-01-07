import React, { useState } from 'react';


const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault(); //impede o carregamento da pagina
        console.log("Email:", email);
        console.log("Password", password);

        if (email === "teste@email.com" && password === "123456"){
            alert("Your login has been successful")
        } else {
            alert ()
        }
    }

    return ( 
        <div>
            
            <form>
            <h1>Login</h1>
            </form>
        </div>
     );
}
 
export default Login;

 


