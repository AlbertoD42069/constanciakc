import { DataStudent, DeleteStudent } from "../alertSwal/AlertSwal";
import { dbkc } from "../firebase";
import {deleteDoc, doc} from 'firebase/firestore';


export const PrintCert = (dataAlumno) => {
    //printStudentCertificate(dataAlumno);
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