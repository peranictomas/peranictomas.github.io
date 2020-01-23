import React from 'react';
import {Jumbotron as Jumbo} from "react-bootstrap";
import './Jumbotron.css.css';

function Jumbotron() {
    return (
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
        </Jumbo>
    );
}

export default Jumbotron;
