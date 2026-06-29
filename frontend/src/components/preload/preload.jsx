import React from 'react';
import './preload.css';
import { Row, Col, Container } from 'react-bootstrap';

function preload() {
  return (
    <div className="preload">
    <Container className="logo-cont" >
      <Row className="justify-content-md-center">
      <img src={require('../assets/load.gif')} alt="" className="load-img" />
      </Row>
    
    </Container>
    </div>
  )
}

export default preload
