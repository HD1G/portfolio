import React from 'react';
import { Row,  Col } from 'reactstrap';
import '../App';


const Footer = (props) => {
  return (
    <div id="footer-section">
      <Row>
          <Col>
          <div className="copyright">
          Ryan Hashier's Portfolio Page 2020 &copy;
          </div>
          </Col>
        </Row>
        </div>
  );
}

export default Footer;