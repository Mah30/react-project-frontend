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

import background3 from '../../assets/images/background3.jpg';




const CoursePage = () => {

  const containerStyle = {
    backgroundImage: `url(${background3})`, // Define a imagem de fundo
    backgroundSize: 'cover', // Faz a imagem cobrir o contêiner
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundRepeat: 'no-repeat', // Evita repetição
    height: '100vh', // Ocupa 100% da altura da viewport
    width: '100vw', // Ocupa 100% da largura da viewport
    display: 'flex',
    flexDirection: 'column', // Organiza os elementos verticalmente
  };


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
    { img: colagem,
    text: "Cursos Online",
  },
    { img: flores,
    text: "Cursos Online",
  },
  { img: modelagem,
    text: "Cursos Online",
  },
  { img: encadernacao,
    text: "Cursos Online",
  },
  ]


  return (
    <div style={containerStyle}>

    
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
              <h3></h3>
              <p>{course.text}</p>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
            </div> 
          </div>
        ))}
      </section>
    </div>
  );
};

export default CoursePage;
