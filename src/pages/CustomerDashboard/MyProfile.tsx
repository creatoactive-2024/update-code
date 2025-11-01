import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profile from '../../img/profile-pic.jpg';


const MyProfile: React.FC = () => {
  

  

  return (
    <div className="">
      {/* Inner banner */}
      <section className="inner-banner booking-banner">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <div className='profile-wrapper'>
                <div className='profile-img'>
                  <img src={profile} alt="Profile" />
                </div>
                <div className='profile-info'>
                  <h2>John Doe</h2>
                  <a href='mailto:johndoe@gmail.com'>johndoe@gmail.com</a>
                  <span>Customer</span>
                </div>
              </div>
              <div className='profile-btn'>
                <span>
                  Member Since 2024
                </span>
                <Button className="btn btn-primary">Active Account</Button>
              </div>
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
                        </Row>
                        
                        <h5 className="section-title">Vehicle Information</h5>
                        <Row>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Make</Form.Label>
                            <Form.Select
                                name="make"
                            >
                                <option value="">Make</option>
                                <option value="valet">Valet Parking</option>
                                <option value="premium">Premium Parking</option>
                                <option value="longterm">Long Term Parking</option>
                            </Form.Select>
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                name="type"
                            >
                                <option value="">Type</option>
                                <option value="valet">Valet Parking</option>
                                <option value="premium">Premium Parking</option>
                                <option value="longterm">Long Term Parking</option>
                            </Form.Select>
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Color</Form.Label>
                            <Form.Select
                                name="color"
                            >
                                <option value="">Color</option>
                                <option value="valet">Valet Parking</option>
                                <option value="premium">Premium Parking</option>
                                <option value="longterm">Long Term Parking</option>
                            </Form.Select>
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>License Plate</Form.Label>
                            <Form.Control
                            type="text"
                            name="licensePlate"
                            placeholder="License Plate"
                            required
                            />
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                            <Form.Group className="custome-form-group">
                            <Form.Label>Province / State</Form.Label>
                            <Form.Select
                                name="provincestate"
                            >
                                <option value="">Province / State</option>
                                <option value="valet">Valet Parking</option>
                                <option value="premium">Premium Parking</option>
                                <option value="longterm">Long Term Parking</option>
                            </Form.Select>
                        </Form.Group>
                            </Col>
                            <Col md={6} lg={4}>
                             <Form.Group className="custome-form-group">
                            <Form.Label>Is this an electric vehicle?</Form.Label>
                            <Form.Select
                                name="elevehicle"
                            >
                                <option value="">Yes</option>
                                <option value="valet">No</option>
                            </Form.Select>
                        </Form.Group>
                            </Col>

                        </Row>

                        <div className="d-flex registration-btns">
                            <Button variant="primary" type="submit" className="me-3 primary-btn">
                                ADD VEHICLE
                            </Button>
                            <Link to="/login" className="btn btn-secondary secondary-btn">
                                REMOVE
                            </Link>
                        </div>

                    </Form>
                    <hr></hr>
                        <h5 className="section-title">Notification Settings</h5>
                        <div className="notificatin-text">
                        <p>Subscribe to the following communication options by selecting
                            the appropriate checkbox</p>
                            <h6>I would like to receive communication relating to my reservation:</h6>
                            <span>(Must select at least one option)</span>
                        <div className="d-flex checkbox-group">
                            <Form.Check
                                type="checkbox"
                                id="email"
                                label="Via Email"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="sms"
                                    label="Via SMS"    
                                />
                        </div>
                        <div className="d-flex registration-btns">
                            <Button variant="primary" type="submit" className=" primary-btn">
                                Update
                            </Button>
                            <Button variant="primary" type="submit" className=" tritory-btn">
                                Cancle
                            </Button>
                        </div>
                        </div>
                </div>
            </Col>
        </Row>
      </Container>
      
    </div>
  );
  
};

export default MyProfile;
