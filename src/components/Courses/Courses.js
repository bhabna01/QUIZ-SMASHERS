import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    const data=courses.data.questions;
    const {question}=data;

    console.log(data.length);
    console.log(courses.data.questions[0].question);
    return (
        <div>
           <div className="products-container">
                {
                  data.map(()=><li>{question}</li>) 
                }
            </div> 
        </div>
    );
};

export default Courses;