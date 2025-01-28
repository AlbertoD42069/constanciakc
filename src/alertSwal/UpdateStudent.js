import React, { useState } from "react";
import Swal from "sweetalert2";

export const UpdateStudent = async (dataAlumno) => {
    const nombre = dataAlumno.nombres
    const grado = dataAlumno.grado
    const cicloEscolar = dataAlumno.cicloEscolar

    const { value: formValues } = await Swal.fire({

        title: "Actualizar datos de alumno",
        confirmButtonText: 'Actualizar',
        html: `
          <h4> ${nombre} </h4>
          <input id="grado" class="swal2-input" placeholder="grado">
          <input id="cicloEscolar" class="swal2-input" placeholder="ciclo escolar">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("grado").value,
            document.getElementById("cicloEscolar").value
          ];
        }
      });
      if (formValues) {
        console.log(formValues);
        console.log(grado);
        console.log(cicloEscolar);

      }
  }
  /*
const { value: formValues } = await Swal.fire({
  title: "Multiple inputs",
  html: `
    <input id="swal-input1" class="swal2-input">
    <input id="swal-input2" class="swal2-input">
  `,
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById("swal-input1").value,
      document.getElementById("swal-input2").value
    ];
  }
});
if (formValues) {
  Swal.fire(JSON.stringify(formValues));
}
  */