import React from 'react';
import './Topic.css';

import { Link } from 'react-router-dom';
const Topic = ({topic}) => {
    const { id,name,logo,total } = topic;
    return (
        <div >
            
        <div className="card ">
        <img src={logo} className="card-img-top bg-dark" alt="..."></img>
         <div className="card-body">
           <h5 className="card-title">{name}</h5>
           <p className="card-text">Number of Questions {total}</p>
           <Link className="btn btn-primary w-75" to={`/quizes/${id}`}>Start Now</Link>
        </div>
         </div>
     </div>
    );
};

export default Topic;