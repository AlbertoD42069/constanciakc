import React ,{useState}  from 'react';
import { TextoStaticoUpdateStudent } from '../Resource/Resource';
import { useLocation } from 'react-router-dom';

import { Col, Form, Row, Container, Button } from 'react-bootstrap';
import { TextFormStatic } from '../Resource/Resource';
import { dbkc } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CampoFaltante, StudentAddedSuccessfully, ErrorAddStudent } from '../alertSwal/AlertSwal';


export default function UpdateStudent() {
   
    const location = useLocation();
    const data = location.state?.alumno
    /*const [dataStud, setDataStud] = useState('')
    setDataStud(data)*/


    const [name, setName] = useState("");
        const [lastName, setLastName] = useState("");
        const [secondLastNname, setSecondLastName] = useState("");
        const [dateOfBirth, setDateOfBirth] = useState("");
        const [studentCurp, setStudentCurp] = useState("");
        const [studentEnrollerd, setStudentEnrollerd] = useState("");
        const [studentGrade, setStudentGrade] = useState("");
        const [schoolYearStudent, setSchoolYearStudent] = useState("");
        const inputName = (e) => {
          const firtLetterCapital = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          const letterCapital = firtLetterCapital.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
          setName(letterCapital)
      }
      const inputLastName = (e) => {
          const firtLetterCapital = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          setLastName(firtLetterCapital)
      }
      const inputSecondLastName = (e) => {
          const firtLetterCapital = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          setSecondLastName(firtLetterCapital)
      }
      const updateStudentKC = async(e) => {}
  return (
    <div><Container>
        <div className='TituloAddStudent'>
            <h1  className='text-center'>{TextoStaticoUpdateStudent.titulo}</h1>
        </div><br/>
        <Form className='FormAddStudent'>
    <Row className="mb-4">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>{TextFormStatic.nombres}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={data.nombres}
          onChange={inputName}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.primerApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={lastName}
          onChange={inputLastName}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>{TextFormStatic.segundoApellido}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={secondLastNname}
          onChange={inputSecondLastName}
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.fechaNacimiento}</Form.Label>
        <Form.Control 
        type="date" 
        required 
        className='InputText'
        value={dateOfBirth}
        onChange={(e)=> setDateOfBirth(e.target.value)} 
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>{TextFormStatic.curp}</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        value={studentCurp}
        maxlength="18"
        onChange={(e)=> setStudentCurp(e.target.value.toUpperCase())}
        />
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>{TextFormStatic.matricula}</Form.Label>
        <Form.Control 
        type="text" 
        className='InputText'
        required 
        value={studentEnrollerd}
        onChange={(e)=> setStudentEnrollerd(e.target.value.toUpperCase())}
        />
      </Form.Group>
    </Row>
    <Row className="CicloEscolar mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>{TextFormStatic.grado}</Form.Label>
        <Form.Select
        type="text" 
        required 
        className='InputTextGrade'
        value={studentGrade}
        onChange={(e)=>setStudentGrade(e.target.value)}>
        <option value="Primero">Primero</option>
        <option value="Segundo">Segundo</option>
        <option value="Tercero">Tercero</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom04">
        <Form.Label>{TextFormStatic.cicloEscolar}</Form.Label>
        <Form.Control 
        type="text"  
        required 
        className='InputText'
        value={schoolYearStudent}
        onChange={(e)=>setSchoolYearStudent(e.target.value)}
        />
      </Form.Group>
    </Row><br/>
    <Button className='AddBtn'size="lg" onClick={updateStudentKC}>{TextFormStatic.btnTitulo}</Button>
  </Form>
    </Container>
    </div>
  )
}
