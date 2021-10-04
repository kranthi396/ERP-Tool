import React, { useState, useEffect } from 'react';
import EmployeesService from '../../../services/EmployeesService'

function ListEmployeeComponent(props) {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeesService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const viewEmployee = (id) => {
        props.history.push(`/view-employee/${id}`);
    }

    const deleteEmployee = (id) => {
        EmployeesService.deleteEmployee(id).then(res => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    const editEmployee = (id) => {
        props.history.push(`/add-employee/${id}`);
    }

    const addEmployee = () => {
        props.history.push('/add-employee/_add');
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div>
                <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.length !== 0 &&
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => editEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: "10px" }} >Delete</button>
                                            <button className="btn btn-info" onClick={() => viewEmployee(employee.id)} style={{ marginLeft: "10px" }} >View</button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default ListEmployeeComponent


