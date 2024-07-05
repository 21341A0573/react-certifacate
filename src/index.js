import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './index.css';
import Layout from './compnent/Layout';
import { BrowserRouter } from 'react-router-dom';


 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <App/>
   <Layout/></BrowserRouter>
  </React.StrictMode>
);


