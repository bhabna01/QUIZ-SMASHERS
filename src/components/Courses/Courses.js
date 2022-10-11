import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses.data.questions[0].question);
    return (
        <div>
            
        </div>
    );
};

export default Courses;