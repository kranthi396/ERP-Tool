import React, { useState, useEffect } from 'react';
import { getFacultyById } from '../../../services/FacultyService';

function ViewFaculty(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        faculty: {}
    });

    useEffect(() => {
        getFacultyById(state.id).then(res => {
            setState({ faculty: res.data });
        })
    }, [])

    const back = () => {
        props.history.push('/faculty');
    }

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center" >View Faculty</h3>
                <div className="card-body">

                    <div className="row">
                        <label>Faculty  Name : {state.faculty.name}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Id : {state.faculty.fid}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Email Id : {state.faculty.emailId}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Phone Number : {state.faculty.phoneNo}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Father Name : {state.faculty.fatherName}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Mother Name : {state.faculty.motherName}</label>
                    </div>

                    <div className="row">
                        <label>Faculty  Address : {state.faculty.address}</label>
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

export default ViewFaculty
