import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Row,
    Col,
} from "reactstrap";
import { getFacultyById, updateFaculty } from '../../services/FacultyService';
import { getStudentById, updateStudent } from '../../services/StudentService';

function Myprofile(props) {

    const type = localStorage.getItem("type")
    const usn = localStorage.getItem("usn")
    const fId = localStorage.getItem("fid")

    const [state, setState] = useState({
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
        password: "",
        fid: ""
    });

    useEffect(() => {
        if (type == "student") {
            getStudentById(usn).then(res => {
                let student = res.data;
                setState({
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

            })
        }
        else {
            getFacultyById(fId).then((res) => {
                let faculty = res.data;
                setState({
                    fid: faculty.fid,
                    name: faculty.name,
                    emailId: faculty.emailId,
                    password: faculty.password,
                    phoneNo: faculty.phoneNo,
                    address: faculty.address,
                    fatherName: faculty.fatherName,
                    motherName: faculty.motherName

                });
            });
        }
    }, [])

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

    const changeIdHandler = (event) => {
        setState({ ...state, fid: event.target.value });
    }

    const updateStudentData = (e) => {
        e.preventDefault();
        updateStudent(state, state.usn).then(res => {
            props.history.push('/my-profile')
        }, alert("Succefully Updated"));

    }

    const updateFacultyData = (e) =>{
        e.preventDefault();
        updateFaculty(state, state.fid).then(res => {
            props.history.push('/my-profile')
        }, alert("Succefully Updated"));
    }

    if (type == "student") {
        return (
            <div className="container">
                <div style={{ margin: "20px",padding:"15px" }}>
                    <div className="content col-md-10 offset-md-3 " >
                        <Row>
                            <Col md="8">
                                <Card className="card-user">
                                    <CardHeader>
                                        <CardTitle tag="h5">Edit Profile</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row>
                                                <Col className="pr-1" md="5">
                                                    <FormGroup>
                                                        <label>Name</label>
                                                        <Input
                                                            value={state.name}
                                                            placeholder="Your Name"
                                                            type="text"
                                                            onChange={changeNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="px-1" md="3">
                                                    <FormGroup>
                                                        <label>USN</label>
                                                        <Input
                                                            value={state.usn}
                                                            placeholder="USN"
                                                            type="text"
                                                            onChange={changeUsnHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="4">
                                                    <FormGroup>
                                                        <label >Semester</label>
                                                        <Input
                                                            placeholder="Semester"
                                                            value={state.semester}
                                                            type="text"
                                                            onChange={changeSemesterHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Email address </label>
                                                        <Input
                                                            value={state.emailId}
                                                            placeholder="Email"
                                                            type="email"
                                                            onChange={changeEmailIdHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Phone Number</label>
                                                        <Input
                                                            value={state.phoneNo}
                                                            placeholder="Phone Number"
                                                            type="text"
                                                            onChange={changePhoneNoHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Father Name </label>
                                                        <Input
                                                            value={state.fatherName}
                                                            placeholder="Father Name"
                                                            type="text"
                                                            onChange={changeFatherNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Father Phone Number</label>
                                                        <Input
                                                            value={state.fatherNumber}
                                                            placeholder="Phone Number"
                                                            type="text"
                                                            onChange={changeFatherNumberHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Mother Name </label>
                                                        <Input
                                                            value={state.motherName}
                                                            placeholder="Mother Name"
                                                            type="text"
                                                            onChange={changeMotherNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Mother Phone Number</label>
                                                        <Input
                                                            value={state.motherNumber}
                                                            placeholder="Phone Number"
                                                            type="text"
                                                            onChange={changeMotherNumberHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Address</label>
                                                        <Input
                                                            value={state.address}
                                                            placeholder="Home Address"
                                                            type="text"
                                                            onChange={changeAddressHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Password</label>
                                                        <Input
                                                            value={state.password}
                                                            placeholder="Password"
                                                            type="text"
                                                            onChange={changePasswordHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <br />
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        className="btn-round"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={updateStudentData}
                                                    >
                                                        Update Profile
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }

    else {
        return (
            <div className="container">
                <div style={{ margin: "20px" }}>
                    <div className="content col-md-10 offset-md-3 " >
                        <Row>
                            <Col md="8">
                                <Card className="card-user">
                                    <CardHeader>
                                        <CardTitle tag="h5">Edit Profile</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Name</label>
                                                        <Input
                                                            value={state.name}
                                                            placeholder="Your Name"
                                                            type="text"
                                                            onChange={changeNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Id</label>
                                                        <Input
                                                            value={state.fid}
                                                            placeholder="ID"
                                                            type="text"
                                                            onChange={changeIdHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Email address </label>
                                                        <Input
                                                            value={state.emailId}
                                                            placeholder="Email"
                                                            type="email"
                                                            onChange={changeEmailIdHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <FormGroup>
                                                        <label>Phone Number</label>
                                                        <Input
                                                            value={state.phoneNo}
                                                            placeholder="Phone Number"
                                                            type="text"
                                                            onChange={changePhoneNoHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Father Name </label>
                                                        <Input
                                                            value={state.fatherName}
                                                            placeholder="Father Name"
                                                            type="text"
                                                            onChange={changeFatherNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pr-1" md="6">
                                                    <FormGroup>
                                                        <label>Mother Name </label>
                                                        <Input
                                                            value={state.motherName}
                                                            placeholder="Mother Name"
                                                            type="text"
                                                            onChange={changeMotherNameHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Address</label>
                                                        <Input
                                                            value={state.address}
                                                            placeholder="Home Address"
                                                            type="text"
                                                            onChange={changeAddressHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label>Password</label>
                                                        <Input
                                                            value={state.password}
                                                            placeholder="Password"
                                                            type="text"
                                                            onChange={changePasswordHandler}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>

                                            <br />
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        className="btn-round"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={updateFacultyData}
                                                    >
                                                        Update Profile
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        )
    }
}
export default Myprofile
