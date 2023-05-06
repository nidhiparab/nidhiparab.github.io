import React from 'react';
import './header.css';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cf from "../assets/cf.gif"


const Header = () => {
	return (
		<Container className="header " id="header">
			<Row className="content">
            <Col >
            <h1>Nidhi <br/> Parab.</h1>
            <p>The Art & The Artist.</p>
            </Col>
            <Col className="name align-self-end">
            <h1>Software <br/> Developer.</h1>
            <p>Front End Addict.</p>
            </Col>
            
			</Row>
		</Container>
	);
};
export default Header;
