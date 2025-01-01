import React from "react";
import styles from './CoursePage.module.css';
import pinturaOvo from '../../assets/images/pinturaOvo.jpg';
import origumi from '../../assets/images/origumi.jpg';
import costura from '../../assets/images/costura.jpg';
import molduraQuadros from '../../assets/images/molduraQuadros.jpg';
import flores from '../../assets/images/flores.jpg';
import modelagem from '../../assets/images/modelagem.jpg';
import encadernacao from '../../assets/images/encadernacao.jpg';
import colagem from '../../assets/images/colagem.jpg';

import ContainerStyle from "../../components/ContainerStyle";


import { useState } from "react";


const CoursePage = ({isHomepage}) => {

  const courses = [
    { img: pinturaOvo, 
    title: "Cursos Online",
    description: "Aprenda as técnicas básicas de pintura em ovos decorativos.",
    students: "260,942",
    rating: "99%",
    price: "$20",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: costura, 
    title: "Cursos Online", 
  },
    { img: molduraQuadros,
    title: "Cursos Online",
  },
    { img: colagem,
    title: "Cursos Online",
  },
    { img: flores,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
    { img: encadernacao,
    title: "Cursos Online",
  },
  ]

  const coursesToDisplay = isHomepage ? courses.slice(0,4) : courses; 


  return (
   
      <section className= {isHomepage ? styles.containerSmall : styles.container}>
        {coursesToDisplay.map((course, index) => (

          <div className= {styles.card} key={index}>
              <img 
                className= {styles["card-img"]} 
                src={course.img} 
                alt={course.title} />  

              <div>
                <h3 
                className={styles.cardTitle}>{course.title}
                </h3>
                <span
                className={styles.cardDescription}>{course.description}
                </span>
                <div className={styles.cardStatus}>
                  <span>{course.students} students</span>
                  <span>{course.rating} de avaliacao</span>
                </div>

              <div className={styles.cardPricing}>
                <span className={styles.cardPrice}>{course.price}</span>
              </div>
            </div> 
          </div>
        ))}
      </section>
    
  );
};

export default CoursePage;
