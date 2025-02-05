import jsPDF from "jspdf";
import { TextosStaticosCostancia } from "../Resource/Resource";
import imageSep from "../generatePDF/images/SEP_Logo.png"
import secrtEducacion from "../generatePDF/images/secrtEducacion.png"



export default function GeneratePdf(datosAlumno) {
    const constStudent = new jsPDF();

    const alingTextCenter = "center"
    constStudent.addImage(imageSep,"PNG", 15, 10, 50, 28);
    constStudent.addImage(secrtEducacion,"PNG", 150, 10, 50, 28);

    constStudent.setFontSize(10);
    constStudent.text(TextosStaticosCostancia.secrFederalizada, 105, 15, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.secrIndigena, 105, 20, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.jefaturaZona, 105, 25, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.zonaEscolar, 105, 30, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.nombreKinder, 105, 35, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.claveCentroTrabajo, 105, 40, null, null, alingTextCenter);

    constStudent.setFontSize(20);
    constStudent.setFont("helvetica", "italic");
    constStudent.text(TextosStaticosCostancia.logoAño, 105, 70, null, null, alingTextCenter);
    constStudent.text(TextosStaticosCostancia.logoAño1, 105, 80, null, null, alingTextCenter);


    const nombreConstancia = datosAlumno.nombres + datosAlumno.primerApellido;
    const nombreConstanciaSinEspacio = nombreConstancia.replace(" ", "");

    const margin = { top: 125, right: 20, bottom: 100, left: 25 };
    const marginFooter = { top: 180, right: 20, bottom: 100, left: 25 };

    const cuerpo = `Por medio de la presente informo a quien correspondas que el alumno(a) ${datosAlumno.nombres} ${datosAlumno.primerApellido} ${datosAlumno.segundoApellido} con matricula ${datosAlumno.matricula}, nacido el ${datosAlumno.fechaNacimiento} con la curp ${datosAlumno.curp}. Esta actualmente INSCRITO en el ${datosAlumno.grado} del jardin de niñas y niños "CUAUHTÉMOC" con C.C.T 07DCC1395S de educación preescolar del ciclo escolar ${datosAlumno.cicloEscolar} el cual se encuentra ubicado en la esquina de la calle Central Poniente Rayón, Chiapas.`
    const emisionComst = `Se extiende la presente, para los fines legales que al interesado convenga con fecha de emisión el ${datosAlumno.fechaExpedicion}`;
    
    const textoAjustado = constStudent.splitTextToSize(cuerpo, 225);
    const textoAjustadoEmision = constStudent.splitTextToSize(emisionComst, 225);
    
    constStudent.setFont("helvetica", "bold");
    constStudent.text(TextosStaticosCostancia.tituloCostancia, 105, 100, null, null, alingTextCenter);
    
    constStudent.setFont("helvetica", "normal");
    constStudent.setFontSize(13);
    constStudent.text(textoAjustado, margin.left, margin.top, { align: "justify", maxWidth: 160});
    constStudent.text(textoAjustadoEmision, marginFooter.left, marginFooter.top, { align: "justify", maxWidth: 160});
    
    constStudent.setFontSize(13);
    constStudent.text('ATENTAMENTE', 105, 210, null, null, "center");
    constStudent.text('__________________________________', 105, 230, null, null, "center");
    constStudent.text('Lic. Adela Albina Dominguez Diaz', 105, 235, null, null, "center");
    constStudent.text('Directora del jardin de niñas y niños CUAUHTÉMOC', 105, 240, null, null, "center");

    constStudent.save(`Const_${nombreConstanciaSinEspacio}.pdf`);
}
