import { dbkc } from "../firebase";
import {deleteDoc, doc} from 'firebase/firestore';


export const PrintCert = (dataAlumno) => {
    /*printStudentCertificate(dataAlumno);*/
}
export const ViewStudData = (dataAlumno) => {
    /*dataStudent(dataAlumno);*/
}
export const DeleteStudData = async(id) => {
    const collectionName = "alumnos"
    /*if (id != '') {
        await deleteDoc(doc(dbkc, collectionName, id))
        deleteStudent(id)
    }*/
}