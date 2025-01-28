import Swal from "sweetalert2";

export const DataStudent = (datosAlumno) => {
    Swal.fire({
      icon: "info",
      title: "Datos Alumno",
      html: `
      <div>
        <h4>Nombre completo: ${datosAlumno.nombres + ' ' + datosAlumno.primerApellido + ' '+ datosAlumno.segundoApellido}</h4>
        <h4>Fecha de nacimiento: ${datosAlumno.fechaNacimiento}</h4>
        <h4>Curp: ${datosAlumno.curp}</h4>
        <h4>Matricula: ${datosAlumno.matricula}</h4>
        <h4>Grado: ${datosAlumno.grado}</h4>
        <h4>Ciclo escolar: ${datosAlumno.cicloEscolar}</h4>
      </di>
      `,
    });
  }