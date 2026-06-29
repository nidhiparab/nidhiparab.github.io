import React  from 'react';
import './footer.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
    <div className="footer">
        <div className="newsletter">
            <Row className="justify-content-between align-items-center">
                <Col>
                    <p>it's not about chance; it's about staying informed. subscribe for a monthly dose of insights that keep you at the forefront of technology trends.</p>
                </Col>
                <Col className="subs">
                      <a href="https://mailchi.mp/04a063dfe83e/whcaz7vtat">
                        <Button variant="primary">
                            join my newsletter <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} />
                        </Button>
                    </a>
                </Col>
            </Row>
        </div>
		<div className="foot">
      <Container>
        <Row className="foot-links justify-content-between">
            <Col xs="12" md="auto" className="foot-link">
              <a href="mailto:nidhiparabmail@gmail.com">email <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col>
            <Col xs="12" md="auto"className="foot-link">
              <a href="https://www.linkedin.com/in/nidhiparab/">linkedin <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col>
            <Col xs="12" md="auto" className="foot-link">
              <a href="https://github.com/nidhiparab">github <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col>
            <Col xs="12" md="auto" className="foot-link">
              <a href="https://www.instagram.com/nidhiparab_/">instagram <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col>
            <Col xs="12" md="auto" className="foot-link">
              <a href="https://scholar.google.com/citations?user=s3m3mQMAAAAJ&hl=en&oi=sra">google scholar <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col>
            {/* <Col xs="12" md="auto" className="foot-link">
              <a href="https://bento.me/nidhiparab">bento <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
            </Col> */}

        </Row>
        <Row className="copyright">
              <p>© 2024 Copyright: developed by nidhi parab.</p>
        </Row>
      </Container>
			
		</div></div>
	);
}

export default Footer;
