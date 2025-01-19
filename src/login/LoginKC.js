import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import '../login/LoginKC.css'
import { TextLoginStatic } from '../Resource/Resource';
import LoginBtn from './LoginBtn';

export default function LoginKC() {

    const [userKC, setUserKC] = useState('');
    const [passKC, setPassKC] = useState('');

  return (
    <div className='containerLoginKC'>
      <Form>
      <h3>
        Iniciar Sesion
      </h3>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control 
        type="email" 
        placeholder={TextLoginStatic.email}
        value={userKC} 
        onChange={(e) => setUserKC(e.target.value)}
        className='inputKCs'
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control 
        type="password" 
        placeholder={TextLoginStatic.contraseña} 
        value={passKC} 
        onChange={(e) => setPassKC(e.target.value)}
        className='inputKCs'
        /><br/>
      </Form.Group>
      <LoginBtn user={userKC} pass={passKC}/>
    </Form>
    </div>
  )
}
