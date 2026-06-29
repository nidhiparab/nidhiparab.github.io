import React from 'react';
import './experience.css';
import { Row, Col, Container } from 'react-bootstrap';
import ExperienceCard from './experience.js';

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
	  
	  const expData = [
		  {
			  title:'product intern',
			  company:' crypt0nest',
			  date: '2025-present'
		  },
		  {
			  title:'research student',
			  company:'indian institute of technology (iit), Bombay',
			  date: '2023-2024'
		  },
		  {
			  title:'software intern',
			  company:'indian development foundation.',
			  date: '2022-2023'
		  },
		  {
			  title:'react development intern.',
			  company:'dotminds',
			  date: '2022'
		  },
		  {
			  title:'simulation developer.',
			  company:'shah & anchor kutchhi engineering college.',
			  date: '2021'
		  },
	  ]
	  
	  
	return (
		<Container className="exp" id="experience">
		<Row>
			<Col className="heading">
					<h3>experience.</h3>
			</Col>
			<Col lg="8">
				<Row className="row-exp"> 
							{expData.map((exp, index)=>{
								return <ExperienceCard key={index} {...exp}/>
							})}
							
				</Row>
			</Col>
		</Row>
		</Container>
	);
}

export default Experience;
