import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizes.css'

const Quizes = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    const { name, questions } = quiz.data;
    return (
        <div>
             <h2 className='text-center mb-5 mt-5'>Quiz of {name}</h2>
            <div className="quiz-container ">
            {
                questions.map((question) =><Question question={question} key={question.id}></Question>)
            }
            </div>
        </div>
    );
};
export default Quizes;





