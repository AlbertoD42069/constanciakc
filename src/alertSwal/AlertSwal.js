import Swal from "sweetalert2";

export const IncorrectUser = () => {
    Swal.fire({
        title: "Error de usuario",
        text: "Revise usuario y contraseña",
        icon: "question"
      });
}
export const CampoFaltante = () => {
    Swal.fire({
      title: "Campos Faltantes",
      text: "Hay campos no rellenados, favor de revisar y llenarlos",
      icon: "question"
    });
  }
  export const StudentAddedSuccessfully = (name, lastName, secondLastNname) => {
    const nameStudent = name + ' ' + lastName + ' ' +  secondLastNname
    Swal.fire({
      title: "¡Exito!",
      html: `Alumno con matricula: ${nameStudent} agregado`,
      icon: "success"
    });    
  }
  export const ErrorAddStudent = () => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Alumno no agregado",
    });
  }
  
  export const DataStudent = (datosAlumno) => {
    Swal.fire({
      icon: "info",
      title: "Datos Alumno",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",


      cancelButtonColor: "green",
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
    }).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});;
  }
  export const DeleteStudent =(id) => {
    Swal.fire({
      title: "Alumno Eliminado",
      text: `${id}`,
      icon: "error"
    });
  }