import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,question}) => {
    const {correctAnswer}=question;
    const wave = () => {
        if(option===question.correctAnswer)
        {
            toast('You are right')
        }
        else{
            toast('You are wrong')
        }
    }
    


    return (
       
             <div>
            
                
                <p><input onClick={wave} type="radio" name={question} id={ option} value={ option}/>
            <label htmlFor={option} > {option}</label></p>
            <ToastContainer />
                
           </div>
        
        
        
    );
};

export default Option;