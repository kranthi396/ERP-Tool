
import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import "./../../../App.css";

function Header(props) {

    

    return (
        <div>

            <Navbar bg="secondary" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">SLN-ClouD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                           
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#benfits">Benefits</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="/faculty-login">Faculty Login</Nav.Link>
                            <Nav.Link href="/student-login">Student Login</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}


export default Header
