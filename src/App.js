import React, { useState } from 'react';
import Certificate from './compnent/Certifacate';
import Form from './compnent/Form';
import DownloadButton from './compnent/Button';
import back from './compnent/asset/back.png'
import './App.css'
import { motion } from "framer-motion"


export default function App() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [change, setchange] = useState(true);

  return (
    <div
   
  ><div className='background1'></div><div className='background2'></div>
    <center>
      { change && <div><Form setName={setName} setCourse={setCourse} setDate={setDate}
   name={name} date={date} course={course} />
      <button onClick={(e)=>{setchange(!change)}} className='preview'>preview</button></div>}

   { !change && <div><Certificate name={name} course={course} date={date} />
      <DownloadButton  /><img src={back} className='back' onClick={(e)=>{setchange(!change)}}></img></div>}
      </center>
    </div>
  );
};




