import userEvent from '@testing-library/user-event';
import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { getStudentById } from '../../services/StudentService';
import FooterComponent from '../layout/Landing/FooterComponent'




function StudentLogin(props) {

    const history = useHistory()
    const { setLoggedIn } = props;

    const [state, setState] = useState({
        userUsn: "",
        userpassword: "",
    });


    const changeUserUsnHandler = (event) => {
        setState({ ...state, userUsn: event.target.value });
    }

    const changeUserPasswordHandler = (event) => {
        setState({ ...state, userpassword: event.target.value });
    }



    const submit = (e) => {
        e.preventDefault();
        

        getStudentById(state.userUsn).then((res) => {
            let student = res.data;
            if (state.userUsn == student.usn && state.userpassword == student.password) {
                setLoggedIn(true);
                localStorage.setItem("type", "student")
                localStorage.setItem("usn", student.usn)
                localStorage.setItem("name",student.name)
                history.push('/dashboard')
            }
            else {
                alert("Enter a valid password");
            }

        }).catch(error => {
            alert("Enter a valid USN or Resister your USN")
        })
    }

    return (
        <div>
            <div class="bg-primary " style={{ padding: "64pt" }}>
                <div class="container gap col-lg-5 " >
                    <h2 className="text-center text-white">Student Login</h2>
                    <div class="container card " style={{ padding: "9pt" }}>
                        <Form >
                            <Form.Label>Student USN</Form.Label>
                            <Form.Control placeholder="Enter USN" value={state.userUsn} onChange={changeUserUsnHandler} />

                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Enter Password" type="password" value={state.userpassword} onChange={changeUserPasswordHandler} />
                            <br></br>
                            <Button variant="dark" size="sm" type="submit" onClick={submit}>Submit</Button>
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

export default StudentLogin
