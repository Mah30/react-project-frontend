import React from "react";
import { useEffect, useState } from "react";
import styles from './CoursePage.module.css';
/* import pinturaOvo from '../../assets/images/pinturaOvo.jpg';
import origumi from '../../assets/images/origumi.jpg';
import costura from '../../assets/images/costura.jpg';
import molduraQuadros from '../../assets/images/molduraQuadros.jpg';
import flores from '../../assets/images/flores.jpg';
import modelagem from '../../assets/images/modelagem.jpg';
import encadernacao from '../../assets/images/encadernacao.jpg'; */
/* import colagem from '../../assets/images/colagem.jpg'; */
import { Link } from 'react-router-dom';
/* import ContainerStyle from "../../components/ContainerStyle"; */
import CourseDetails from "../CourseDetails/CourseDetails";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const API_URL = 'https://react-project-backend-tu2g.onrender.com'; //url to the backend


const CoursePage = ({isHomepage, isUserSpace}) => {
  const [courses, setCourses] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);
  const [selectedCourse, setSelectedCourse] = useState(null);


const fetchCourses = async () => {    
    try{
        const response = await fetch (`${API_URL}/courses`);
        if(response.ok) {
            const data = await response.json();
            setCourses(data);//atualiza o estado com os cursos
        }else{
            console.error(`Error HTTP: ${response.status}`);
        }
    } catch (error) {
        console.error('Something was wrong', error);
    } finally {
      setLoading(false);  // Finaliza o estado de carregamento
    } 
};


//useEffect p carregar os cursos
useEffect(() => {
  fetchCourses();
}, []);


// carregamento ou erro
/* if (loading) return <p>Carregando...</p>;
if (error) return <p>Erro ao carregar cursos: {error}</p>; */


//para mostrar os cursos em numero reduzido nessas duas paginas abaixo
const coursesToDisplay = isHomepage 
? courses.slice(0,4) 
: isUserSpace 
? courses.slice(0,2)
: courses; 

   

if (loading) return <p>Loading courses...</p>;



return (

  <div> 
    {selectedCourse ? (
    <CourseDetails 
      course = {selectedCourse} 
      onBack = {() => setSelectedCourse(null)} 
    />
    ) : (
   
    <section className= {isHomepage ? styles.containerSmall : styles.container}>
      {coursesToDisplay.map((course, index) => (

        <div className= {styles.card} key={index}>

            <Link to = {`/course/${course.id}`} >
            <img 
              className= {styles["card-img"]} 
              src={course.image || "API_URL/generate-image"} 
              alt={course.title}
            />
              
            </Link>  

            <div>
              <h3 
              className={styles.cardTitle}>{course.title}
              </h3>
              <span
              className={styles.cardDescription}>{course.description || "Description no disponible"} 
              </span>
              <div className={styles.cardStatus}>
                <span>{course.students || "No"} students</span>
                
              </div>

            <div className={styles.cardPricing}>
              <span className={styles.cardPrice}>${course.price || "Gratis"} </span>
            </div>

            <Link to = {`/purchase/${course.id}`}>
              {<button type="button" className={styles.btnprimary}

              >
              <ShoppingCartIcon style={{ marginRight: '8px' }} />
                Buy it
              </button>}

              
            </Link>
          </div> 
        </div>
      ))}
    </section>
      )}
  </div>
);

}

export default CoursePage;
