import React from 'react';
import './header.css';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => {
	return (
		<Container className="headerCont" id="header">
			<Row className="header">
                <ul type="none">
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
                </ul>
			</Row>
		</Container>
	);
};
export default Header;
