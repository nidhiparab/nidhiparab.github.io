import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './banner.css';


function Banner() {
	return (
		<Container id="about">
			<Row>
				<Col className="banner">
					<h3>
						Hello World! I am <span className="myDIV">Nidhi Parab.</span>
						<img src={require('../assets/me.jpeg')} alt="" class="hide" />
					</h3>
					<p>
						A Third-year Computer Engineering student based in India. I’m a young, creative maker with a
						passion for simplicity. I've always aspired to have unique experiences and pragmatic programmes.
						Over the last few years, I've had the opportunity to create a lot of them through a variety of
						educational, professional, and personal projects. My approach to problem-solving is meticulous.
						I build all of my projects from the ground up, allowing me to create completely customised
						solutions. As I both design and develop, I have complete control over all aspects of a project,
						leaving nothing to be lost in translation.
					</p>
					<p>
						When I'm not working, I like spending time with my family and indulging my passion for books. My
						gateway to web development was my love of Art—looking at it, studying it, making it. The science
						surrounding human perception, communication, and creativity fascinates me to this day. Every new
						product is an exciting opportunity to mold complex analysis and data into a clear, compelling,
						and accessible form.
					</p>
					<button id="contact">
					
						<a href="mailto:nidhiparabmail@gmail.com" className="text-decoration-none"> Let's Cross Paths</a>{' '}
					</button>
					
					
				</Col>
			</Row>
		</Container>
	);
}

export default Banner;
