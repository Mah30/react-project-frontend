import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const { courseId} = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://react-project-backend-tu2g.onrender.com/courses/${courseId}`)
        .then((response) => response.json())
        .then((data) => {
          setCourse(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading course for purchase", error);
          setLoading(false);
        });
    }, [courseId]);
  
    if (loading) {
      return <p>Carregando...</p>;
    }
  
    if (!course) {
      return <p>Curso não encontrado.</p>;
    }
  
    return (
      <div>
        <h1>Compra do Curso: {course.title}</h1>
        <p>Descrição: {course.description}</p>
        <p>Preço: ${course.price}</p>
        <button onClick={() => alert("Compra realizada com sucesso!")}>Comprar Agora</button>
      </div>
    );
  };
  
 
export default PurchasePage;