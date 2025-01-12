import React, { useState } from 'react';

const Register = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!firstname || !lastname || !email || !password) {
      setError('All fields are required.');
      setSuccess('');
      return; // Interrompe o envio se algum campo estiver vazio
    }


    const newUser = { firstname, lastname, email, password };

    try {
      // Checa se o email j tá registrado
      const response = await fetch(`process.env.REACT_APP_API_BASE_URL/register?email=${email}`);
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        setError('This email is already registered!');
        setSuccess('');
       
        return; // interrompe o process se o email ja existir
      }


      // REgistrta novo usuario
      const registerResponse = await fetch('process.env.REACT_APP_API_BASE_URL/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newUser),
      });

      if (!registerResponse.ok) {
        throw new Error('Error while registering the user');
      }

      // Se o registro for realmente feito:
      setSuccess('User successfully registered!');
      setError('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setIsChecked(false);


    } catch (error) {
      console.error('Error:', error); // Error:
      setError('Error during registration. Please try again.');
    }
  };

  return (
    <div>
      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Type your first name"
          />
        </label>

        <br />  

        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Type your last name"
          />
        </label>
        
        <br /> 

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
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Type your password"
          />
        </label>

        <br />

        {/* <label>
          I agree to the terms:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)}
          />
        </label> */}

        <br />

        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;



