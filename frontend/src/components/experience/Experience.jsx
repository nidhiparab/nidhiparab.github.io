import React from 'react';
import './experience.css';
import { Row, Col, Container } from 'react-bootstrap';

function Experience() {
	function reveal() {
		var reveals = document.querySelectorAll(".reveal");
	  
		for (var i = 0; i < reveals.length; i++) {
		  var windowHeight = window.innerHeight;
		  var elementTop = reveals[i].getBoundingClientRect().top;
		  var elementVisible = 150;
	  
		  if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		  } else {
			reveals[i].classList.remove("active");
		  }
		}
	  }
	  
	  window.addEventListener("scroll", reveal);
	return (
		<Container className="exp" id="experience">
			<div class="headi">
				<h3>Experience</h3>
			</div>
			<Row className="row-exp"> 
			<Row className="reveal fade-left" ><hr/></Row>
			
				<Row className="row-detail myExp">
					<Col >
						<h4 className="myExp">Mentor</h4>
            			<p className="hide">Rewriting The Code</p>
					</Col>
					<Col className="exp-date" xs={5}>Oct 2022 - Present</Col>
				</Row>
				<Row className="reveal fade-left" ><hr/></Row>
				
				<Row className="row-detail myExp">
					<Col>
						<h4 className="myExp">SDE Intern</h4>
            			<p className="hide">Indian Development Foundation</p>
					</Col>
					<Col className="exp-date" xs={5}>Oct 2022 - Mar 2023</Col>
				</Row>
				<Row className="reveal fade-left" ><hr/></Row>
				
				<Row className="row-detail myExp">
					<Col >
						<h4 className="myExp">React And React Native Developer</h4>
            			<p className="hide">Dot Minds LPP</p>
					</Col>
					<Col className="exp-date" xs={5}>Mar 2022 - May 2022</Col>
				</Row>
				<Row className="reveal fade-left" ><hr/></Row>
				
				<Row className="row-detail">
					<Col>
          				<h4 className="myExp">Simulation Developer</h4>
            			<p className="hide">Shah And Anchor Kutchhi Engineering College</p>
					</Col >
					<Col className="exp-date" xs={5} >Nov 2022 - Mar 2022</Col>
				</Row>
				<Row className="reveal fade-left" ><hr/></Row>
			</Row>
		</Container>
	);
}

export default Experience;
