import React from 'react'
import NavBarKC from '../navBar/NavBarKC';
import '../homeKC/HomeKC.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from '../addStudent/AddStudent';
import CertificatesKC from '../certificates/CertificatesKC';
import UpdateStudent from '../certificates/UpdateStudent';

export default function HomeKC() {
  return (
    <div className='containerHomeKC'>
      <NavBarKC/>
      <Routes>
      <Route path='/'element={<CertificatesKC/>}/>
      <Route path='addStudent' element={<AddStudent/>}/>
      <Route path='updateStudent' element={<UpdateStudent/>}/>    
      </Routes> 
    </div>
  )
}
/* <Route path='updateStudent' element={<UpdateStudent/>}/> */