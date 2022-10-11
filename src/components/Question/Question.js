import React from "react";
import Option from "../Option/Option";
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const wave = () => toast('Hi there')
    const { options, total } = question;
    console.log(question);
    console.log(total);


  
  const ques=question.question.replace( /(<([^>]+)>)/ig, '');
  
  return (
    <div className="container question w-50" >
      
          <div className="d-flex question-info" >
          <h4> {ques}</h4> 
          {/*  */}
          <button onClick={wave}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></button>
          <ToastContainer />
      
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