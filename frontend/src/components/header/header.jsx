import React, { useLayoutEffect, useRef, useState } from "react";
import './header.css';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import cf from "../assets/cf.gif"


const Header = () => {
        
                // const preScroll = useRef(null);
                // const elemRef = useRef(null);
                // const [scale, setScale] = useState(1.1);
              
                // useLayoutEffect(() => {
                //   const botPos = (element) => element.getBoundingClientRect().bottom;
                //   const onScroll = () => {
                //     const divBotPos = botPos(elemRef.current);
                //     const scrollPos = preScroll.current > window.scrollY;
                //     preScroll.current = window.scrollY;
                //     if (scrollPos && divBotPos > window.innerHeight) {
                //       setScale(1);
                //       return;
                //     }
                //     if (scrollPos && divBotPos < window.innerHeight) {
                //       setScale(1.1);
                //     }
                //   };
              
                //   window.addEventListener("scroll", onScroll);
                //   return () => window.removeEventListener("scroll", onScroll);
                // }, []);
	return (
                <div>
		<Container className="header " id="header">
                
                                <Row data-aos="fade-left" className="name-head">
                                        <h1>nidhi parab.</h1>
                                        <p>a work in progress.</p>
                                </Row>
                                
                                <Row className="front align-self-end">
                                        <h1>ai engineer.</h1>
                                        <p>turning research into product.</p>           
                                </Row>
                                
			
		</Container>
                                {/* <Row className="head-img" ref={elemRef}>
                                        <img src={require('../assets/chatgpt.jpg')} alt="" className="" style={{transition: "transform 1000ms ease-in-out",
                                        transform: `scale(${scale})`}} />

                                </Row> */}
                </div>
            
	);
};
export default Header;
