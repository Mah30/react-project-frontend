import React from 'react';
import { useState } from 'react';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState('false');


    const handleSubmit = (event) => {
        event.prevenDefault();

        console.log({ email, password, isChecked});

    }

    return ( 
        <div>
            <h1>Register</h1>
          
        </div>
     );
}
 
export default Register;
