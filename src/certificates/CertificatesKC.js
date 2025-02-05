import React,{ useEffect, useState } from 'react'
import { dbkc } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { TextCertificatesKC } from '../Resource/Resource';
import { PrintCert, ViewStudData, DeleteStudData } from './ActionBtnTable';
import '../certificates/ActionBtnTable.css';

const CertificatesKC =()=> {
    
    const [collecionAlumnos, setCollecionAlumnos] = useState([]);
    const collectionName = "alumnosKC";
    
    useEffect(() => {
        const getCollection = async () => {
            try {
                const alumnosRef = collection(dbkc,collectionName);
                const q = query(alumnosRef, orderBy('horaExpedicion'));  
                const snapshot = await getDocs(q);
                const datos = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  setCollecionAlumnos(datos);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            };
        };
        getCollection();
    }, []);
  return (
    <div>
        <Container className='Container'><br/>
         <div className='TituloAddStudent'>
            <h1  className='text-center'>{TextCertificatesKC.titulo}</h1>
        </div><br/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{TextCertificatesKC.nombreCompleto}</th>
          <th>{TextCertificatesKC.curp}</th>
          <th>{TextCertificatesKC.fechaEmision}</th>
          <th colSpan={3}>{TextCertificatesKC.accionesConstancia}</th>
        </tr>
      </thead>
      <tbody>
        {collecionAlumnos.slice().reverse().map((dataAlumno)=>(
          <tr key={dataAlumno.id}>
            <td>{dataAlumno.nombres} {dataAlumno.primerApellido} {dataAlumno.segundoApellido}</td>
            <td>{dataAlumno.curp}</td>
            <td>{dataAlumno.fechaExpedicion}</td>
            <td><button className='printCertificate' onClick={() => PrintCert(dataAlumno)}>{TextCertificatesKC.imprimir}</button></td>
            <td><button className='viewStudentData' onClick={() => ViewStudData(dataAlumno)}>{TextCertificatesKC.verDatosAlumno}</button></td>
            <td><button className='deleteStudentData' onClick={() => DeleteStudData(dataAlumno.id)}>{TextCertificatesKC.eliminar}</button></td>

          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </div>
  )
}
export default  CertificatesKC

//<td><button className='deleteStudentData' onClick={() => Update(dataAlumno)}>{TextCertificatesKC.actualizar}</button></td>
