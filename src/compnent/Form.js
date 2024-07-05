import React, { useState } from 'react';
import './Form.css'
import { motion } from "framer-motion"

const Form = ({ setName, setCourse, setDate,name, course, date }) => {
  const handleNameChange = (e) => setName(e.target.value);
  const handleCourseChange = (e) => setCourse(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  return (
    <div  className='Total'>
    <form className='Form'><motion.div 
  >
    <div >
        <input type="text" 
        
        placeholder='ENTER NAME'
        
        value={name} className='input1' onChange={handleNameChange} />
      </div>
      <div>
       
        <input type="text"
        placeholder='COURSE' value={course} className='input1' onChange={handleCourseChange} />
      </div>
   
        
        <input type="date" 
        placeholder=''  value={date} className='input1' onChange={handleDateChange} /></motion.div>
     
    </form></div>
  );
};

export default Form;
