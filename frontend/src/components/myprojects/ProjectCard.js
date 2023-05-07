import { Col } from "react-bootstrap";
import './myprojects.css';
import { FaGithub,FaLink} from "react-icons/fa";


export const ProjectCard = ({ title, description,subdescription,git,web,imgUrl}) => {
   
  return (
    <Col size={12} sm={6} md={4}>
          
    <div className="nofade">
      <div className="proj-imgbx row align-items-end" style={{ '--my-image': `url('${imgUrl}')` }} >
      
          <div className="proj-txtx">
          <h4 className="text">{title}</h4>
          <span className="text">{description}</span><br/>
          <span className="text-sub">{subdescription}</span><br/><br/>
          <a href={git}  className={git?'icon':'hide'}><FaGithub size="40px"/></a>
          <a href={web} className={web?'icon':'hide'}><FaLink size="40px"/></a>
        </div>
      </div>
        
    
        
      </div>
    </Col>
  )
  }