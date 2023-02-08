import React from 'react'
import './top.css'
import { Row, Col, Container } from 'react-bootstrap';
import {FaArrowCircleUp } from "react-icons/fa";

function Top() {
  return (
    <Container className="toTop">
      <div className='d-flex justify-content-end goTop'><a href="#header"  title="Go to the Top"><FaArrowCircleUp/></a></div>
    </Container>
  )
}

export default Top