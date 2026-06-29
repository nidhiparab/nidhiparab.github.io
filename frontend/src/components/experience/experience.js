import "./experience.css";
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = ({title, company, content, date}) => {
    return (
        <Container>
            <Row className="reveal row-detail">
                <Col>
                    <div className="no-hide">
                        <div className="myExp">
                            <span className="exp-name">{title}</span>
                            <span className="exp-date">{date}</span>
                        </div>
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

export default ExperienceCard