import React from 'react'

export default function AddStudent() {
  return (
    <div>
        
    </div>
  )
}
/*
<div>
      <Container className='Container'><br/>
        
    <Form className='FormAddStudent'>
    <Row className="mb-4">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>{TextFormStatic.nombres}</Form.Label>
        <Form.Control
          required
          type="text"
          className='InputText'
          value={name}
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
    <Button className='AddBtn'size="lg" onClick={addStudentKC}>{TextFormStatic.btnTitulo}</Button>
  </Form>
  </Container>
    </div>
--------------------------



<div className='TituloAddStudent'>
            <h1  className='text-center'>{TextFormStatic.titulo}</h1>
        </div><br/>
*/