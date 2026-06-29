import React, { useLayoutEffect, useRef, useState } from "react";
import './myprojects.css';
import { ProjectCard } from "./ProjectCard";
import future from "../assets/future.png"
import hand from "../assets/hand.png"
import vlab from "../assets/vlab.png"
import quanta from "../assets/quanta.png"
import ibm from "../assets/ibm.png"
import rust from "../assets/rust.png"
import colab from "../assets/colab.jpeg"
import yogi from "../assets/yogi.png"
import idf from "../assets/idf.jpeg"
import ac from "../assets/ac.jpg"
import chatgpt from "../assets/chatgpt.jpg"
import { Row, Col, Container } from 'react-bootstrap';
import Slider from "react-slick";

function Myprojects() {

  const projects = [
    {
      title: "Colab-Alarm",
      description: "pypi, python",
      subdescription: "Open Source",
      git:"https://github.com/nidhiparab/colab-alarm",
      web:"https://pypi.org/project/colab-alarm/",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:colab,
      
    },
    {
      title: "AirCare",
      description: "django, vue.js",
      subdescription: "Personal Project",
      git:"https://github.com/nidhiparab/hvac-cmms",
      // web:"https://chatgpt-nidhi.vercel.app/",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:ac,
      
    },
    {
      title: "GitHub Issue Finder CLI",
      description: "rust",
      subdescription: "Personal Project",
      git:"https://github.com/nidhiparab/GitHub-Issue-Finder-CLI",
      // web:"https://chatgpt-nidhi.vercel.app/",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:rust,
      
    },
    // {
    //   title: "chatgpt clone",
    //   description: "react.js",
    //   subdescription: "Personal Project",
    //   git:"https://github.com/nidhiparab/chatgpt",
    //   // web:"https://chatgpt-nidhi.vercel.app/",
    //   //imgUrl:{require("../assets/me.jpeg")}
    //   imgUrl:chatgpt,
      
    // },
    {
      title: "Yogi",
      description: "python, flask, html, css",
      subdescription: "IEEE Bombay Section: Prequalifier",
      git:"https://github.com/nidhiparab/YOGI",
      //imgUrl:{require("../assets/me.jpeg")}
      imgUrl:yogi,
      
    },
    // {
    //   title: "Bal Gurukul",
    //   description: "NGO Management Portal",
    //   subdescription: "Internship",
    //   web:"https://idfbalgurukul.com/",
    //   //imgUrl:{require("../assets/me.jpeg")}
    //   imgUrl:idf,
      
    // },
    {
      title: "superpsition theorem simulation",
      description: "html, css, javascript",
      subdescription: "Internship",
      git:"https://github.com/nidhiparab/BEE-Virtual-laboratory",
      web:"https://www.shahandanchor.com/VLab/expt/simulation.php?subID=4&expID=2",
      imgUrl:vlab,
    },
 
    ];
  return (
    <div className="projects" >
    <div className="work-heading" >
      <div className="rightleft" >
        <p> • PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK</p>
        <p> • PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK</p>
        <p> • PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK</p>
        <p> • PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK</p>
        <p> • PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK</p>
      </div>
    
    </div>
    <div  >     
      
      
      
      <Container className="">
      {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                index={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Container>

    </div>
    </div>
    
  )
}

export default Myprojects;
