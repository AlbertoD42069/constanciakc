import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login/LoginKC.css'

export default function LoginKC() {
  return (
    <div className='containerLoginKC'>
      <Form>
      <h3>
        Iniciar Sesion
      </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesion
      </Button>
    </Form>
    </div>
  )
}
