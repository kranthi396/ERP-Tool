import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { deleteStudent, getStudents } from '../../../services/StudentService';


function ListStudents(props) {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents().then((res) => {
            setStudents(res.data);
        });
    }, []);

    const viewStudent = (id) => {
        props.history.push(`/view-student/${id}`);
    }

    const addStudent = () => {
        props.history.push('/add-student/_add');
    }

    const editStudent = (usn) => {
        props.history.push(`/add-student/${usn}`);
    }

    const deleteStudentOperation = (usn) => {
        deleteStudent(usn).then(res => {
            setStudents(students.filter(student => student.usn !== usn));
        });
    }

    return (
        
        <div>
            
            <div class="container ">
                <h2 className="text-center">Student List</h2>
                <div>
                    <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={addStudent} >Add Student</button>
                </div>
                <Table striped bordered hover size="sm" responsive>
                    <thead class="text-center">  
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Semester</th>
                            <th>Email-id</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length !== 0 &&
                            students.map(
                                student =>
                                    <tr key={student.usn}>
                                        <td>{student.name}</td>
                                        <td>{student.usn}</td>
                                        <td>{student.semester}</td>
                                        <td>{student.emailId}</td>
                                        <td>{student.phoneNo}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => editStudent(student.usn)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => deleteStudentOperation(student.usn)} style={{ marginLeft: "5px" }} >Delete</button>
                                            <button className="btn btn-info" onClick={() => viewStudent(student.usn)} style={{ marginLeft: "5px" }} >View</button>
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

export default ListStudents
