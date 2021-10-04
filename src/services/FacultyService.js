import axios from "axios";

export const getFaculty = async () => {
  return await axios.get("/faculty/");
};

export const getFacultyById = async (facultyId) => {
  return await axios.get("/faculty/" + facultyId);
};

export const createFaculty = async (faculty) => {
  return await axios.post("/faculty/", faculty);
};

export const updateFaculty = async (faculty, facultyId) => {
  return await axios.put("/faculty/" + facultyId, faculty);
};

export const deleteFaculty = async (facultyId) => {
  return await axios.delete("/faculty/" + facultyId);
};
