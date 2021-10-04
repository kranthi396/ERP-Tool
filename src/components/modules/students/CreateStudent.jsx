import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { createStudent, getStudentById, updateStudent } from '../../../services/StudentService';

function CreateStudent(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        name: "",
        usn: "",
        semester: "",
        phoneNo: "",
        address: "",
        fatherName: "",
        fatherNumber: "",
        motherName: "",
        motherNumber: "",
        emailId: "",
        password: ""

    });

    useEffect(() => {

        if (state.id === '_add') {
            return
        }
        else {
            getStudentById(state.id).then((res) => {
                let student = res.data;
                setState({
                    id: state.id,
                    name: student.name,
                    usn: student.usn,
                    semester: student.semester,
                    phoneNo: student.phoneNo,
                    address: student.address,
                    fatherName: student.fatherName,
                    fatherNumber: student.fatherNumber,
                    motherName: student.motherName,
                    motherNumber: student.motherNumber,
                    emailId: student.emailId,
                    password: student.password
                });
            });
        }
    }, [])

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        if (state.id === '_add') {
            createStudent(state).then(res => {
                props.history.push('/student')
            });
        }
        else {
            updateStudent(state, state.id).then(res => {
                props.history.push('/student')
            });
        }
    }

    const changeNameHandler = (event) => {
        setState({ ...state, name: event.target.value });
    }

    const changeUsnHandler = (event) => {
        setState({ ...state, usn: event.target.value });
    }

    const changeSemesterHandler = (event) => {
        setState({ ...state, semester: event.target.value });
    }

    const changePhoneNoHandler = (event) => {
        setState({ ...state, phoneNo: event.target.value });
    }

    const changeAddressHandler = (event) => {
        setState({ ...state, address: event.target.value });
    }

    const changeFatherNameHandler = (event) => {
        setState({ ...state, fatherName: event.target.value });
    }

    const changeFatherNumberHandler = (event) => {
        setState({ ...state, fatherNumber: event.target.value });
    }

    const changeMotherNameHandler = (event) => {
        setState({ ...state, motherName: event.target.value });
    }

    const changeMotherNumberHandler = (event) => {
        setState({ ...state, motherNumber: event.target.value });
    }

    const changeEmailIdHandler = (event) => {
        setState({ ...state, emailId: event.target.value });
    }

    const changePasswordHandler = (event) => {
        setState({ ...state, password: event.target.value });
    }

    const cancel = () => {
        props.history.push('/student')
    }


    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "50px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">{state.id === '_add' ? "Add Student" : "Update Student"}</h3>
                        <div className="card-body">
                            <Form >

                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter  Your Name" value={state.name}
                                        onChange={changeNameHandler}/>
                                    
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>USN</Form.Label>
                                        <Form.Control placeholder="Enter Your Usn" value={state.usn}
                                            onChange={changeUsnHandler} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Semester</Form.Label>
                                        <Form.Control placeholder="Enter Your Semester" value={state.semester}
                                            onChange={changeSemesterHandler} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control placeholder="Enter Your Phone Number" value={state.phoneNo}
                                        onChange={changePhoneNoHandler} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Enter Your Address" value={state.address}
                                        onChange={changeAddressHandler} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>Father Name</Form.Label>
                                        <Form.Control placeholder="Enter Your Father Name" value={state.fatherName}
                                            onChange={changeFatherNameHandler} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Father Number</Form.Label>
                                        <Form.Control placeholder="Enter Your Father Number" value={state.fatherNumber}
                                            onChange={changeFatherNumberHandler} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>Mother Name</Form.Label>
                                        <Form.Control placeholder="Enter Your Mother Name" value={state.motherName}
                                            onChange={changeMotherNameHandler} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Mother Number</Form.Label>
                                        <Form.Control placeholder="Enter Your Mother Number" value={state.motherNumber}
                                            onChange={changeMotherNumberHandler} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>Email Id</Form.Label>
                                        <Form.Control placeholder="Enter Your EmailId" value={state.emailId}
                                            onChange={changeEmailIdHandler} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Enter Your Password" value={state.password}
                                            onChange={changePasswordHandler} />
                                    </Form.Group>
                                </Form.Row>

                                <button style={{ margin: "7px" }} className="btn btn-success" onClick={saveOrUpdateStudent}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStudent
