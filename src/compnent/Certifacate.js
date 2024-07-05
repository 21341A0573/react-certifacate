import React from 'react';
import cer from './asset/certifacate.png'
import chid from './asset/chidori.png'
import './Certifacate.css'
import { NavLink } from 'react-router-dom';

const Certifacate = ({ name, course, date }) => {
  return (
    <div className='certifacate' >
        <center>
  <div id="certificate" className='inner'

     >
    <h1>Certificate of Completion</h1>
    <p>This is to certify that</p>
    <h2>{name}</h2>
    <p>has successfully completed the course</p>
    <h3>{course}</h3>
    <p>on</p>
    <h4>{date}</h4>
    <img src={chid}  style={{marginTop:'0%'}}></img>
  </div></center>
  </div>
  );
};

export default Certifacate;
