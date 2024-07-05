import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certifacate from './Certifacate';

export default function Layout() {
  return (
    <div>


      <Routes>
        <Route path="/cer" element={<Certifacate />}>
         
        </Route>
      </Routes>
   

    </div>
  )
}
