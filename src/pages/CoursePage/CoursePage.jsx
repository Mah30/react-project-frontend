import React from "react";
import styles from './CoursePage.module.css';
import pinturaOvo from '../../assets/images/pinturaOvo.jpg';
import origumi from '../../assets/images/origumi.jpg';
import costura from '../../assets/images/costura.jpg';
import molduraQuadros from '../../assets/images/molduraQuadros.jpg';




const CoursePage = () => {

  const courses = [
    {img: pinturaOvo, 
    text: "Cursos Online",
    students: "260, 942",
    rating: "99%",
    price: "$20",
    oldPrice: "$60",

  },
    {img: origumi, 
    text: "Cursos Online", 
  }, 
    {img: costura, 
    text: "Cursos Online", 
  },
    { img: molduraQuadros,
    text: "Cursos Online",
  }, 
  ]


  return (
    <section className= {styles.container}>
      {courses.map((course, index) => (

        <div className= {styles.card} key={index}>
          <div>
            <img 
              className= {styles["card-img"]} 
              src={course.img} 
              alt={course.text} />
          </div>

          <div>
            <h3>{}</h3>
            <p>{course.text}</p>
            <div>
              <span></span>
              <span></span>
              
            </div>
          </div> 
        </div>
      ))}
    </section>
  );
};

export default CoursePage;
