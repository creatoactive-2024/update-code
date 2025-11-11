// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../img/logo.png';
// import close from '../../img/close.svg';

// const SignIn: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div className="sign-in">
//       <Container>
//         <Row className="position-relative">
//           {/* Add close button */}
//           <div className="close-btn position-absolute end-0 top-0 ">
//             <Button 
//               variant="link" 
//               onClick={() => navigate('/')}
//               className="p-0"
//             >
//               <img src={close} alt="Close" width="24" height="24" />
//             </Button>
//           </div>
          
//           <Col md={5} className="mx-auto">
//             <div className="signin-card">
//               <div className="logo text-center">
//                 <Link to="/">
//                   <img src={logo} alt="Drop N Park" className="" />
//                 </Link>
//               </div>

//               <h5 className="text-center">Sign In</h5>

//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="form-group-mb">
//                   <Form.Label>Your Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-2">
//                   <Form.Label>Your Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <div className="text-end forgot-link">
//                   <a href="#" className="">Forgot Password?</a>
//                 </div>

//                 <Button type="submit" className="signin-btn w-100">
//                   Sign In
//                 </Button>
//               </Form>

//               <div className="text-center mt-4 small sign-in-text">
//                 <p>
//                   Are you a travel agent?{" "}
//                   <Link to="/" className="accent-link">Access the Travel Agent Sign In</Link>
//                 </p>
//                 <hr></hr>
//                 <p>
//                   Not a member?{" "}
//                   <Link to="/registration" className="accent-link">Register</Link> and start earning valuable rewards
//                   with every stay.
//                 </p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../img/logo.png";
import close from "../../../img/close.svg";
import baseURL from "../../utils/baseURL";
import eye from "../../../img/eye-show.svg";


const SignIn: React.FC = () => {
  
    const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const bookingData = location.state || {};
  const bookingDetails = location.state;
  console.log("dataaa", bookingDetails);

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
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user?.firstName) localStorage.setItem("firstName", user.firstName);
      if (user?.lastName) localStorage.setItem("lastName", user.lastName);
      if (user?.role) localStorage.setItem("role", user.role);

      if (bookingDetails && Object.keys(bookingDetails).length > 0) {
        // alert("Registration successful!");
        navigate("/registration", { state: bookingDetails });
        return;
      }

      // Role-based redirection
      switch (user?.role) {
        case "admin":
          navigate("/admin");
          break;
        case "customer":
          navigate("/");
          break;
        case "driver":
          navigate("/dashboard");
          break;
        case "supervisor":
          navigate("/supervisor_dashboard");
          break;
        default:
          navigate("/mybooking");
      }

    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault(); // prevent <Link> default navigation
    if (bookingDetails && Object.keys(bookingDetails).length > 0) {
      // Pass bookingDetails to registration page
      navigate("/registration", { state: bookingDetails });
    } else {
      // Just navigate normally
      navigate("/registration");
    }
  };

  return (
    <div className="sign-in">
      <Container>
        <Row className="position-relative">
          {/* Close button */}
          <div className="close-btn position-absolute end-0 top-0">
            {/* <Button
              variant="link"
              onClick={() => navigate("/")}
              className="p-0"
            >
              <img src={close} alt="Close" width="24" height="24" />
            </Button> */}
          </div>

          <Col md={5} className="mx-auto">
            <div className="signin-card">
              <div className="logo text-center mb-3">
                <Link to="/">
                  <img src={logo} alt="Drop N Park" className="img-fluid" />
                </Link>
              </div>

              <h5 className="text-center mb-4">Admin  Sing In</h5>

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
              <Form.Group className="mb-3 ">
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
                  src={showPassword ? eye : eye}
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

export default SignIn;
