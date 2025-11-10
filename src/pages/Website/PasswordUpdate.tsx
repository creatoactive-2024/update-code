import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';
import tick from '../../img/tick-check.svg';

const PasswordUpdate: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="sign-in">
      <Container>
        <Row className="position-relative">
          {/* Add close button */}
          <div className="close-btn position-absolute end-0 top-0 ">
            <Button 
              variant="link" 
              onClick={() => navigate('/')}
              className="p-0"
            >
              <img src={close} alt="Close" width="24" height="24" />
            </Button>
          </div>
          
          <Col md={5} className="mx-auto">
            <div className="signin-card forgot-screen text-center">
              <div className="logo text-center mb-3">
                <Link to="/">
                  <img src={logo} alt="Drop N Park" className="" />
                </Link>
              </div>

              <h5 className="text-center">PASSWORD <br></br>
UPDATED</h5>
<img src={tick} alt="Drop N Park" className="mx-auto mb-4" />
              <p className="auth-discription">your password hos been updated successfully</p>

               <Button href="/signin"
                  className="signin-btn w-100"
                > login
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PasswordUpdate;

