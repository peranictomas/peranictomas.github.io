import React from 'react'
import {Col, Container, Image, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import backgroundImage from "./Pictures/me.jpg";
import { faEnvelopeSquare  } from '@fortawesome/free-solid-svg-icons'
import './Home.css';


function Home(){
    return(
        <Container className="containerEverything">
            <Row className="show-grid text-center" id="row1">
                <Col>
                    <h3>Test1</h3>
                </Col>
                <Col>
                    <h3>Test2</h3>
                </Col>
                <Col>
                    <h3>Test3</h3>
                </Col>
            </Row>
            <Row  id="row1">
                <h3 className="d-inline-block text-center">Test4</h3>
            </Row>
            <Row className="show-grid text-center" id="row1">
                <Col>
                    <Col>
                        <Image src={backgroundImage} circle className="profile-pic"/>
                        <h4>Tomas Peranic</h4>
                        <p>"Let's get in touch!"</p>
                    </Col>
                </Col>
                <Col>
                    <h3>About Me</h3>
                    <p>At a young age I've always had a passion for technology, this grew more as I got older and started to pursue a post secondary career in computer science.</p>
                </Col>
                <Col>
                    <h5>
                        <a>Contact me through the provided links below:</a>
                    </h5>
                    <h1>
                        <a href="mailto:peranic.tomas@hotmail.com">
                            <FontAwesomeIcon icon={faEnvelopeSquare} style="000000"/>
                        </a>
                        <a id="gitIcon" href="https://github.com/peranictomas">
                            <FontAwesomeIcon icon={faGithubSquare} style="000000" />
                        </a>
                        <a href="https://www.linkedin.com/in/tomas-peranic-129763186" >
                            <FontAwesomeIcon icon={faLinkedin} style="000000" />
                        </a>
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;