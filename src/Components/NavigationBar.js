import React from 'react';
import './NavigationBar.css.css.css';
import {Nav, Navbar, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImage from "../Pictures/logo.png"

function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/"> <Image src={logoImage} width="15%"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link id="link" to="/">Programs</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
