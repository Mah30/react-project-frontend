import React, { useEffect, useState } from 'react';
import styles from '../CourseDetails/CourseDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';
/* import styles from '../CoursePage/CoursePage.module.css'; */
import { Link } from 'react-router-dom';


const CourseDetails = () => {
    const [course, setCourses] = useState({})
    const [loading, setLoading] = useState(true);
    const { courseId } = useParams(); //capta o ID de cada curso
    const navigate = useNavigate();
    console.log(courseId)


    useEffect(() => {
        fetch(`https://react-project-backend-tu2g.onrender.com/courses/${courseId}`)
        .then((response) => response.json())
        .then((data) => {
            setCourses(data);
            setLoading(false);
        })
        .catch((error) => console.error("Error loading course details", error));
    }, [courseId]); 


    if (loading) {
        return <span>Loading course details...</span>;
      }
    
      if (!course) {
        return <span>Course not found.</span>;
      }


    return ( 

        <div>
            <section className= {styles.container}>
                <div className= {styles.card}>

                    <img
                    className= {styles["card-img"]} 
                    src = {course.image}
                    /* style={{ width: "100%", maxWidth: "400px" }}  */
                    />

                    <h1>Title: {course.title}</h1>
                    <p>Description: {course.description}</p>
                    <p><strong>Price: ${course.price}</strong></p>
                    <p>Students: {course.students}</p>

                    <Link to = {`/purchase/${course.id}`}>
              <button type="button" className="btn btn-primary">Buy it</button>
                </Link>

                    <button
                    className="btn btn-primary"
                    onClick={() => {
                        navigate(-1);
                    }}
                    >
                    Back
                    </button>
                </div>
            </section>
        </div>
     );
};
 
export default CourseDetails;
