import React from 'react';
import './certification.css';
import CertiCard from './CertiCard.js';
import { Row, Col, Container } from 'react-bootstrap';


const Certification = () => {
	const accordionData = [
		{
			title: 'best paper award',
			company: 'ieee conference: icacta 2023',
			certilink: 'https://drive.google.com/file/d/1V49wCqRFsmli2ZvKJCLM4fZDDs69dEQR/view?usp=sharing',
			date: 'Oct 2023'
		},
		{
			title: 'kickstart 2022 & 2023.',
			company: 'google.',
			certilink: 'https://drive.google.com/file/d/1V49wCqRFsmli2ZvKJCLM4fZDDs69dEQR/view?usp=sharing',
			date: '2022 & 23'
		},
		{
			title: 'ideathon.',
			company:'ieee bombay section.',
			certilink: 'https://drive.google.com/file/d/1DIMokVUU45ovL85Kb-b8xFDHpi0S5wW_/view?usp=sharing',
			date: 'dec 2022'
		},
		{
			title: 'developing cloud apps with node.js.',
			company:'coursera.',
			certilink: 'https://www.coursera.org/account/accomplishments/certificate/MTZB9JJNP7KP',
			date: 'Jul 2022'
		},
		{
			title: 'modern javascript: es6 basics.',
			company:'coursera.',
			certilink: 'https://www.coursera.org/account/accomplishments/certificate/PHYFKBMTQV4Q',
			date: 'Jun 2022'
		},
		{
			title: 'python basic.',
			company:'hackerrank.',
			certilink: 'https://www.hackerrank.com/certificates/50f55d0b6727',
			date: 'Jun 2022'
		},
		// {
		// 	title: 'Triplebyte Certified',
		// 	certilink: 'https://triplebyte.com/tb/nidhi-parab-vlxiqva/certificate',
		// 	date: 'Jun 2022'
		// },
		{
			title: 'Silver Elite:  Programming in Java.',
			company: 'National Programme on Technology Enhanced Learning',
			certilink: 'https://drive.google.com/file/d/1uQSTsOiDeUrWIMYX28oP7V08Dl0b3KFD/view?usp=sharing',
			date: 'Nov 2021'
		},
		
	];

	return (
		<Container className="exp" id="certi">
		
		<Row>
			<Col className="heading">
					<h3>certifications.</h3>
			</Col>
			<Col lg="8">
				<Row className="row-exp"> 
								{accordionData.map((accordion, index) => {
									return <CertiCard key={index} {...accordion} />;
								})}
							
				</Row>
			</Col>
		</Row>
		</Container>
	);
};

export default Certification;
