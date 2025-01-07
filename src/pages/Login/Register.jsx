import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Register = () => {
    const [firstname, setFirstName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [country, setCounstry] = useState('');
    const [isChecked, setIsChecked] = useState('false');


    const handleSubmit = (event) => {
        event.prevenDefault();

        console.log({ name, email, password, isChecked});

    }

    return ( 
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    onChange={event => setFirstName(event.target.value)} />
                </label>

                <button type='submit'>Submit</button>
            
            </form>    
            
          
        </div>
     );
}
 
export default Register;


