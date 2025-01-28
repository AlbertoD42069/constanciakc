import Swal from "sweetalert2";

export const DataStudent = (datosAlumno) => {
    Swal.fire({
      icon: "info",
      title: "Datos Alumno",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      html: `
      <div>
        <table class="table table-bordered" style="text-align:left;">
          <tbody>
            <tr>
             <th>Nombre completo: </th> 
             <th>${datosAlumno.nombres + ' ' + datosAlumno.primerApellido + ' '+ datosAlumno.segundoApellido}</th>
             </tr>
             <tr>
              <th>Fecha de nacimiento: </th>
              <th>${datosAlumno.fechaNacimiento}</th>
             </tr>
             <tr>
              <th>Curp</th>
              <th>${datosAlumno.curp}</th>
             </tr>
             <tr>
             <th>Matricula</th>
             <th>${datosAlumno.matricula}</th>
             </tr>
             <tr>
             <th>Grado</th>
             <th>${datosAlumno.grado}</th>
             </tr>
             <tr>
             <th>Ciclo escolar</th>
             <th>${datosAlumno.cicloEscolar}</th>
             </tr>
          </tbody>
        </table>
      </di>
      `,
    });
  }