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

    const handleSearchSubmit = () => {
        navigate(`/search-results?q=${search}`);
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
            textTransform: 'Capitalize'
            } }>

          Search

        </Button>
      </Box>
               

        </div>

     );
}
 
export default SearchBar;