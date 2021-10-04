import React, { useEffect, useState } from 'react';
import EmployeesService from '../../../services/EmployeesService'

function CreateEmployeeComponent(props) {

    const [state, setState] = useState({
        id: props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {

        if (state.id === '_add') {
            return
        }
        else {
            EmployeesService.getEmployeeById(state.id).then((res) => {
                let employee = res.data;
                setState({
                    id : state.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            });
        }
    }, [])

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: state.firstName,
            lastName: state.lastName,
            emailId: state.emailId
        };
        console.log('emplyee => ' + JSON.stringify(employee))

        if (state.id === '_add') {
            EmployeesService.createEmployee(employee).then(res => {
                props.history.push('/employees')
            });
        }
        else {
            EmployeesService.updateEmployee(employee, state.id).then(res => {
                props.history.push('/employees')
            });
        }
    }

    const changeFirstNameHandler = (event) => {
        setState({ ...state, firstName: event.target.value });
    }

    const changeLastNameHandler = (event) => {
        setState({ ...state, lastName: event.target.value });
    }

    const changeEmailHandler = (event) => {
        setState({ ...state, emailId: event.target.value });
    }

    const cancel = () => {
        props.history.push('/employees');
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "50px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">{state.id === '_add' ? "Add Employee" : "Update Employee"}</h3>
                        <div className="card-body">
                            <form >
                                <div style={{ margin: "7px" }} className="form-group">
                                    <label>First Name :</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={state.firstName} onChange={changeFirstNameHandler} />
                                </div>
                                <div style={{ margin: "7px" }} className="form-group">
                                    <label>Last Name :</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={state.lastName} onChange={changeLastNameHandler} />
                                </div>
                                <div style={{ margin: "7px" }} className="form-group">
                                    <label>Email Id :</label>
                                    <input placeholder="Email ID" name="emailId" className="form-control"
                                        value={state.emailId} onChange={changeEmailHandler} />
                                </div>

                                <button style={{ margin: "7px" }} className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent
