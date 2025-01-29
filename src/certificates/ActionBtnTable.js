import { DataStudent, DeleteStudent } from "../alertSwal/AlertSwal";
import { dbkc } from "../firebase";
import {deleteDoc, doc} from 'firebase/firestore';
import GeneratePdf from "../generatePDF/GeneratePdf";


export const PrintCert = (dataAlumno) => {
    GeneratePdf(dataAlumno)
}
export const ViewStudData = (dataAlumno) => {
    DataStudent(dataAlumno);
}
export const DeleteStudData = async(id) => {
    const collectionName = "alumnosKC"
    if (id != '') {
        await deleteDoc(doc(dbkc, collectionName, id))
        DeleteStudent(id)
    }
}