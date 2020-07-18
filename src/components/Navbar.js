import React from 'react';
import '../App';
import {
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap';
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../images/rhLogo.png'


const Nav = (props) => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/"><img src={Logo} alt="portrait" className="img-fluid logo"></img>
</NavbarBrand>
        <NavbarText className="ml-auto envelope-icon"> <a href = "mailto: ryanahashier@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        <a href = "https://www.linkedin.com/in/ryan-hashier-2779011a1/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></NavbarText>
      </Navbar>
    </div>
  );
}

export default Nav;