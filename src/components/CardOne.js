import React from 'react';
import {
  Card, CardImg, CardBody,
   Button
} from 'reactstrap';
import eventPic from '../images/outdoor.jpg'


const ProjectOne = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" img src={eventPic} alt="concert" />
        <CardBody>
          <h5 className="card-title">Event5 Now</h5>
          <h6 className="project-number">CWRU Bootcamp project 1</h6>
          <p className="card-description">An entertainment application that links users to local events based on the 5 day weather forecast.</p>
          <Button>Visit Site</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectOne;