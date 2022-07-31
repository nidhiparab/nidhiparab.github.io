import React from 'react';
import './sidebar.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FaGithub,FaInstagram,FaLinkedinIn,FaWhatsapp,FaRegEnvelope} from "react-icons/fa";

function Sidebar() {
  return (
    <Container className="sideBar d-none d-lg-block ">
        <Row className="siderow ">
            <Col className="vstack gap-5 ">
           
            <Row >
            <a href="https://github.com/nidhiparab"><FaGithub className="ico" size="30px"/></a>
            </Row>
            <Row >
            <a href="https://www.instagram.com/nidhiparab_/"><FaInstagram className="ico" size="30px"/></a>
            </Row>
            <Row>
            <a href="https://www.linkedin.com/in/nidhiparab/"><FaLinkedinIn className="ico" size="30px"/></a>
            </Row>
            <Row>
            <a href="https://wa.me/+919967881370"><FaWhatsapp className="ico" size="30px"/></a>
            </Row>
            <Row>
            <a href="mailto:nidhiparabmail@gmail.com"><FaRegEnvelope className="ico" size="30px"/></a>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Sidebar