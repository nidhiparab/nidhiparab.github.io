import React from 'react'
import './myprojects.css';
import { ProjectCard } from "./ProjectCard";
import future from "../assets/future.png"
import hand from "../assets/hand.png"
import vlab from "../assets/vlab.png"
import quanta from "../assets/quanta.png"
import ibm from "../assets/ibm.png"
import { Row, Col, Container } from 'react-bootstrap';
import Slider from "react-slick";

function Myprojects() {
  const projects = [
    {
      title: "ChatGPT",
      description: "Clone",
      git:"https://github.com/nidhiparab/nidhiparab.github.io",
      web:"https://chatgpt-nidhi.vercel.app/",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:future,
      
    },
    {
      title: "Future-Edu",
      description: "College Predictor",
      git:"https://github.com/nidhiparab/Future-edu",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:future,
      
    },
    {
      title: "OTT Analysis",
      description: "IBM Dashboard",
      git:"https://github.com/smartinternz02/SBSPS-Challenge-5372-OTT-Platform-Analysis-Tool",
      web:"https://github.com/nidhiparab/Future-edu",
      imgUrl:ibm,
    },
    {
      title: "BEE V-Lab",
      description: "Superpsition Theorem Simulation",
      git:"https://github.com/nidhiparab/BEE-Virtual-laboratory",
      web:"https://www.shahandanchor.com/VLab/expt/simulation.php?subID=4&expID=2",
      imgUrl:vlab,
    },
    {
      title: "Hand-2-Hand",
      description: "An app to Buy and Sell Engineering Study Material ",
      git:"https://github.com/nidhiparab/Hand2Hand",
      imgUrl:hand,
    },
    {
      title: "Quanta",
      description: "UI for Quantum Clustering",
      web:"https://framer.com/share/Quanta--cOE9rrvTTZo5viSCV67q/RZAgbUr0T#RZAgbUr0T",
      imgUrl:quanta,
    },
    ];
  return (
    <Container id="projects" ><Row className="headi">
      <h3>Projects</h3>
    </Row>
      <Row className="body"><div className="main-scroll-div">
      <div className="cover">
        <a href=""></a>
        <div className="scroll-images">
        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
        </div>
      </div>
      
    </div></Row>

    </Container>
    
  )
}

export default Myprojects;
