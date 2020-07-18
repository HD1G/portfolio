import React from 'react';
import { Row,  Col } from 'reactstrap';
import '../App';
import {
  Card, CardBody,
} from 'reactstrap';
import { faLaptopCode, faServer, faDatabase, faFingerprint, faDraftingCompass, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skills = (props) => {

  return (
    <div id="skillsSection">
      <Row>
        <Col>
          <h4 className="skills">My Skills</h4>
          <h6 className="skills-description">Connecting my creative background in Graphic Design with the technological tools learned at CWRU's Bootcamp. </h6>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col xs="4" >
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faLaptopCode} size="5x" />
                </div>
                <hr></hr>
                <h5>Front End Design</h5>
                <h6 className="skills-h6">HTML / CSS / Javascript</h6>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="4">
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faServer} size="5x" />
                </div>
                <hr></hr>
                <h5>Back End</h5>
                <h6 className="skills-h6">Node.js / React.js / MERN Stack</h6>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="4">
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faDatabase} size="5x" />
                </div>
                <hr></hr>
                <h5>Database</h5>
                <h6 className="skills-h6">MySQL / MongoDB</h6>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="4">
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faFingerprint} size="5x" />
                </div>
                <hr></hr>
                <h5>Brand Identity</h5>
                <h6 className="skills-h6">Creator of perfect brand awareness through style consistency.</h6>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col xs="4">
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faDraftingCompass} size="5x" />
                </div>
                <hr></hr>
                <h5>Illustration</h5>
                <h6 className="skills-h6">Everything from photo realistic to cartoon inspired whimsy.</h6>
              </CardBody>
            </Card>
          </div>
        </Col><Col xs="4">
          <div>
            <Card className="text-center skills-card">
              <CardBody>
                <div>
                  <FontAwesomeIcon icon={faNewspaper} size="5x" />
                </div>
                <hr></hr>
                <h5>Page Layout</h5>
                <h6 className="skills-h6">Creating visual balance through a unified message.</h6>
              </CardBody>
            </Card>
          </div>
        </Col>


      </Row>
    </div>
  )
}


export default Skills;