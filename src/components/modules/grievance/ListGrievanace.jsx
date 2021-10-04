import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { deleteGrievance, getAllGrievance, getFacultyGrievance, getFacultysLIstGrievance, getStudentGrievance, getStudentsListGrievance } from '../../../services/GrievanceService'

function ListGrievanace(props) {

    const type = localStorage.getItem("type")
    const usn = localStorage.getItem("usn")
    const fId = localStorage.getItem("fid")

    const [grievance, setGrievance] = useState([]);
    const [student, setStudent] = useState([]);
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        if (type == "student") {
            getStudentGrievance(usn).then((res) => {
                setGrievance(res.data);
            });
        }
        else if (type == "hod") {
            getStudentsListGrievance().then((res) => {
                setStudent(res.data);
            },getFacultysLIstGrievance().then((res)=>{
                setFaculty(res.data)
            }));
        }
        else {
            getFacultyGrievance(fId).then((res) => {
                setGrievance(res.data);
            });
        }
    }, [])

    const createGrievance = () => {
        props.history.push('/add-grievance')
    }

    const deleteOperation = (id) => {
        deleteGrievance(id).then(res => {
            setGrievance(grievance.filter(grievance => grievance.id !== id));
        });
    }

    if (type == "hod") {
        return (
            <div>

                <div class="container" >
                    <h2 className="text-center">Student Grievance List</h2>
                    <br />
                    <Table striped bordered hover size="sm" responsive>
                        <thead class="text-center">
                            <tr>
                                <th>Student USN</th>
                                <th>Category</th>
                                <th>Related To</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.studentUsn !== 0 &&
                                student.map(
                                    (student) =>
                                        <tr key={student.studentUsn}>
                                            <td>{student.studentUsn}</td>
                                            <td>{student.category}</td>
                                            <td>{student.relatedTo}</td>
                                            <td>{student.descrption}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>

                <div class="container" >
                    <h2 className="text-center">Faculty Grievance List</h2>
                    <br />
                    <Table striped bordered hover size="sm" responsive>
                        <thead class="text-center">
                            <tr>
                                <th>Faculty ID</th>
                                <th>Category</th>
                                <th>Related To</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.length !== 0 &&
                                faculty.map(
                                    (faculty) =>
                                        <tr key={faculty.facultyId}>
                                            <td>{faculty.facultyId}</td>
                                            <td>{faculty.category}</td>
                                            <td>{faculty.relatedTo}</td>
                                            <td>{faculty.descrption}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div class="container" >
                    <h2 className="text-center">Grievance List</h2>
                    <div>
                        <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={createGrievance} >Add Grievance</button>
                    </div>
                    <Table striped bordered hover size="sm" responsive>
                        <thead class="text-center">
                            <tr>
                                <th>Category</th>
                                <th>Related To</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievance.length !== 0 &&
                                grievance.map(
                                    grievance =>
                                        <tr key={grievance.studentUsn}>
                                            <td>{grievance.category}</td>
                                            <td>{grievance.relatedTo}</td>
                                            <td>{grievance.descrption}</td>
                                            <td>
                                                <button className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={() => deleteOperation(grievance.id)}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ListGrievanace
