import React from 'react';
import './footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';

function Footer() {
	return (
		<Container className="foot">
      <Row className="line"></Row>
      <Row>
      <div className="d-flex justify-content-start">
				
        CODE AND DESIGN BY NIDHI PARAB
      
    </div>
      </Row>
			
		</Container>
	);
}

export default Footer;
