import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams  } from 'react-router-dom';
import logo from '../../img/logo.png';
import close from '../../img/close.svg';
import eye from "../../img/eye-show.svg";
import baseURL from "../utils/baseURL";

const ResetPassword: React.FC = () => {

  const { token } = useParams<{ token?: string }>();
  console.log("Token", token)

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getStrength = () => {
    if (password.length > 8) return "Excellent";
    if (password.length > 5) return "Good";
    return "Weak";
  };

  const validateForm = (): boolean => {
    // Clear previous messages
    setError(null);
    setSuccess(null);

    // alert("Helllo")

    // 1️⃣ Basic length check
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    // 3️⃣ Match check
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        
    
        if (!validateForm()) return;
    
        try {
          setLoading(true);
          const response = await fetch(`${baseURL}/api/users/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, password}),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.message || "Email send failed. Please try again.");
          }
    
          // alert("Reset password link send to your email id.");
  
          navigate("/passwordupdate");
    
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
                {/* <Button href="/passwordupdate" type="submit" className="signin-btn w-100 mt-3">
                  Submit
                </Button> */}

                {error && <p className="text-danger text-center mt-2">{error}</p>}
                {success && <p className="text-success text-center mt-2">{success}</p>}

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
                          Loading...
                        </>
                      ) : (
                        "Submit"
                      )}
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

