import React, { useState } from 'react';



const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    return [formValues, handleChange];
  };

  


const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [formValues, handleChange] = useForm({ email: "", password: "" });

    

    const handleSubmit = async (event) => {
        event.preventDefault(); //impede o carregamento da pagina
        try {
            const response = await fetch.post("", {
              email,
              password,
            });
            localStorage.setItem("token", response.data.token);
      alert("Login bem-sucedido!");
    } catch (err) {
      setError("Login falhou. Verifique suas credenciais.");
    }

    console.log("Email:", formValues.email);
    console.log("Password", formValues.password);
  };


        
   



    return ( 
        <div>
            
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Type your Email here"  />

                <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Type your password here"
                />

                <button type='submit'>Sign in</button>
                
            </form>
        </div>
     );
}
 
export default Login;

 


