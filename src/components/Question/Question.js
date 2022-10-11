import React from "react";
import Option from "../Option/Option";
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({ question }) => {
    const { options } = question;
    console.log(question);
    console.log(question.length);
  const lastDigit = question.id.slice(question.id.length - 1);
  const quizNo = parseInt(lastDigit);
  console.log(quizNo);
//   const ques= question.question.slice (3, -4)
  
  const ques=question.question.replace( /(<([^>]+)>)/ig, '');
  
  return (
    <div className="container question w-50" >
      
          <div className="d-flex question-info" >
          <h4> {ques}</h4>  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            
              <div className="option-container">
              {
                  options.map(option=><Option option={option} question={question}></Option>)
              }
             </div>
      </div>
   
  );
};

export default Question;