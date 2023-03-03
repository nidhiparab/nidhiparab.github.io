import React from 'react';
import './certification.css';
import CertiCard from './CertiCard.js';
import { Row, Col, Container } from 'react-bootstrap';

const Certification = () => {
	const accordionData = [
		{
			title: 'Google Kickstart 2022',
			certilink: 'https://drive.google.com/file/d/1V49wCqRFsmli2ZvKJCLM4fZDDs69dEQR/view?usp=sharing',
			date: 'Aug 2022'
		},
		{
			title: 'IEEE Bombay Section: Ideathon',
			certilink: 'https://drive.google.com/file/d/1DIMokVUU45ovL85Kb-b8xFDHpi0S5wW_/view?usp=sharing',
			date: 'Dec 2022'
		},
		{
			title: 'Developing Cloud Apps with Node.js and React',
			certilink: 'https://www.coursera.org/account/accomplishments/certificate/MTZB9JJNP7KP',
			date: 'Jul 2022'
		},
		{
			title: 'Modern JavaScript: ES6 Basics',
			certilink: 'https://www.coursera.org/account/accomplishments/certificate/PHYFKBMTQV4Q',
			date: 'Jun 2022'
		},
		{
			title: 'HackerRank: Python',
			certilink: 'https://www.hackerrank.com/certificates/50f55d0b6727',
			date: 'Jun 2022'
		},
		{
			title: 'Triplebyte Certified',
			certilink: 'https://triplebyte.com/tb/nidhi-parab-vlxiqva/certificate',
			date: 'Jun 2022'
		},
		{
			title: 'Silver Elite Certification for Programming in Java',
			certilink: 'https://drive.google.com/file/d/1uQSTsOiDeUrWIMYX28oP7V08Dl0b3KFD/view?usp=sharing',
			date: 'Nov 2021'
		},
		
	];

	return (
		<Container id="certi">
			<div className="headi">
				<h3>Certifications</h3>
			</div>
			<div >
				<Row className="row-exp certificate">
					<Row >
						{accordionData.map((accordion, index) => {
							return <CertiCard key={index} {...accordion} />;
						})}
					</Row>
				</Row>
			</div>
		</Container>
	);
};

export default Certification;
