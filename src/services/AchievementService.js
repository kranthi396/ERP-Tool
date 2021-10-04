import axios from "axios";

export const getStudentAchivement = async (studentUsn)=>{
    return await axios.get('/achievement/student/'+studentUsn);
}

export const getFacultyAchivement = async (facultyId)=>{
    return await axios.get('/achievement/faculty/'+facultyId);
}

export const deleteAchivement = async (id)=>{
    return await axios.delete('/achievement/'+id);
}

export const addAchivement = async (achievement) => {
    return await axios.post("/achievement/", achievement);
}