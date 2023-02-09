import React, { useEffect } from 'react';
import './skill.css';
import { Row, Col, Container } from 'react-bootstrap';
import * as THREE from 'three';

const Skill = () => {

	return (
    <div className="mySkill" id="skill">
      <canvas className="" />
        <Container className="">
        <Row className="">
			<Row>
				<h3 className="title">Used by My Hands And Mind</h3>
			</Row>
			<Row className="skill-content">
				<Col className="comp col-lg-4 h-25">
					<img src={require('../assets/comp2.jpeg')} alt="" className="" />
				</Col>
				<Col className="lang-row">
					<Row className="">
								<Col className="lang-col">
									<h6>Languages</h6>
									<ul >
										<li>HTML</li>
										<li>CSS</li>
										<li>Javascript</li>
										<li>C</li>
										<li>Python</li>
										<li>Java</li>
										<li>PHP</li>
									</ul>
								</Col>
								<Col className="lang-col">
									<h6>Frameworks/ Others</h6>
									<ul>
										<li>React.js</li>
										<li>Next.js</li>
										<li>Node.js</li>
										<li>Boostrap CSS</li>
										<li>Tailwind CSS</li>
									</ul>
								</Col>
							</Row>
					<Row >
							<p className="desc">In a world that changes fast, I adapt with grace,
						For they know that success, comes with a steady pace.
						A love for the craft, that never fades away,
						And the thirst for knowledge, that grows day by day.
						</p>
						<p className="credit">- ChatGPT</p>
						
							</Row>
						</Col>
				</Row>
				
			</Row>
          
        </Container>
      </div>
	);
};
export default Skill;
