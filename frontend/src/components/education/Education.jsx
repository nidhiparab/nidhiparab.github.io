import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './education.css';
// import '@coreui/coreui/dist/css/coreui.min.css';
import {
	CCard,
	CCardImage,
	CCardBody,
	CCardTitle,
	CCardText,
	CListGroup,
	CListGroupItem,
	CCardLink
} from '@coreui/react';

function Education() {
	return (
		<Container className="edu-cont justify-content-md-center" id="edu">
			<Row> <h3>interests</h3></Row>
			<Row> System Design</Row>
			<Row> Full Stack</Row>
			<Row> Neural Networks</Row>
			
		</Container>
	);
}

export default Education;
