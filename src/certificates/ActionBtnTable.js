import {DeleteStudent } from "../alertSwal/AlertSwal";
import { DataStudent } from "../alertSwal/DataStudent";
import { dbkc } from "../firebase";
import {deleteDoc, doc} from 'firebase/firestore';
import { UpdateStudent } from "../alertSwal/UpdateStudent";

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
export const UpdateStudData = (dataAlumno) => {
    UpdateStudent(dataAlumno);
}