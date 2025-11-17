import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import baseURL from "../utils/baseURL";
import eye from "../../img/eye-show.svg";

const DriverSignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Basic front-end validation
  const validateForm = (): boolean => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
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
      const response = await fetch(`${baseURL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      // Save all user details in localStorage
      const { token, user } = data;
      
      // Check if user is a driver
      if (user?.role !== "driver") {
        setError("Access denied. This login is for drivers only.");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user?.firstName) localStorage.setItem("firstName", user.firstName);
      if (user?.lastName) localStorage.setItem("lastName", user.lastName);
      if (user?.role) localStorage.setItem("role", user.role);

      // Redirect to driver dashboard
      navigate("/dashboard");

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
          <Col md={5} className="mx-auto">
            <div className="signin-card">
              <div className="logo text-center mb-3">
                <Link to="/">
                  <img src={logo} alt="Drop N Park" className="img-fluid" />
                </Link>
              </div>

              <h5 className="text-center mb-4">Driver Sign In</h5>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    {/* 👁 Image toggle */}
                    <img
                      src={eye}
                      alt="Toggle visibility"
                      className="toggle-password-img"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </Form.Group>

                <div className="text-end mb-3 forgot-pass">
                  <Link to="/forgotpassword" className="small">
                    Forgot Password?
                  </Link>
                </div>

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
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
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

export default DriverSignIn;

