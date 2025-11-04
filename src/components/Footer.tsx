import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/footer-logo.png';
import fb from '../img/facebook.svg';
import insta from '../img/instagram.svg';
import twtr from '../img/twitter.svg';
import envelope from '../img/email.svg';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="website-footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className='footer-info'>
              <Link to="/">
                <img src={logo} alt="Drop N Park" className='footer-logo' />
              </Link>
              <h6>Sign up here for regular updates on new events and offers</h6>
              <Form onSubmit={handleSubmit} className="d-flex justify-content-center form-wrap">
                <InputGroup className="subscribe-input">
                <img src={envelope} alt="Email"  className="email-icon"/>
                  <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="send-btn">
                    SEND NOW
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Col>

          <Col md={1}>
            <div className='border-horizontal'></div>
          </Col>

          <Col md={5} className="d-md-flex justify-content-end ms-auto">
            <div className='footer-link'>
              <h3>Useful links</h3>
              <ul className="footer-navigation">
                <li><Link to="/location">Locations</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/help">Help</Link></li>
              </ul>
            </div>

            <div className='footer-link'>
              <h3>Contact info</h3>
              <ul className="footer-contact">
                <li><p>180 Attwell Dr, Suite 160, Etobicoke, ON M9W 5Z5</p></li>
                <li><a href='tel:9422000043'>Tel. 942-200-0043</a></li>
                <li><a href='mailto:info@dropnpark.com'>Info@dropnpark.com</a></li>
              </ul>

              <ul className="social-media-list">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={fb} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twtr} alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className='copyright'>
          <Col className='text-center'>
            <small>Copyright © {new Date().getFullYear()} by <span>DropNPark</span> | All Rights Reserved</small>
            {/* <p>Designed &amp; Developed by <span>Creatoactive Studios</span></p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;