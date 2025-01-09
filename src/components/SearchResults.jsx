import React from 'react';
import { useLocation } from 'react-router-dom';


const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || {}; // Cursos encontrados
  
    if (!results || results.length === 0) {
      return <p>No courses found. Try another search!</p>;
    }
  
    return (
      <div>
        <h1>Search Results</h1>
        <div>
          {results.map((course) => (
            <div key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description || 'No description available'}</p>
              <img
                src={course.image || 'https://via.placeholder.com/150'}
                alt={course.title}
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
 
export default SearchResults;