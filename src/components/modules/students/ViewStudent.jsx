import React, { useState, useEffect } from 'react';
import { getStudentById } from '../../../services/StudentService';

function ViewStudent(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        student: {}
    });

    useEffect(() => {
        getStudentById(state.id).then(res => {
            setState({ student: res.data });
        })
    }, [])

    const back = () => {
        props.history.push('/student');
    }

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center" >View Student</h3>
                <div className="card-body">

                    <div className="row">
                        <label>Student  Name : {state.student.name}</label>
                    </div>

                    <div className="row">
                        <label>USN : {state.student.usn}</label>
                    </div>
					
					<div className="row">
                        <label>Semester : {state.student.semester}</label>
                    </div>
					
					<div className="row">
                        <label>phoneNo : {state.student.phoneNo}</label>
                    </div>
					
					<div className="row">
                        <label>Address : {state.student.address}</label>
                    </div>
					
					<div className="row">
                        <label>fatherName : {state.student.fatherName}</label>
                    </div>
					
					<div className="row">
                        <label>fatherNumber : {state.student.fatherNumber}</label>
                    </div>
					
					<div className="row">
                        <label>motherName : {state.student.motherName}</label>
                    </div>
					
					<div className="row">
                        <label>motherNumber : {state.student.motherNumber}</label>
                    </div>
					
					<div className="row">
                        <label>emailId : {state.student.emailId}</label>
                    </div>
                    
                    <br></br>
                    <div>
                        <button className="btn btn-danger" onClick={back} style={{ marginLeft: "10px" }}>Back</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewStudent
