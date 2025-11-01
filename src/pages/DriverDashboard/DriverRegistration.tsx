import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profile from '../../img/profile-pic.jpg';
import FileUpload from '@/components/FileUpload';

const DriverRegistration: React.FC = () => {
  

  

  return (
    <div className="">
      {/* Inner banner */}
      <section className="inner-banner registration-banner">
              <Container>
                <Row className="align-items-center text-center">
                  <Col>
                    <h1 className="page-title">Welcome to the New <br></br><span>DropNPark</span> Rewards</h1>
                  </Col>
                </Row>
              </Container>
      </section>
      
      <Container>
        <Row>
            <Col md={12} className="mx-auto">
                <span className="mandatory-warn">
                    * Mandatory fields
                </span>
                <div className="registration-form myprofile-form">
                    <Form>
                        <h5 className="section-title">Your Information</h5>
                        <Row>
                            <Col md={6} lg={4}>
                            
                            <Form.Group className="custome-form-group">
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                required
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                                <Form.Group className="custome-form-group">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                required
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                                <Form.Group className="custome-form-group">
                                <Form.Label>Postal Code *</Form.Label>
                                <Form.Control
                                type="text"
                                name="postalCode"
                                placeholder="Enter your postal code"
                                required
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                        

                        

                        

                        <h5 className="section-title">Sign In Information</h5>
                        <Row>
                            <Col md={6} lg={4}>
                                <Form.Group className="custome-form-group">
                                <Form.Label>Email Address *</Form.Label>
                                <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Confirm Email Address *</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            placeholder="Confirm your email"
                            required
                            />
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Password *</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            />
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Confirm Password *</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            placeholder="Confirm password"
                            required
                            />
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                                <Form.Label>Mobile Number *</Form.Label>
                                <Form.Control
                                type="phone"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                required
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                                <Form.Label>Driver License Number *</Form.Label>
                                <Form.Control
                                type="text"
                                name="mobile"
                                placeholder="DL123456789"
                                required
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <hr></hr>
                        <h5 className="section-title">Upload Driver License (JPG/PDF)</h5>
                        <div className="notificatin-text">
                        <FileUpload />
                        
                        <div className="d-flex registration-btns">
                            <Button variant="primary" type="submit" className=" primary-btn">
                                Update
                            </Button>
                        </div>
                        <p className="mb-32">By registering, you agree to DropNPark<br></br>
                        <Link to=''>Terms & Conditions</Link> and <Link to=''>Privacy Policy</Link>.</p>
                        <p>Already have an account? <Link to=''>Sign In</Link></p>
                        </div>
                </div>
            </Col>
        </Row>
      </Container>
      
    </div>
  );
  
};

export default DriverRegistration;
