import './certification.css';
import { FaGithub,FaLink} from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';
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


const CertiCard = ({ title, content, date, certilink}) => {
   
  return (
    <Container >

	<Row > 
		<Row className="certi-row ">
			<Col className="certiname"><Row>
			<h4><a className="certi-li" href={certilink}>{title}</a></h4>
			</Row>
				
			</Col>
			<Col>{date}
			</Col>
		</Row>
	</Row>
</Container>
  )
  };
  export default CertiCard;