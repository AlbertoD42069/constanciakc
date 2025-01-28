import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutBtn from './LogoutKCBtn';
import '../navBar/NavBarKC.css';

export default function NavBarKC() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>{'Jardin de niñas y niños Cuauhtemoc'}</Navbar.Brand>
          <Nav className="navItem justify-content-end">
            <Nav.Link href='/'>{'Constancias'}</Nav.Link>
            <Nav.Link href='addStudent'>{'Registrar Alumno'}</Nav.Link>
            <Nav.Link><LogoutBtn/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
/*
            <Nav.Link><LogoutBtn/></Nav.Link>
*/