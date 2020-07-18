import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App';
import ProjectOne from './CardOne';
import ProjectTwo from './CardTwo';


const Portfolio  = (props) => {
  return (
    <div id="portfolio-section">
      <Row>
          <Col xs="6">
            <div id="project-box">
          <h5 className="project-title">Full Stack Projects</h5>
          <p className="box-description">These are the two completed projects from my time at Case Western Reserve University's Bootcamp. 
             These projects were both created in a team environment, and were the culminization of all that we had learned up to that point.</p>
             <hr></hr>
             <h6 className="project-title">Skills Used</h6>
             <ul className="project-list">
               <li>HTML</li>
               <li>CSS</li>
               <li>Javascript</li>
               <li>Node.js</li>
               <li>MySQL</li>
             </ul>
             </div>
          </Col>
        <Col xs="3">
        < ProjectOne />
        </Col>
        <Col xs="3">
        < ProjectTwo />
        </Col>
         </Row>
    </div>
  );
}

export default Portfolio;