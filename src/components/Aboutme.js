import React from 'react';
import { Row,  Col } from 'reactstrap';
import '../App';
import ryanPic from '../images/ryanPic.png'


const Bio = (props) => {
  return (
    <div id="aboutMeSection">
      <Row>
      <Col xs="8">
        <h4 className="name">Ryan Hashier</h4>
        <h5 className="ryanTitle">Full-Stack Web Developer and Graphic Designer</h5>
        <hr></hr>
        <p className="romanceCopy">Welcome to my online portfolio. I currently reside
in Cleveland, Ohio USA, and I am studying at Case Western Reserve University's Coding
Bootcamp. My professional career and education in Graphic Design always kept me close to web
development. Especially in front end design.  I quickly learned there was more involved in
web development than just making great looking websites. That's how I ended up at CWRU's
Coding Bootcamp, with the desire to learn it all. I thank you for taking the time to view
my portfolio of work.</p>
<h5 className="edTitle">Case Western Reserve University </h5>
<h6 className="edSub">Coding Bootcamp Certification (2020)</h6>
<h5 className="edTitle">Cleveland State University </h5>
<h6 className="edSub">Post B.A. Graphic Design Program (2005)</h6>
<h5 className="edTitle">Baldwin-Wallace University </h5>
<h6 className="edSub">B.A. Business Management (2002)</h6>
     </Col>

        <Col xs="4">
          <div>
        <img src={ryanPic} alt="portrait" className="portrait img-fluid"></img>
        </div>
        </Col>
        </Row>
        </div>
  );
}

export default Bio;