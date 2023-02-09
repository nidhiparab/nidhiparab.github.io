import React from 'react';
import './header.css';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cf from "../assets/cf.gif"


const Header = () => {
	return (
		<Container className="header " id="header">
			<Row className="content">
            <Col>
            <h1>Software <br/> Developer.</h1>
            <p>Front End Addict.</p>
            </Col>
            <Col className="name align-self-end">
            <h1>Nidhi <br/> Parab.</h1>
            <p>The Art & The Artist.</p>
            </Col>
            
                {/* <a href="#about"><h1 className="">About Me</h1> </a>
                <a href="#edu"><h1 className="">Education</h1> </a>
                        <a href="#skill"><h1 className="skill">Skills</h1> </a>
                        <a href="#experience"><h1 >Experience</h1> </a>
                        <a href="#projects"><h1 className="proj">Projects</h1> </a>
                        <a href="#certi"><h1 className="certi">Certifications</h1> </a>
                        <a href="#positions"><h1 className="positions">Positions</h1> </a> */}

            
                {/* <ul type="none">
                    <li className="">
                        <a href="#about"><h1 className="about">About Me</h1> </a>
                    </li>
                    <li className="">
                        <a href="#edu"><h1 className="edu">Education</h1> </a>
                    </li>
                    <li className="d-none d-sm-block list">
                        <a href="#skill"><h1 className="skill">Skills</h1> </a>
                    </li>
                    <li className="d-none d-sm-block list">
                        <a href="#experience"><h1 >Experience</h1> </a>
                    </li>
                    <li className="">
                        <a href="#projects"><h1 className="proj">Projects</h1> </a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#certi"><h1 className="certi">Certifications</h1> </a>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="#positions"><h1 className="positions">Positions</h1> </a>
                    </li>
                    <li className="">
                        <a href="mailto:nidhiparabmail@gmail.com"><h1 className="contact">Get in Touch</h1> </a>
                    </li>
                </ul> */}
			</Row>
		</Container>
	);
};
export default Header;
