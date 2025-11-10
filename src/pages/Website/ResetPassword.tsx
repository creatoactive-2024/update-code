import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';
import eye from "../../img/eye-show.svg";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const getStrength = () => {
    if (password.length > 8) return "Excellent";
    if (password.length > 5) return "Good";
    return "Weak";
  };

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

              <h5 className="text-center">Reset password</h5>
              <p className="auth-discription">Please set your new password</p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group-mb">
                  <Form.Label>New Password</Form.Label>
                  <div className="position-relative">
                  <Form.Control
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                  />
                                  <img
                                    src={showPassword ? eye : eye}
                                    alt="Toggle visibility"
                                    className="toggle-password-img"
                                    onClick={() => setShowPass(!showPass)}
                                  />
                  </div>
                  {password && (
        <p className="strength">
          Password strength: <span className={getStrength().toLowerCase()}>{getStrength()}</span>
        </p>
      )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Re-enter Password</Form.Label>
                  <div className="position-relative">
                  <Form.Control
                    type={showConfirm ? "text" : "password"}
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="********"
                    required
                  />
                  {/* 👁 Image toggle */}
                                  <img src={showPassword ? eye : eye}
                                   alt="Toggle visibility"
                                    className="toggle-password-img"
                                  onClick={() => setShowConfirm(!showConfirm)}
                                  />
                  {/* <span className="errormsg">Password do not match</span>
                  <span className="successmsg">Password match</span> */}
                  </div>
                </Form.Group>
                <Button href="/passwordupdate" type="submit" className="signin-btn w-100 mt-3">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;

