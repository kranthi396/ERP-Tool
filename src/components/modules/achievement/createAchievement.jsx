import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { addAchivement } from '../../../services/AchievementService';

function CreateAchievement(props) {


    const usn = localStorage.getItem("usn")
    const fId = localStorage.getItem("fid")

    const [state, setState] = useState({
        category: "",
        certificateName: "",
        descrption: "",
        link:"",
        studentUsn: usn,
        facultyId: fId
    });

    const changeCategoryHandler = (event) => {
        setState({ ...state, category: event.target.value });
    }

    const changeCertificateNameHandler = (event) => {
        setState({ ...state, certificateName: event.target.value });
    }

    const changeLinkHandler = (event) => {
        setState({ ...state, link: event.target.value });
    }
    const changeDescrptionNameHandler = (event) => {
        setState({ ...state, descrption: event.target.value });
    }

    const cancel = () => {
        props.history.push('/achievement')
    }

    const save = (e) => {
        e.preventDefault();

        addAchivement(state).then(res => {
            props.history.push('/achievement')
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: "10px" }} >
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Achievement</h3>
                        <div className="card-body">
                            <Form >

                                <Form.Group >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control placeholder="Enter Category" value={state.category}
                                        onChange={changeCategoryHandler} />

                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Certificate Name</Form.Label>
                                    <Form.Control placeholder="Enter Certificate Name" value={state.certificateName}
                                        onChange={changeCertificateNameHandler} />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Certificate Link</Form.Label>
                                    <Form.Control placeholder="Link" value={state.link}
                                        onChange={changeLinkHandler} />
                                    <Form.Text className="text-muted">
                                        The certificate should be uploded in google drive and link shoud be public.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={2} placeholder="Description" value={state.descrption}
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

export default CreateAchievement
