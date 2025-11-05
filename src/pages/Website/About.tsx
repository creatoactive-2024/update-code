import React from 'react';
import { Col, Container, Row, Accordion, Button } from 'react-bootstrap';
import AboutU from '../../img/about-upper-img.svg';
import Team from '../../img/team.jpg';
import jOne from '../../img/joruney-1.svg';
import jTwo from '../../img/journey-3.svg';
import jThr from '../../img/journey-3.svg';

import Val1 from '../../img/value-1.svg';
import Val2 from '../../img/value-2.svg';
import Val3 from '../../img/value-3.svg';
import Val4 from '../../img/value-4.svg';
import Check1 from '../../img/check-team-icn.svg';


const About: React.FC = () =>  {


    return (
        <div className="ab-page">
            <section className="inner-banner addon-banner">
                <Container>
                    <Row className="align-items-center text-center">
                        <Col>
                            <h1 className="page-title"><span>About DropNPark</span></h1>
                             <p className='page-discription'>Transforming airport parking from a hassle into a seamless part of your journey</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='inner-about-section'>
                <Container>
                    <Row className="align-items-center">
                        <div className='col-md-6 col-lg-6 upper-para'>
                            <p>Every Journey Has a Beginning and an End</p>
                            <h2>And at DropNPark, we believe both should be effortless.</h2>
                            <p>Imagine arriving at Toronto Pearson Airport, greeted by a professional valet who takes care of your luggage, checks in your car, and drives you straight to your terminal — no shuttles, no waiting, no stress.</p>

                            <p>While you travel, your vehicle rests safely in our secure, monitored lot, waiting for you exactly as you left it.</p>

                            <p>When you return, one quick call ensures your car is ready curbside, and in moments, you're back on the road — comfortable, relaxed, and free from the usual airport parking headaches.</p>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <div className='about-img'>
                                <img src={AboutU} alt='about img' />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className='about-mission'>
                <Container>
                    <div className='mission'>
                        <h2>Our Mission</h2>
                        <p>Founded for travelers who value time, safety, and peace of mind, DropNPark transforms the way you experience airport parking. It's not just about parking; it's about making your journey smoother, smarter, and more enjoyable from start to finish.</p>
                    </div>
                </Container>
            </section>
            <section className='our-joruney'>
                <Container>
                    <div className="heading-wrapper">
                        <h2>Our Journey</h2>
                        <p>Building the future of airport parking</p>
                    </div>
          
               
                    <Row className='for-psudo'>
                        <div className='col-lg-4 col-md-4'>
                            <div className='jour-blocks'>
                                <span>2024</span>
                            <img src={jOne} alt=''/>
                            <h3>Founded for Travelers</h3>
                            <p>Created specifically for busy travelers who value their time</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <div className='jour-blocks'>
                                <span>2025</span>
                            <img src={jTwo} alt=''/>
                            <h3>Mission-Driven</h3>
                            <p>Transforming airport parking into a<br/> seamless experience</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4'>
                            <div className='jour-blocks'>
                                <span>2025-26</span>
                            <img src={jThr} alt=''/>
                            <h3>Security-First</h3>
                            <p>Built with safety and reliability at the<br/> core</p>
                            </div>
                        </div>
                    </Row>
               
                </Container>
            </section>
            <section className='our-values'>
                <Container>
                    <div className="heading-wrapper">
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <Row>
                        <div className='col-md-3 col-lg-3'>
                            <div className='inner-values-blocks'>
                                <div className='values-icn'><img src={Val1}/></div>
                                <h3>Customer First</h3>
                                <p className='upper-line'>Every decision we make is centered around making your experience better</p>
                                <h4>98%</h4>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='inner-values-blocks'>
                                <div className='values-icn'><img src={Val2}/></div>
                                <h3>Safety & Security</h3>
                                <p className='upper-line'>Your vehicle and peace of mind are our top priorities</p>
                                <h4>24/7</h4>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='inner-values-blocks'>
                                <div className='values-icn'><img src={Val3}/></div>
                                <h3>Excellence</h3>
                                <p className='upper-line'>We maintain the highest standards in every aspect of our service</p>
                                <h4>4.9/5</h4>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='inner-values-blocks'>
                                <div className='values-icn'><img src={Val4}/></div>
                                <h3>Professional Team</h3>
                                <p className='upper-line'>Trained, courteous staff dedicated to serving you</p>
                                <h4>50+</h4>
                                <p>Customer satisfaction</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className='prof-team'>
                <Container>
                    <Row className='align-items-center'>
                        <div className='col-lg-6 col-md-6'>
                                <div className='team-img'>
                                <img src={Team} alt='about img' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <p className='upper-team-line'>Meet Our Professional Team</p>
                            <h4>Our team is the heart of DropNPark. Every member is carefully selected, extensively trained, and passionate about delivering exceptional service.</h4>
                            <ul>
                                <li>
                                    <div className='list-icon-wrap'><img src={Check1}/></div>
                                    <div className='list-text-wrap'>
                                    <h5>Professional Training</h5>
                                    <p>All staff undergo rigorous training programs</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='list-icon-wrap'><img src={Check1}/></div>
                                    <div className='list-text-wrap'>
                                    <h5>Background Checked</h5>
                                    <p>Comprehensive screening for your peace of mind</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='list-icon-wrap'><img src={Check1}/></div>
                                    <div className='list-text-wrap'>
                                    <h5>Customer Focused</h5>
                                    <p>Dedicated to exceeding your expectations</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='list-icon-wrap'><img src={Check1}/></div>
                                    <div className='list-text-wrap'>
                                    <h5>Always Available</h5>
                                    <p>24/7 support when you need us</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
                        <p><span className='contact-head'>Address:</span> <span className='contact-content'>180 Attwell Dr, Suite 160, Etobicoke, ON M9W 5Z5</span></p>
                        <p><span className='contact-head'>Hours:</span> <span className='contact-content'>24/7 - Always Open</span></p>
                        <p><span className='contact-head'>Phone:</span> <span className='contact-content'><a href="tel:+19422000043">+1 942-200-0043</a></span></p>
                        <p><span className='contact-head'>Email:</span> <span className='contact-content'><a href='mailto:info@dropnpark.com'>info@dropnpark.com</a></span></p>
                        </div>
                        <a role="button" href="https://share.google/01diBFGmSHA38sQeE" target='_blank' className="main-button section-button btn btn-outline-primary">Get Direction</a>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>);
}

export default About;