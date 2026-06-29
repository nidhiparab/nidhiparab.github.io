import { Col, Row } from "react-bootstrap";
import './myprojects.css';
import { FaGithub,FaLink} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const ProjectCard = ({index, title, description,subdescription,git,web,imgUrl}) => {
   
  return (
          
    <div className={index%2 ==0 ?'main-card right':'main-card left'} style={{ '--my-image': `url('${imgUrl}')` }}>

          <div className={index%2 ==0 ?'details-right':'details-left'}>
          <h4 className="text">{title}</h4>
          <span className="text">{description}</span><br/>
          <span className="text-sub">{subdescription}</span><br/><br/>
          <div className="links">
          <a href={web} className={web?'icon':'hide'}>visit <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
          
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
          <a href={git}  className={git?'icon':'hide'}> code <FontAwesomeIcon className="rotatedarrow" icon={faArrowRight} /></a>
          
          {/* <a href={git}  className={git?'icon':'hide'}><FaGithub size="40px"/></a>
          <a href={web} className={web?'icon':'hide'}><FaLink size="40px"/></a> */}
          </div>
          </div>
        
    
        
      </div>
   
  )
  }