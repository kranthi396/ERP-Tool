import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { getFacultyById } from '../../services/FacultyService';
import FooterComponent from '../layout/Landing/FooterComponent'


function FacultyLogin(props) {

    const history = useHistory();
    const { setLoggedIn } = props;

    const [state, setState] = useState({
        userFacultyId: "",
        userpassword: "",
    });

    const changefacultyIdHandler = (event) => {
        setState({ ...state, userFacultyId: event.target.value });
    }

    const changeUserPasswordHandler = (event) => {
        setState({ ...state, userpassword: event.target.value });
    }

    const submit = (e) => {
        e.preventDefault();

        getFacultyById(state.userFacultyId).then((res) => {
            let faculty = res.data;
            if (state.userFacultyId == faculty.fid && state.userpassword == faculty.password) {
                
                if (faculty.hod === true) {
                    setLoggedIn(true);
                    localStorage.setItem("type", "hod")
                    localStorage.setItem("fid", faculty.fid)
                    localStorage.setItem("name",faculty.name)
                    history.push('/dashboard')
                }
                else if (faculty.principal === true) {

                }
                else {
                    setLoggedIn(true);
                    localStorage.setItem("type", "faculty")
                    localStorage.setItem("fid", faculty.fid)
                    localStorage.setItem("name",faculty.name)
                    history.push('/dashboard')
                }

            }
            else {
                alert("Enter a valid Password");
            }

        }).catch(error=>{
            alert("Enter a valid ID")
        })
    }

    return (
        <div>
            <div class="bg-primary " style={{ padding: "64pt" }}>
                <div class="container gap col-lg-5 " >
                    <h2 className="text-center text-white">Faculty Login</h2>
                    <div class="container card " style={{ padding: "9pt" }}>
                        <Form >
                            <Form.Label>Faculty-Id</Form.Label>
                            <Form.Control placeholder="Enter Your-Id" value={state.userFacultyId} onChange={changefacultyIdHandler} />

                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Enter Password" type="password" value={state.userpassword} onChange={changeUserPasswordHandler} />
                            <br></br>
                            <Button variant="dark" size="sm" type="submit" onClick={submit} >Submit</Button>
                            {' '}
                            <Button variant="dark" size="sm" type="submit" href="/">Back</Button>

                        </Form>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default FacultyLogin
