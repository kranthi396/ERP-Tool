import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { addNotes } from '../../../services/ENotesService';

function CreateNotes(props) {

    const [state, setState] = useState({
        subjectCode:"",
        subjectName:"",
        link:""
    });

    const changeSubjectCodeHandler = (event) => {
        setState({ ...state, subjectCode: event.target.value });
    }
    
    const changeSubjectNameHandler = (event) => {
        setState({ ...state, subjectName: event.target.value });
    }

    const changeLinkHandler = (event) => {
        setState({ ...state, link: event.target.value });
    }

    const cancel = () => {
        props.history.push('/e-notes');
    }

    const save = (e) => {
        e.preventDefault();
        addNotes(state).then(res=>{
            props.history.push('/e-notes');
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "50px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Notes</h3>
                        <div className="card-body">
                            <Form >

                                <Form.Group >
                                    <Form.Label>Subject Code</Form.Label>
                                    <Form.Control placeholder="Enter Subject Code" value={state.subjectCode}
                                        onChange={changeSubjectCodeHandler}/>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Subject Name</Form.Label>
                                    <Form.Control  placeholder="Enter Subject Name" value={state.subjectName}
                                        onChange={changeSubjectNameHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Link</Form.Label>
                                    <Form.Control placeholder="Enter Link" value={state.link}
                                        onChange={changeLinkHandler} />
                                    
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

export default CreateNotes
