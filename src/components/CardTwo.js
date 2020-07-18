import React from 'react';
import {
  Card, CardImg,  CardBody,
   Button
} from 'reactstrap';
import trackPic from '../images/turntable.jpg'


const ProjectTwo = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" img src={trackPic} alt="turntable" />
        <CardBody>
          <h5 className="card-title">Next Track Up</h5>
          <h6 className="project-number">CWRU Bootcamp project 2</h6>
          <p className="card-description">A community playlist application where friends share and add to each others creations</p>
          <Button>Visit Site</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTwo;