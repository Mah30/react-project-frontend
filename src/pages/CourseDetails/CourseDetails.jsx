import React, { useEffect, useState } from 'react';
import styles from '../CourseDetails/CourseDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const [course, setCourses] = useState({})
    const { courseId } = useParams(); //capta o ID de cada curso
    const navigate = useNavigate();
    console.log(courseId)

    return ( 

        <div>
        
            <h1>Title: {course.title}</h1>
            <p>Description: {course.description}</p>
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
