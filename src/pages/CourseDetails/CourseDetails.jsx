import React, { useEffect, useState } from 'react';
import styles from '../CourseDetails/CourseDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const [course, setCourses] = useState()
    const { courseId } = useParams(); //capta o ID de cada curso
    const navigate = useNavigate();


    return ( 
        <div>
        

            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <p>Students: {course.students}</p>

            <button
            className="btn btn-primary"
            onClick={() => {
                navigate(-1);
            }}
            >
            Back
            </button>
        </div>
     );
};
 
export default CourseDetails;
