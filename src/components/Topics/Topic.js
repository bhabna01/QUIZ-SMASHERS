import React from 'react';
import './Topic.css';


const Topic = ({topic}) => {
    const { id,name,logo,total } = topic;
    return (
        <div >
            
        <div className="card ">
        <img src={logo} className="card-img-top bg-dark" alt="..."></img>
         <div className="card-body">
           <h5 className="card-title">{name}</h5>
           <p className="card-text">Number of Questions {total}</p>
          <a href="#" className="btn btn-primary">Start Now</a>
        </div>
         </div>
     </div>
    );
};

export default Topic;