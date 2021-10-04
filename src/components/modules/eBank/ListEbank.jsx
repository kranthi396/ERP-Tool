import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { deleteBank, getAlleBank } from '../../../services/EBankService';

function ListEbank(props) {

    const type = localStorage.getItem("type")
    const [state, setstate] = useState([]);

    useEffect(() => {
        getAlleBank().then((res) => {
            setstate(res.data);
        });
    }, [])

    const deleteOperation = (id) => {
        deleteBank(id).then(res => {
            setstate(state.filter(state => state.id !== id));
        });
    }

    const addNotes = () => {
        props.history.push('/add-bank');
    }

    if (type == "student") {
        return (
            <div>
                <div class="container" >
                    <h2 className="text-center">E-Question Bank</h2>
                    <Table striped bordered hover size="sm" responsive>
                        <thead class="text-center">
                            <tr>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.length !== 0 &&
                                state.map(
                                    state =>
                                        <tr key={state.subjectCode}>
                                            <td>{state.subjectCode}</td>
                                            <td>{state.subjectName}</td>
                                            <td><a target="blank" href={state.link}>{state.link}</a></td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <div class="container" >
                    <h2 className="text-center">E-Question Bank</h2>
                    <div>
                        <button style={{ margin: "10px" }} type="button" className="btn btn-primary" onClick={addNotes}  >Add Q-Bank</button>
                    </div>
                    <Table striped bordered hover size="sm" responsive>
                        <thead class="text-center">
                            <tr>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.length !== 0 &&
                                state.map(
                                    state =>
                                        <tr key={state.subjectCode}>
                                            <td>{state.subjectCode}</td>
                                            <td>{state.subjectName}</td>
                                            <td><a target="blank" href={state.link}>{state.link}</a></td>
                                            <td>
                                                <button className="btn btn-danger " style={{ marginLeft: "5px" }} onClick={() => deleteOperation(state.id)}>Delete</button>
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
}

export default ListEbank
