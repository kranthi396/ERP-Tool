import axios from "axios";

export const getStudentGrievance = async (studentUsn)=>{
    return await axios.get('/grievance/student/'+studentUsn);
}

export const getStudentsListGrievance = async ()=>{
    return await axios.get('/grievance/students');
}

export const getFacultysLIstGrievance = async ()=>{
    return await axios.get('/grievance/facultys');
}
export const getFacultyGrievance = async (facultyId)=>{
    return await axios.get('/grievance/faculty/'+facultyId);
}

export const getAllGrievance = async ()=>{
    return await axios.get('/grievance/');
}

export const addGrievance = async (grievance) => {
    return await axios.post("/grievance/", grievance);
}

export const deleteGrievance = async (id)=>{
    return await axios.delete('/grievance/'+id);
}