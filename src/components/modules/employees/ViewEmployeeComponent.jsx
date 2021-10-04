import React, { useState, useEffect } from 'react';
import EmployeesService from '../../../services/EmployeesService';

function ViewEmployeeComponent(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        employee: {}
    });

    useEffect(() => {
        EmployeesService.getEmployeeById(state.id).then(res => {
            setState({ employee: res.data });
        })
    }, [])


    const back = () => {
        props.history.push('/employees');
    }

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center" >View Employee</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name : {state.employee.firstName}</label>
                    </div>
                    <div className="row">
                        <label>Employee Last Name : {state.employee.lastName} </label>
                    </div>
                    <div className="row">
                        <label>Employee Email-Id : {state.employee.emailId}</label>
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

export default ViewEmployeeComponent

