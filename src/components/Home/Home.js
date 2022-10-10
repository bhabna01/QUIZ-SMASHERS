import React from 'react';
import './Home.css';
import quiz from '../../images/quiz.jpg'
const Home = () => {
    return (
        <div className='home' >
            <img src={quiz} alt=''></img>
            <div className='heading'>
               <h1>Participate in quiz</h1> 
               <p>Test Your Limits</p>
            </div>
          

            

           
            
        </div>
    );
};

export default Home;