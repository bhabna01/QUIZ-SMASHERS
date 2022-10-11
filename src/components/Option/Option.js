import React from 'react';
import './Option.css'
const Option = ({option,question}) => {
    return (
        <div ClassName="option">
            

           <p> <input type="radio" name={question} id={ option} value={ option}/>
            <label for={ option}> { option}</label></p>
        </div>
        
    );
};

export default Option;