import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { addGrievance } from '../../../services/GrievanceService';

function CreateGrievance(props) {

    const usn = localStorage.getItem("usn")
    const fId = localStorage.getItem("fid")

    const [state, setState] = useState({
        category: "",
        relatedTo: "",
        descrption: "",
        studentUsn: usn,
        facultyId: fId
    });

    const changeCategoryHandler = (event) => {
        setState({ ...state, category: event.target.value });
    }

    const changeRelatedToHandler = (event) => {
        setState({ ...state, relatedTo: event.target.value });
    }

    const changeDescrptionNameHandler = (event) => {
        setState({ ...state, descrption: event.target.value });
    }

    const cancel = () => {
        props.history.push('/grievance')
    }

    const save = (e) => {
        e.preventDefault();

        addGrievance(state).then(res => {
            props.history.push('/grievance')
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "50px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Grievance</h3>
                        <div className="card-body">
                            <Form >

                                <Form.Group >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control placeholder="Enter Category" value={state.category}
                                        onChange={changeCategoryHandler} />

                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Related To</Form.Label>
                                    <Form.Control placeholder="Enter Certificate Name" value={state.relatedTo}
                                        onChange={changeRelatedToHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Description" value={state.descrption}
                                        onChange={changeDescrptionNameHandler} />
                                </Form.Group>

                                <button style={{ margin: "7px" }} className="btn btn-success" onClick={save} >Save</button>
                                <button className="btn btn-danger" onClick={cancel} >Cancel</button>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGrievance
