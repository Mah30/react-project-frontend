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

    const newUser = { firstname, lastname, email, password };

    try {
      // Checa se o email j tá registrado
      const response = await fetch(`http://localhost:4000/register?email=${email}`);
      const existingUsers = await response.json();

      if (existingUsers.length > 0) {
        setError('This email is already registered!');
        setSuccess('');
       
            return; // Stops the process if the email already exists 
      }


      // REgistrta novo usuario
      const registerResponse = await fetch('http://localhost:4000/register', {
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



