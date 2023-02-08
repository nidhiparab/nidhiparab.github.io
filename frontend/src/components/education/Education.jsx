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
			<Row className="top"><h3>Education</h3></Row>
			<Row className="mycard ">
				<Col><CCard style={{ width: '18rem', margin:'2%'}}>
				{/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
				<CCardBody>
					<CCardTitle>Secondary</CCardTitle>
					<CCardText>
						<p>St.Xavier's High School & Jr. College</p>
					</CCardText>
				</CCardBody>
				<CListGroup flush >
					<CListGroupItem className="detail">SSC</CListGroupItem>
					<CListGroupItem className="detail">Percentage: 93.2</CListGroupItem>
					{/* <CListGroupItem>Vestibulum at eros</CListGroupItem> */}
				</CListGroup>
				{/* <CCardBody>
					<CCardLink href="#">Card link</CCardLink>
					<CCardLink href="#">Another link</CCardLink>
				</CCardBody> */}
			</CCard>
				</Col>
			<Col><CCard style={{ width: '18rem',margin:'2%'}}>
				{/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
				<CCardBody>
					<CCardTitle>Higher Secondary</CCardTitle>
					<CCardText>
					<p>V.G. Vaze College</p>
					</CCardText>
				</CCardBody>
				<CListGroup flush>
					<CListGroupItem className="detail">HSC Science</CListGroupItem>
					<CListGroupItem className="detail">Percentage: 85</CListGroupItem>
					{/* <CListGroupItem>Vestibulum at eros</CListGroupItem> */}
				</CListGroup>
				{/* <CCardBody>
					<CCardLink href="#">Card link</CCardLink>
					<CCardLink href="#">Another link</CCardLink>
				</CCardBody> */}
			</CCard>
			</Col>

			<Col><CCard style={{ width: '18rem',margin:'2%' }}>
				{/* <CCardImage orientation="top" src="/images/react.jpg" /> */}
				<CCardBody>
					<CCardTitle>B.E.</CCardTitle>
					<CCardText>
						<p>Shah & Anchor Kutchhi Engineering College</p>
					</CCardText>
				</CCardBody>
				<CListGroup flush>
					<CListGroupItem className="detail">Computer Engineering</CListGroupItem>
					<CListGroupItem className="detail">CGPA: 9.8</CListGroupItem>
					{/* <CListGroupItem>Vestibulum at eros</CListGroupItem> */}
				</CListGroup>
				{/* <CCardBody>
					<CCardLink href="#">Card link</CCardLink>
					<CCardLink href="#">Another link</CCardLink>
				</CCardBody> */}
			</CCard></Col>
			</Row>
			
		</Container>
	);
}

export default Education;
