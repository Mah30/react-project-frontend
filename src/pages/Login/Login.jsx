import React from 'react';

import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

// preview-start
const providers = 
[
    { id: 'credentials', 
    name: 'Email and Password' }
];

// preview-end

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
        const email = formData?.get('email');
        const password = formData?.get('password');
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
      );
      resolve(/* {
        type: 'CredentialsSignin',
        error: 'Invalid credentials.',
      } */);
    }, 300);
  });
  return promise;
};

function Login() {
  const theme = useTheme();

  return (
    // preview-start
    <AppProvider theme={theme}>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Faz a página ocupar a altura total da janela
          width: '100vw', // Faz a página ocupar a largura total da janela
          backgroundColor: '#f5f5f5', // Cor de fundo clara
          padding: '10px', // Adiciona espaço interno em telas menores
        }}
      >
            <div
            style={{
                width: '900px', // Largura fixa para o formulário
                maxWidth: '150%', // Ajusta dinamicamente em telas menores
                backgroundColor: 'white', // Fundo branco para contraste
                padding: '4px', // Espaçamento interno
                borderRadius: '8px', // Bordas arredondadas
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Sombra para destaque
            }}
            >
            <SignInPage
                signIn={signIn}
                providers={providers}
                slotProps={{ emailField: { autoFocus: false } }}
            />
            </div>
        </div>
    </AppProvider>
    
    // preview-end
  );
}
 
export default Login;

