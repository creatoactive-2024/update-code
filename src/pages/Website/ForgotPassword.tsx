import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

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
            <div className="signin-card forgot-screen">
              <div className="logo text-center mb-3">
                <Link to="/">
                  <img src={logo} alt="Drop N Park" className="" />
                </Link>
              </div>

              <h5 className="text-center">Forgot Password?</h5>
              <p className="auth-discription">Please enter your registered email address we will get back to you with
the reset password link and confirmation OTP thanks</p>

              <Form>
                <Form.Group className="form-group-mb">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your registered email address"
                    value={email}
                    required
                  />
                </Form.Group>
                <Button href="/resetpassword" type="submit" className="signin-btn w-100">
                  Send Email
                </Button>
              </Form>

              <div className="text-center mt-4 small sign-in-text">
                <hr></hr>
                <p>
                  Back to <Link to="/signin" className="accent-link">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;

