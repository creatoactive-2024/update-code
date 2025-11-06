import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Location from "../img/location.svg";
import call from "../img/call.svg";
import time from "../img/time.svg";
import email from "../img/envelope.svg";

const FindUs: React.FC = () => {
  return (
    <section className="section-padding contact-section">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="heading-wrapper">
              <h2>Find Us</h2>
              <p>Conveniently located at Toronto Pearson International Airport</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={7}>
            <div className="map-box h-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.0306831117014!2d-79.5881671!3d43.689125499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39a412e6c9ab%3A0x25d1087995473554!2sDrop%20N%20Park!5e0!3m2!1sen!2sin!4v1762338407137!5m2!1sen!2sin" width="100%"
                height="100%"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>

          <Col md={5}>
            <div className="Contact-details-wrapper">
              {/* Location */}
              <div className="contact-box">
                <span>
                  <img src={Location} alt="Location Icon" />
                </span>
                <div className="contact-info">
                  <h4>Service Location</h4>
                  <a href="https://share.google/01diBFGmSHA38sQeE" target='_blank' className="text-white">180 Attwell Dr, Etobicoke, ON M9W 5Z5</a>
                </div>
              </div>

              {/* Contact */}
              <div className="contact-box">
                <span>
                  <img src={call} alt="Call Icon" />
                </span>
                <div className="contact-info">
                  <h4>Contact Details</h4>
                  <p>24/7 Customer Service</p>
                  <div className="phone-numbers">
                    <a href="tel:+19422000043">
                      <span>
                        <img src={call} alt="Call Icon" />
                      </span>
                      +1 942-200-0043
                    </a>
                    <a href="mailto:info@dropnpark.com">
                      <span>
                        <img src={email} alt="Email Icon" />
                      </span>
                      info@dropnpark.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-box">
                <span>
                  <img src={time} alt="Time Icon" />
                </span>
                <div className="contact-info">
                  <h4>Operating Hours</h4>
                  <p>
                    Open 24 hours a day
                    <br />7 days a week
                    <br />365 days a year
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FindUs;
