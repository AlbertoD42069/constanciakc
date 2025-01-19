import React from 'react'
import NavBarKC from '../navBar/NavBarKC';
import '../homeKC/HomeKC.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from '../addStudent/AddStudent';
import CertificatesKC from '../certificates/CertificatesKC';

export default function HomeKC() {
  return (
    <div className='containerHomeKC'>
      <NavBarKC/>
      <Routes>
      <Route path='/'element={<CertificatesKC/>}/>
      <Route path='addStudent' element={<AddStudent/>}/>    
      </Routes>
    </div>
  )
}
