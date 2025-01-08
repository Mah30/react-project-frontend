import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CoursePage from '../CoursePage/CoursePage';

const UserSpace = ({firstname}) => {
  
   

    return ( 
        <div>
            <h1>
                Welcome to your Learn Space {firstname}!
            </h1>

            <h3>What to learn next</h3>

            <h3>We offer a 10% discount on the courses below if purchased together.  </h3>

            <CoursePage isUserSpace={true} />

            <h2>Adicione mais! </h2>

            {/* Inserir 3 cursos aqui e em seguida a possibilidade de adicionar mais */}

                 
            <Button
            color="primary"
            /* variant="outlined" */
            variant="contained"
            
            sx={{
              position: 'absolute',
              top: '72%',
              right: '20px',
              transform: 'translateY(-50%)',
              backgroundColor: '#003049',  
              color: 'white', 
              borderRadius: '6px',
              padding: '8px 16px',
            /*   textTransform: 'capitalize',*/
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              '&:hover': {
            backgroundColor: '#e9c46a',
            /* left: '60%' */ 
            justifyContent: 'flex-end' ,
              },
            }}
            component={Link}
            to="/courses"
          >
            Click for more
          </Button>

        </div>
     );
}
 
export default UserSpace;

// adicionar aqui um botao de delete e update, em relacao aos cursos (ver video de Mat)