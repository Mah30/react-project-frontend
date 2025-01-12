import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



// Search button

const SearchBar = () => {
    const [ search, setSearch] = useState ([]);
    const navigate = useNavigate ();

    const handleSearchChange = (event) => {
        setSearch (event.target.value); // Atualiza o estado com o texto digitado
    };

    const handleSearchSubmit = async () => {
      try {
        const response = await fetch(`${REACT_APP_API_BASE_URL}/courses?q=${search}`); // Busca cursos com base no termo
        if (response.ok) {
          const results = await response.json();
          if (results.length > 0) {
            navigate(`/search-results?q=${search}`, { state: { results } }); // Redireciona para a página de resultados com os cursos encontrados
          } else {
            navigate('/404'); // Redireciona para 404 se nenhum curso for encontrado
          }
        } else {
          console.error(`HTTP Error: ${response.status}`);
        }
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
    

    return ( 
        <div>
          
            {/* Barra de pesquisa */}

      <Box
        sx={{
          backgroundColor: 'white',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          zIndex: 2, // Garante que fique acima do carrossel
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for courses..."
          size="small"
          value={search}
          onChange={handleSearchChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') handleSearchSubmit();
          }}
          sx={{
            width: '60%',
            maxWidth: '500px',
            borderRadius: '4px',
            backgroundColor: 'white',
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchSubmit}
          sx={{ 
            marginLeft: '8px' , 
            textTransform: 'Capitalize',
            '&:hover': {
              backgroundColor: '#bc3908',
            }
            

            } }>

          Search

        </Button>
      </Box>
               

        </div>

     );
}
 
export default SearchBar;