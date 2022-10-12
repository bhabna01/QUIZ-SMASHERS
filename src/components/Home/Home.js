import React from 'react';
import './Home.css';
import quiz from '../../images/exam.webp'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';
const Home = () => {
    const topics=useLoaderData();
    const {data}=topics;
    console.log(topics);
    return (
        <div className='home' >
            
            <img src={quiz} alt='' ></img>
            <div className='heading'>
               <h1>Participate in quiz</h1> 
               <p>Test Your Limits</p>
            </div>
        
            
             <div className="topic-container">
                {
                  data.map(topic=><Topic key={topic.id} topic={topic}>

                  </Topic>)
                }
            </div>
            

           
           
            
        </div>
    );
};

export default Home;