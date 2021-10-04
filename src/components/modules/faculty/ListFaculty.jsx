import React,{ useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { deleteFaculty, getFaculty } from '../../../services/FacultyService'

function ListFaculty(props) {

    const [facultys, setFaculty] = useState([])

    useEffect(() => {
        getFaculty().then((res) => {
            setFaculty(res.data);
            console.log(res)
        });
    }, [])

    const ViewFaculty = (id) => {
        props.history.push(`/view-faculty/${id}`);
    }

    const addFaculty = () => {
        props.history.push('/add-faculty/_add');
    }

    const editFaculty = (id) => {
        console.log(id)
        props.history.push(`/add-faculty/${id}`);
    }

    const deleteFacultyOperation = (id) => {
        deleteFaculty(id).then(res => {
            setFaculty(facultys.filter(faculty => faculty.fid !== id));
        });
    }
    
    return (
        <div class="container" >
            <h2 className="text-center">Faculty List</h2>
            <div>
                <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={addFaculty} >Add Faculty</button>
            </div>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email-id</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {facultys.length !== 0 &&
                            facultys.map(
                                faculty =>
                                    <tr key={faculty.fid}>
                                        <td>{faculty.name}</td>
                                        <td>{faculty.emailId}</td>
                                        <td>{faculty.phoneNo}</td>
                                        <td>{faculty.address}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>editFaculty(faculty.fid)}>Update</button>
                                            <button className="btn btn-danger"  style={{ marginLeft: "10px" }} onClick={()=>deleteFacultyOperation(faculty.fid)} >Delete</button>
                                            <button className="btn btn-info" style={{ marginLeft: "10px" }} onClick={()=>ViewFaculty(faculty.fid)} >View</button>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
            </Table>
        </div>
    )
}

export default ListFaculty
