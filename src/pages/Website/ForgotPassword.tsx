import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';
import baseURL from "../utils/baseURL";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    if (!email) {
      setError("Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert(`Email: ${email}\nPassword: ${password}`);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
  
      if (!validateForm()) return;
  
      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/api/users/forgot-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email}),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || "Email send failed. Please try again.");
        }
  
        alert("Reset password link send to your email id.");

        // navigate("/resetpassword", { state: bookingDetails });
  
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
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

              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group-mb">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your registered email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* <Button href="/resetpassword" type="submit" className="signin-btn w-100">
                  Send Email
                </Button> */}

                  <Button
                      type="submit"
                      className="signin-btn w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />{" "}
                          Sending Email...
                        </>
                      ) : (
                        "Send Email"
                      )}
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

