import Swal from "sweetalert2";

export const IncorrectUser = () => {
    Swal.fire({
        title: "Error de usuario",
        text: "Revise usuario y contraseña",
        icon: "question"
      });
}