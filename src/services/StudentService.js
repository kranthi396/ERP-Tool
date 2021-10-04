import axios from "axios";

export const getStudents = async () => {
  return await axios.get("/student/");
};

export const getStudentById = async (studentUsn) => {
  return await axios.get("/student/" + studentUsn);
};

export const createStudent = async (student) => {
  return await axios.post("/student/", student);
};

export const updateStudent = async (student, studentUsn) => {
  return await axios.put("/student/" + studentUsn, student);
};

export const deleteStudent = async (studentUsn) => {
  return await axios.delete("/student/"+studentUsn);
}

