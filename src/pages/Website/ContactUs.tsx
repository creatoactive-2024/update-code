import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs: React.FC = () => (
  <div>
 <section className="inner-banner addon-banner mb-0">
                <Container>
                    <Row className="align-items-center text-center py-4">
                        <Col>
                            <h1 className="page-title"><span>Contact Us</span></h1>
                            

                        </Col>
                    </Row>
                </Container>
            </section>
    <section className='contactpage-section'>
       
                <Container>
                    <Row>
                        <div className='contact-text-wrap'>
                        <p className='contact-para-1'>Conveniently Located at Toronto Pearson</p>
                        <h5>Our valet lounge is strategically positioned for quick access to all terminals, ensuring your<br/> journey starts smoothly.</h5>
                        <div className='cont-wrap'>
                        <p><span className='contact-head'>Address:</span> <span className='contact-content'>Toronto Pearson International Airport</span></p>
                        <p><span className='contact-head'>Hours:</span> <span className='contact-content'>24/7 - Always Open</span></p>
                        <p><span className='contact-head'>Phone:</span> <span className='contact-content'><a href="tel:+919422000043">+1 (234) 567-890</a></span></p>
                        <p><span className='contact-head'>Email:</span> <span className='contact-content'><a href='mailto:info@dropnpark.com'>info@dropnpark.com</a></span></p>
                        </div>
                        <a role="button" className="main-button section-button btn btn-outline-primary">Get Direction</a>
                        </div>
                    </Row>
                </Container>
            </section>
            </div>
);

export default ContactUs;