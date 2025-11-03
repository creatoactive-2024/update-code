import React, { useState } from "react";
import moment from "moment-timezone";
import { Button, Container, Row, Col, Carousel, Form, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import DatePicker from "react-datepicker";
import FAQ from "../../components/faq";
import Location from "../../img/location.svg";
import call from "../../img/call.svg";
import time from "../../img/time.svg";
import email from "../../img/envelope.svg";
import service1 from "../../img/srvc1.svg";
import service2 from "../../img/srvc2.svg";
import service3 from "../../img/srvc3.svg";
import service4 from "../../img/srvc4.svg";
import service5 from "../../img/srvc5.svg";
import service6 from "../../img/srvc6.svg";
import pro1 from '../../img/pro-1.jpg';
import pro2 from '../../img/pro-2.jpg';
import pro3 from '../../img/pro-3.jpg';
import achive from "../../img/achivement-img.jpg";
import hero1 from "../../img/hero1.svg";
import hero2 from "../../img/hero2.svg";
import hero3 from "../../img/hero3.svg";
import book1 from "../../img/bookf2.svg";
import book2 from "../../img/bookf1.svg";
import quote from '../../img/quote.svg';
import testi from '../../img/profile-testi.png';
import arri from '../../img/arrival.svg';
import dept from '../../img/departure.svg';
import sec1 from '../../img/sec1.svg';
import sec2 from '../../img/sec2.svg';
import sec3 from '../../img/sec3.svg';
import sec4 from '../../img/sec4.svg';
import pri1 from '../../img/pri1.svg';
import pri2 from '../../img/pri2.svg';
import pri3 from '../../img/pri3.svg';
import ret1 from '../../img/return1.svg';
import ret2 from '../../img/return2.svg';
import ret3 from '../../img/return3.svg';
import ret4 from '../../img/return4.svg';
import dept1 from '../../img/dept1.svg';
import dept2 from '../../img/dept2.svg';
import dept3 from '../../img/dept3.svg';
import dept4 from '../../img/dept4.svg';
import "react-datepicker/dist/react-datepicker.css";



const CANADA_TZ = "America/Toronto";

const getCanadaNow = () => {
  // Always get "now" in Canada time
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: CANADA_TZ })
  );
};

// Compare a date against Canada time
const isBeforeCanadaNow = (date) => {
  const now = getCanadaNow();
  return date < now;
};

// Generate the start of the day in local Canada time
const getStartOfCanadaDay = (date) => {
  const local = new Date(date.toLocaleString("en-US", { timeZone: CANADA_TZ }));
  local.setHours(0, 0, 0, 0);
  return local;
};

// Generate the end of the day in local Canada time
const getEndOfCanadaDay = (date) => {
  const local = new Date(date.toLocaleString("en-US", { timeZone: CANADA_TZ }));
  local.setHours(23, 45, 0, 0);
  return local;
};

interface ProPackages {
  id: number;
  title: string;
  desc: string;
  price: string;
  img: string;
}


const ProPackage: ProPackages[] = [
  {
    id: 1,
    title: "Car Wash",
    desc: "Interior and exterior detailing while you're away",
    price: "From $25",
    img: pro1,
  },
  {
    id: 2,
    title: "EV Charging",
    desc: "Keep your electric vehicle charged and ready",
    price: "From $15",
    img: pro2,
  },
  {
    id: 3,
    title: "Fuel Top-Up",
    desc: "Return to a full tank of gas",
    price: "At cost + $10",
    img: pro3,
  },
];

const services = [
  {
    img: service1,
    title: "Luggage Assistance",
    description:
      "Help with loading and unloading luggage, including fragile or heavy items.",
  },
  {
    img: service2,
    title: "Car Wash & Detailing",
    description:
      "Exterior wash or full detailing while you’re away. Quick interior cleaning available.",
  },
  {
    img: service3,
    title: "Fuel Top-Up",
    description:
      "Fill up the tank before returning your car. Options for full or minimum fuel levels.",
  },
  {
    img: service4,
    title: "EV Charging",
    description:
      "Electric vehicle charging available for EVs while parked at our facility.",
  },
  {
    img: service5,
    title: "Car Maintenance Checks",
    description:
      "Basic checks like tire pressure, oil level, and windshield washer fluid.",
  },
  {
    img: service6,
    title: "Premium Membership",
    description:
      "Frequent traveler perks with discounted rates, priority valet, and free add-ons.",
  },
];

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Business Traveler",
    feedback:
      "Absolutely seamless! Saved me 45 minutes compared to the usual parking shuttle. My car was spotless when I returned.",
    image: testi,
  },
  {
    name: "Michael Lee",
    role: "Corporate Executive",
    feedback:
      "Exceptional valet service! Fast, friendly, and super convenient. Highly recommend it for frequent travelers.",
    image: testi,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    feedback:
      "Loved the easy drop-off process. The staff was polite and my car was ready the moment I arrived!",
    image: testi,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    feedback:
      "Loved the easy drop-off process. The staff was polite and my car was ready the moment I arrived!",
    image: testi,
  },
];


const Home: React.FC = () => {
  const [airport, setAirport] = useState("Toronto");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("valet");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!airport || !startDate || !endDate) {
      alert("Please select airport, drop-off, and pick-up date/time.");
      return;
    }

    const bookingData = {
      airportName: airport,
      dropOffDateTime: startDate,
      pickUpDateTime: endDate,
    };

    console.log("Booking form data:", bookingData);

    // Redirect to register page with form data
    navigate("/pricing", { state: bookingData });
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

  return (
    <div className="home-page">
     


      <section className="hero-banner">
  <Container>
    <Row>
      <Col md={7}>
            <div className="hero-content">
              <h1>Welcome to <span>DropNPark</span></h1>
              <p>At DropNPark, we know that travel should begin with ease, not stress. That's why we've created an airport valet parking service that's as simple as it is reliable.</p>
              <p className="d-none d-md-block">From the moment you arrive at the terminal, our courteous valet greets you, takes your vehicle, and handles the rest — so you can head straight to your flight without a second thought.</p>
              <ul className="hero-list">
                <li><span><img src={hero1} alt="24/7 icon" /></span>24/7 Available</li>
                <li><span><img src={hero2} alt="secure" /></span>Secure Facility</li>
                <li><span><img src={hero3} alt="curbside" /></span>Curbside Service</li>
              </ul>
            </div>
          </Col>

      <Col md={5}>
        <div className="booking-form">
          <h4>Book Your Premium Valet Parking</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Airport Name *</Form.Label>
              <div className="form-box">
                <div className="icon"><img src={book1} alt="location" /></div>
                <Form.Select value={airport} onChange={(e) => setAirport(e.target.value)}>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Montreal">Montreal</option>
                </Form.Select>
              </div>
            </Form.Group>

            {/* Drop-Off */}
            <Form.Group>
              <Form.Label>Drop-Off Date & Time *</Form.Label>
              <div className="form-box">
                <div className="icon"><img src={book2} alt="calendar" /></div>
                <DatePicker
  selected={startDate}
  onChange={(date) => {
    if (isBeforeCanadaNow(date)) {
      alert("You cannot select a past date or time (Canada time).");
      return;
    }
    if (endDate && date > endDate) {
      setDateRange([date, null]);
    } else {
      setDateRange([date, endDate]);
    }
  }}
  showTimeSelect
  timeIntervals={15}
  dateFormat="MMM dd, yyyy hh:mm aa"
  placeholderText="Select drop-off date & time"
  className="react-datepicker-input"
  minDate={getCanadaNow()} // disables past dates
  minTime={
    startDate &&
    startDate.toDateString() === getCanadaNow().toDateString()
      ? getCanadaNow() // disables past times for today
      : getStartOfCanadaDay(startDate || getCanadaNow())
  }
  maxTime={getEndOfCanadaDay(startDate || getCanadaNow())}
/>

              </div>
            </Form.Group>

            {/* Pick-Up */}
            <Form.Group>
              <Form.Label>Pick-Up Date & Time *</Form.Label>
              <div className="form-box">
                <div className="icon"><img src={book2} alt="calendar" /></div>
                <DatePicker
  selected={endDate}
  onChange={(date) => {
    if (isBeforeCanadaNow(date)) {
      alert("You cannot select a past date or time (Canada time).");
      return;
    }
    if (startDate && date < startDate) {
      alert("Pick-Up time cannot be before Drop-Off time.");
      return;
    }
    setDateRange([startDate, date]);
  }}
  showTimeSelect
  timeIntervals={15}
  dateFormat="MMM dd, yyyy hh:mm aa"
  placeholderText="Select pick-up date & time"
  className="react-datepicker-input"
  minDate={startDate || getCanadaNow()}
  minTime={
    startDate &&
    endDate &&
    endDate.toDateString() === startDate.toDateString()
      ? startDate // disables earlier times on same date
      : getStartOfCanadaDay(endDate || getCanadaNow())
  }
  maxTime={getEndOfCanadaDay(endDate || getCanadaNow())}
/>

              </div>
            </Form.Group>

            <Button className="view-btn" type="submit">
              VIEW RATES
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
</section>

  <section className="how-it-works section-padding pb-0">
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>How It Works</h2>
              <p>Simple steps for a seamless airport parking experience</p>
            </div>
          
          <ButtonGroup className="tabs">
            <Button
              className={activeTab === "valet" ? "active" : ""}
              onClick={() => setActiveTab("valet")}
            >
              VALET LOUNGE
            </Button>
            <Button
              className={activeTab === "drive" ? "active" : ""}
              onClick={() => setActiveTab("drive")}
            >
              DRIVE AND DROP
            </Button>
          </ButtonGroup>
        </Col>
        </Row>
        {/* === Valet Lounge === */}
        {activeTab === "valet" && (
          <Row className="align-items-start">
            <Col md={6} className="departure text-md-end text-center">
              <div className="section-block secondary-block">
                
                <div className="tabs-title">
                      <img src={dept} alt="departure" />
                      <h4 className=""> Departure – Curbside</h4>
                      <p className="">Pickup</p>
                </div>
                <ul className="steps">
                  <li>
                     <div className="steps-wrap">
                        <span><img src={sec1} alt="book your spot" /></span>
                        <div className="step-text">
                          <h4>Book Your Spot</h4>
                          <p>Reserve online or call our customer service with your travel and vehicle details.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={sec2} alt="call" /></span>
                        <div className="step-text">
                          <h4>Call Before Arrival</h4>
                          <p>Contact us 15–20 minutes before reaching the airport so the valet is ready.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={sec3} alt="terminal" /></span>
                        <div className="step-text">
                          <h4>Terminal Pickup</h4>
                          <p>Drive to the terminal curb. Our valet meets you, helps unload luggage, and takes your keys.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={sec4} alt="secure" /></span>
                        <div className="step-text">
                          <h4>Secure Parking</h4>
                          <p>Your vehicle is safely driven to our secured, 24/7 monitored facility.</p>
                        </div>
                     </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="arrival text-md-start text-center">
              <div className="section-block primary-block">
                
                
                <div className="tabs-title">
                      <img src={arri} alt="departure" />
                      <h4 className="">Arrival – Curbside</h4>
                      <p className="">Drop-Off</p>
                </div>
                <ul className="steps">
                  <li>
                     <div className="steps-wrap">
                        <span><img src={pri1} alt="flight" /></span>
                        <div className="step-text">
                          <h4>Flight Tracking</h4>
                          <p>Call us to inform that you have landed. Our valet prepares your car for delivery.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={pri2} alt="terminal" /></span>
                        <div className="step-text">
                          <h4>Terminal Delivery</h4>
                          <p>The valet brings your car to the terminal curb and will wait at the designated terminal gate.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={pri3} alt="handover" /></span>
                        <div className="step-text">
                          <h4>Handover & Departure</h4>
                          <p>Collect your keys and luggage, then drive away — hassle-free and ready to continue your journey.</p>
                        </div>
                     </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        )}

        {/* === Drive and Drop === */}
        {activeTab === "drive" && (
          <Row className="align-items-start">
            <Col md={6} className="departure text-md-end text-center">
              <div className="section-block secondary-block">
                
                <div className="tabs-title">
                      <img src={dept} alt="departure" />
                      <h4 className="">Departure Process</h4>
                      <p className="">When you're leaving</p>
                </div>
                <ul className="steps">
                  <li>
                     <div className="steps-wrap">
                        <span><img src={dept1} alt="book your spot" /></span>
                        <div className="step-text">
                          <h4>Arrive at Our Valet Lounge</h4>
                          <p>Drive directly to the DropNPark valet lounge where our professional team is ready to welcome you.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={dept2} alt="call" /></span>
                        <div className="step-text">
                          <h4>Courteous Greeting</h4>
                          <p>Our team greets you warmly and assists with your luggage, making your arrival completely hassle-free.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={dept3} alt="terminal" /></span>
                        <div className="step-text">
                          <h4>Swift Check-In</h4>
                          <p>We complete your check-in swiftly, taking care of every detail so your journey begins effortlessly.</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={dept4} alt="secure" /></span>
                        <div className="step-text">
                          <h4>Personal Valet Drive</h4>
                          <p>Sit back and relax as your personal valet drives you directly to your departure terminal in the comfort of your own vehicle.</p>
                        </div>
                     </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="arrival text-md-start text-center">
              <div className="section-block primary-block">
                
                
                <div className="tabs-title">
                      <img src={arri} alt="departure" />
                      <h4 className="">Return Process</h4>
                      <p className="">When you come back</p>
                </div>
                <ul className="steps">
                  <li>
                     <div className="steps-wrap">
                        <span><img src={ret1} alt="call" /></span>
                        <div className="step-text">
                          <h4>Call Us</h4>
                          <p>Call or text us when you land</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={ret2} alt="prepare" /></span>
                        <div className="step-text">
                          <h4>We Prepare</h4>
                          <p>We retrieve and prepare your vehicle</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={ret3} alt="curbside" /></span>
                        <div className="step-text">
                          <h4>Curbside Pickup</h4>
                          <p>Your car is ready at the curb</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="steps-wrap">
                        <span><img src={ret4} alt="drive" /></span>
                        <div className="step-text">
                          <h4>Drive Home</h4>
                          <p>Get in and drive home immediately</p>
                        </div>
                     </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>

    <section className="pro-section section-padding">
      <Container className="">
        <Row className="">
          <Col md={6} className="position-relative overflow-hidden">
          <h1 className="pro-title">PRO</h1>
          </Col>
           <Col md={6}>
          <div className="text-center text-md-end right-text">
            <h2 className="">Maximize Your Mileage.</h2>
            <h4 className="">Minimize Your To-Do List.</h4>
            <p className="">Value-Added Services</p>
          </div>
          </Col>
        </Row>

        <div className="services-wrapper">
          {ProPackage.map((srv) => (
            <div className="service-card" key={srv.id}>
              <div className="card border-0 shadow-sm">
                <div className="pro-img">
                  <img src={srv.img} alt={srv.title} className="card-img-top" />
                  <h5 className="fw-bold">{srv.title}</h5>
                </div>
                <div className="card-body text-start">
                  <p className="text-descri">{srv.desc}</p>
                  <p className="fw-price">{srv.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    
    <section className='section-testi-achivment section-padding pb-0'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='testimonial-wrap'>
              <div className='heading-wrapper'>
                <h2>Luxurious carriage valet for <span>premium cars</span></h2>
                <p>DropNPark is recognized as an industry leader, delivering elite valet services whether you need them casually or continuously. Our professional chauffeurs maintain strict international standards and provide exceptional communication—ensuring a perfect experience every time you DropNPark.</p>
              </div>
              <div className='achive-img mob-achive-img d-block d-md-none'>
                <img src={achive} alt="achivment-image" />
              </div>
              <div className='testimonial-section'>
                <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          controls={false}
          indicators={false}
          slide={true}
          touch={true}
          className="testimonial-carousel"
        >
          {testimonials.map((t, i) => (
            <Carousel.Item key={i}>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={quote} alt="quote-icon"/>
                </div>
                <div className="stars">★★★★★</div>
                <p className="feedback">“{t.feedback}”</p>
                <div className="user-info">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
              </div>
            </div>
          </Col>
          <Col md={6} className="mobile-padding-achive">
            <div className='achivment-wrapp'>
              <div className='achive-img d-none d-md-block'>
                <img src={achive} alt="achivment-image" />
              </div>
              <div className='achivment-wrapper'>
                <Row>
              <div className='heading-wrapper'>
                <h3>Valet parking services You just found it!</h3>
              </div>
                </Row>
                <Row className="counter-row" ref={ref}>
                  <Col xs={4} className="counter-box">
                    <p className="counter-label">Work Have Done</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={1} duration={2.5} separator="," suffix="K" />}
                    </h3>
                  </Col>

                  <Col xs={4} className="counter-box">
                    <p className="counter-label">Award Winnings</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={11} duration={2.5} />}
                    </h3>
                  </Col>

                  <Col xs={4} className="counter-box">
                    <p className="counter-label">Happy Clients</p>
                    <h3 className="counter-value">
                      {inView && <CountUp end={1} duration={2.5} separator="," suffix="K" />}
                    </h3>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="services-section section-padding pb-0">
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Additional Services</h2>
            </div>
          </Col>
        </Row>
        <Row className="desktop-view">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className="service-card">
                <div className='service-card-info'>
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
                </div>
                <Button className="learn-more-btn">LEARN MORE</Button>
              </div>
            </Col>
          ))}
        </Row>

        <div className="mobile-slider">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className='service-card-info'>
                <div className="icon">
                  <img src={service.img} alt={service.title} />
                </div>
              <div className="content">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
              </div>
              <Button className="learn-more-btn">LEARN MORE</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
    <section className='faq-section section-padding'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about DropNPark</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='mx-auto text-center'>
          <FAQ/>
          <Button as={Link} to="/"  className="main-button section-button d-inline-block">
                            View All FAQ’s
                </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='cta-section'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Ready for Stress-Free Travel?</h2>
              <Button as={Link} to="/" className="main-button d-block section-button">
                            Book Your Spot Now
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='section-padding contact-section'>
      <Container>
        <Row>
          <Col className="text-center">
            <div className='heading-wrapper'>
              <h2>Find Us</h2>
              <p>Conveniently located at Toronto Pearson International Airport</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={7} className="">
            <div className='map-box h-100'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1761454435339!5m2!1sen!2sin" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
          <Col md={5} className="">
            <div className='Contact-details-wrapper'>
              <div className='contact-box'>
                <span>
                  <img src={Location} alt="Location Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Service Location</h4>
                  <p>180 Attwell Dr, Suite 160, Etobicoke, ON M9W 5Z5</p>
                </div>
              </div>

              <div className='contact-box'>
                <span>
                  <img src={call} alt="call Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Contact Details</h4>
                  <p>24/7 Customer Service</p>
                  <div className='phone-numbers'>
                    <a href="tel:+942-200-0043">
                      <span><img src={call} alt="call Icon" /></span>942-200-0043</a>
                    <a href="mailto:info@dropnpark.com">
                      <span><img src={email} alt="email Icon" /></span>info@dropnpark.com</a>
                  </div>
                </div>
              </div>

              <div className='contact-box'>
                <span>
                  <img src={time} alt="time Icon" />
                </span>
                <div className='contact-info'>
                  <h4>Operating Hours</h4>
                  <p>Open 24 hours a day<br></br>7 days a week<br></br>365 days a year</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      
    </div>
  );
};

export default Home;
