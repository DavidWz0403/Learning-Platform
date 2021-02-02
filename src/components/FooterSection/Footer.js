import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
// import HelpfulLinks from './HelpfulLinks';
// import SignUp from './SignUp';
// import Contact from './Contact';
import './Footer.css';


function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <Container className="Footer">
        <Row>
          <Col xs={12} sm={6} md={4}  className="background">
            {/* <HelpfulLinks /> */}
            <h4> TeachYourBest INC </h4>
           <p> We are a newly created teaching platform aiming to make your quarantine more productive and fun !
               Here you will find endless opportunities to learn new things or you will be the one who teach to the 
               thousands !
               What are your waiting for ? </p>
               <h3>Register now: </h3>
               {/* </Register> */}
           <Button variant="light">Student</Button> <Button variant="dark">Teacher</Button>{' '}
 
           
          </Col>
        
          <Col xs={12} sm={6} md={4}   className="background">
          <h4> Sign Up </h4>
            <ul className ="list-unstyled">
              <li> Student</li>
              <li> Teacher</li>
              </ul>
            {/* <SignUp /> */}
          </Col>
          <Col xs={12} sm={6} md={4}   className="background">
          <h4> Find Us</h4>
           <ul className ="list-unstyled">
              <li>1236</li>
              <li>Vienna,Austria</li>
              </ul>
            <ul className ="footer-social-links">
             <li>
							<a href="#">
								<i class="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i class="fa fa-linkedin" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i class="fa fa-youtube" aria-hidden="true"></i>
							</a>
						</li>
              </ul>
                      </Col>
        </Row>
      </Container>
      <hr />
      <Container className="FooterTwo">
        <Row>
          <Col xs={12} >
            <p>&copy; {new Date().getFullYear()} TeachYourBest INC  | All right reserved  | Terms of Service  | Privacy</p>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
