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