import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { createFaculty, getFacultyById, updateFaculty } from '../../../services/FacultyService';

function CreateFaculty(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        name: "",
        fid:"",
        emailId: "",
        password: "",
        phoneNo: "",
        address: "",
        fatherName: "",
        motherName: ""
    });

    useEffect(() => {

        if (state.id === '_add') {
            return
        }
        else {
            getFacultyById(state.id).then((res) => {
                let faculty = res.data;
                setState({
                    id:state.id,
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

    const saveOrUpdateFaculty = (e) => {
        e.preventDefault();

        if (state.id === '_add') {
            createFaculty(state).then(res => {
                props.history.push('/faculty')
            });
        }
        else {
            updateFaculty(state, state.fid).then(res => {
                props.history.push('/faculty')
            });
        }
    }

    const cancel = () => {
        props.history.push('/faculty')
    }

    const changeFacultyIdHandler = (event) => {
        setState({ ...state, fid: event.target.value });
    }

    const changeNameHandler = (event) => {
        setState({ ...state, name: event.target.value });
    }

    const changeEmailIdHandler = (event) => {
        setState({ ...state, emailId: event.target.value });
    }

    const changePasswordHandler = (event) => {
        setState({ ...state, password: event.target.value });
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

    const changeMotherNameHandler = (event) => {
        setState({ ...state, motherName: event.target.value });
    }


    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "50px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">{state.id === '_add' ? "Add Faculty" : "Update Faculty"}</h3>
                        <div className="card-body">
                            <Form >

                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Enter  Name" value={state.name}
                                        onChange={changeNameHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Faculty id</Form.Label>
                                    <Form.Control placeholder="Enter Id" value={state.fid}
                                        onChange={changeFacultyIdHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>emailId</Form.Label>
                                    <Form.Control placeholder="Enter  Your emailId" value={state.emailId}
                                        onChange={changeEmailIdHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control placeholder="Enter  Your Password" value={state.password}
                                        onChange={changePasswordHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>phoneNo</Form.Label>
                                    <Form.Control placeholder="Enter  Your phoneNo" value={state.phoneNo}
                                        onChange={changePhoneNoHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>fatherName</Form.Label>
                                    <Form.Control placeholder="Enter  Your fatherName" value={state.fatherName}
                                        onChange={changeFatherNameHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>motherName</Form.Label>
                                    <Form.Control placeholder="Enter  Your motherName" value={state.motherName}
                                        onChange={changeMotherNameHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Enter  Your Address" value={state.address}
                                        onChange={changeAddressHandler} />
                                </Form.Group>





                                <button style={{ margin: "7px" }} className="btn btn-success" onClick={saveOrUpdateFaculty}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFaculty
