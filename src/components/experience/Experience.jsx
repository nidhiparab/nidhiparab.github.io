import React from 'react';
import './experience.css';
import { Row, Col, Container } from 'react-bootstrap';

function Experience() {
	return (
		<Container className="exp" id="experience">
			<div class="headi">
				<h3>Experience</h3>
			</div>
			<Row className="row-exp"> 
				<Row className="row-detail1 myExp">
					<Col xs={9}>
						<h4 className="myExp">React And React Native Developer</h4>
            <p className="hide">Dot Minds LPP</p>
					</Col>
					<Col>Mar 2022 - May 2022
          </Col>
				</Row>
				<Row className="row-detail2">
					<Col xs={9}>
          <h4 className="myExp">Simulation Developer</h4>
            <p className="hide">Shah And Anchor Kutchhi Engineering College</p>
					</Col>
					<Col >Nov 2022 - Mar 2022</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Experience;
