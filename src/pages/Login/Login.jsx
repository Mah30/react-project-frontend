import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 
const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!email || !password) {
          setError('All fields are required.');
          setSuccess('');
          return; // Interrompe o envio se algum campo estiver vazio
        }

        const newLogin = { email, password };

        
        try {
            // Busca o usuário pelo email e senha
            const response = await fetch(
              `https://react-project-backend-tu2g.onrender.com/login?email=${email}&password=${password}`
            );
            const user = await response.json();
      
            if (!response.ok) {
              setError('Invalid email or password!');
              return;
            }
      
            // Redireciona o usuário para outra página após login ok
            navigate('/userspace');
          } catch (error) {
            console.error(error);
            setError('Error logging in. Please try again.');
          }
        };
      
        return (
          <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Type your email"
                />
              </label>
              <br />
              <label>
                Senha:
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Type your password"
                />
              </label>
              <br />
              <button type="submit">Sign in </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        );
};
 
export default Login;

 


