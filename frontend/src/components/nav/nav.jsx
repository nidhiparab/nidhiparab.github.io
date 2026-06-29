import React,{useState,useEffect} from 'react';
import "./nav.css";
import { Row, Col, Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function Navi() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const banner = document.querySelector('.banner-scroll-wrapper');
      if (!banner) {
        setScrolled(window.scrollY >= 300);
        return;
      }

      const bannerEnd = banner.offsetTop + banner.offsetHeight - window.innerHeight;
      setScrolled(window.scrollY >= bannerEnd - 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  
  return (
    <Navbar expand="md" className={scrolled ? "yes" : "scrolled"}>
        <Container>
          <Navbar.Brand href="#about">
            <h3  className="name">np.</h3>
          </Navbar.Brand>
            <Nav className="ms-auto">
              <Col className="nav-button">
                      <a href="https://topmate.io/nidhiparab">
                        <Button variant="primary">
                            book 1 : 1 <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} />
                        </Button>
                    </a>
                </Col>
            </Nav>
        </Container>
      </Navbar>
  )
}

export default Navi