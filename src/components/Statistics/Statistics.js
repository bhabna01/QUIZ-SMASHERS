import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics=useLoaderData();
    const {data}=topics;
    console.log(data);
    
   
    
    return (
        <div style={{ width: '100%', height: 300 }}>
          <h1 className='mt-5 mb-5 text-center'>Topic vs Total Questions</h1>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
           
        
    );
};

export default Statistics;