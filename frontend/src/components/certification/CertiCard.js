import './certification.css';
import { FaGithub,FaLink} from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
	CAccordion,
	CAccordionHeader,
	CAccordionItem,
	CAccordionBody,
	CCardText,
	CListGroup,
	CListGroupItem,
	CCardLink
} from '@coreui/react';


const CertiCard = ({ title,company, content, date, certilink}) => {
   
  return (
    <Container >
	<Row className="reveal row-detail">
								<Col >
	<div className="no-hide" >
								<a className="certi-li" href={certilink}>
								<div className="myExp">
									<span className="exp-name">{title} </span>
									
									<span className="exp-date">{date}</span></div>
									</a>
								</div>
								    <p className="hide">{company}</p>
									</Col>
								<Col className="arrow-container">
								<FontAwesomeIcon className="exp-rotatedarrow" icon={faArrowRight} />
								 </Col>
							<Row className="reveal fade-left" ><hr/></Row>
							</Row>
							
</Container>
  )
  };
  export default CertiCard;