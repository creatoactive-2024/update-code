import React from 'react';
import { Col, Container, Row, Accordion, Button } from 'react-bootstrap';
import faq1 from '../../img/faq-icn-1.svg'
import faq2 from '../../img/faq-icn-2.svg'
import faq3 from '../../img/faq-icn-3.svg'
import faq4 from '../../img/faq-icn-4.svg'
import faq5 from '../../img/faq-icn-5.svg'

import FAQ from '../../components/faq'

interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSectionProps {
  showAll?: boolean; // if true = show all FAQs, else show 4
}

const FAQpage: React.FC<FAQSectionProps> = ({ showAll = false }) => {
  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "We offer valet parking, airport transfers, and premium add-on services like car wash and assistance.",
    },
    {
      question: "What are your working hours?",
      answer:
        "We operate 24/7 for your convenience. You can book, drop off, or pick up your car anytime.",
    },
    {
      question: "What should I bring on the day of my flightttt?",
      answer:
        "Simply visit our website, choose your airport, select a date and time, and confirm your booking online.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, you can easily modify or cancel your booking from your account dashboard before your scheduled time.",
    },
    {
      question: "Is my vehicle insured while parked?",
      answer:
        "Yes, all parked vehicles are insured under our valet protection policy for your peace of mind.",
    },
    {
      question: "Do you offer corporate parking plans?",
      answer:
        "We offer special packages for businesses and travel agencies. Contact our support team to learn more.",
    },
  ];

  const reservations: FAQItem[] = [
    {
      question: "How can I make my reservation?",
      answer:
        "We offer valet parking, airport transfers, and premium add-on services like car wash and assistance.",
    },
    {
      question: "How can I confirm my reservation?",
      answer:
        "We operate 24/7 for your convenience. You can book, drop off, or pick up your car anytime.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Simply visit our website, choose your airport, select a date and time, and confirm your booking online.",
    },
    {
      question: "For how many days can I make a booking?",
      answer:
        "Yes, you can easily modify or cancel your booking from your account dashboard before your scheduled time.",
    },
    
  ];

  const payment: FAQItem[] = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We offer valet parking, airport transfers, and premium add-on services like car wash and assistance.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "We operate 24/7 for your convenience. You can book, drop off, or pick up your car anytime.",
    },
    {
      question: "If my booking is cancelled, how can I get a refund?",
      answer:
        "Simply visit our website, choose your airport, select a date and time, and confirm your booking online.",
    },
    {
      question: "Are there any additional fees I should be aware of?",
      answer:
        "Yes, you can easily modify or cancel your booking from your account dashboard before your scheduled time.",
    },
    {
      question: "Why am I charged for a full day if I stay just a few hours over my reservation?",
      answer:
        "Yes, you can easily modify or cancel your booking from your account dashboard before your scheduled time.",
    },
    
  ];


  const service: FAQItem[] = [
    {
      question: "Do you provide vehicle insurance while it is parked?",
      answer:
        "We offer valet parking, airport transfers, and premium add-on services like car wash and assistance.",
    },
    {
      question: "What if I forget to inform DropNPark about my pickup or arrival?",
      answer:
        "We operate 24/7 for your convenience. You can book, drop off, or pick up your car anytime.",
    },
    {
      question: "What should I do if my flight is delayed?",
      answer:
        "Simply visit our website, choose your airport, select a date and time, and confirm your booking online.",
    },
    
    
  ];

  const contact: FAQItem[] = [
    {
      question: "How can I contact customer service?",
      answer:
        "We offer valet parking, airport transfers, and premium add-on services like car wash and assistance.",
    },
    
    
  ];




  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);
  const reservatonFaqs = showAll ? reservations : reservations.slice(0, 4);
  const paymentFaqs = showAll ? payment : payment.slice(0, 4);
  const serviceFaqs = showAll ? service : service.slice(0, 3);
  const contactFaqs = showAll ? contact : contact.slice(0);

  return (
    <div className="faq-page">
      <section className="inner-banner">
              <Container>
                <Row className="align-items-center text-center">
                  <Col>
                    <h1 className="page-title">
                      <span>Frequently Asked Questions</span>
                    </h1>
                    <p className='page-discription'>Find answers to all your questions about DropNPark</p>
                  </Col>
                </Row>
              </Container>
      </section>

      <section className='inner-faq-section'>
        <Container>
          <div className='faq-inner'>
            <div className='heading-wrap-faq'>
              <div className='icon-wrap'><img src={faq1} /></div>
              <div className='text-wrap'>
                <h2>General Information</h2>
                <p>Learn about our services and operations</p>
              </div>

            </div>

            <Accordion className="faq-accordion mb-4">
              {displayedFaqs.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body><p>{item.answer}</p></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className='heading-wrap-faq'>
              <div className='icon-wrap'><img src={faq2} /></div>
              <div className='text-wrap'>
                <h2>Booking & Reservations</h2>
                <p>Everything about making and managing bookings</p>
              </div>

            </div>
            <Accordion className="faq-accordion mb-4">
              {reservatonFaqs.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body><p>{item.answer}</p></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className='heading-wrap-faq'>
              <div className='icon-wrap'><img src={faq3} /></div>
              <div className='text-wrap'>
                <h2>Payment & Pricing</h2>
                <p>Transparent pricing and payment options</p>
              </div>

            </div>
            <Accordion className="faq-accordion mb-4">
              {paymentFaqs.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body><p>{item.answer}</p></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className='heading-wrap-faq'>
              <div className='icon-wrap'><img src={faq4} /></div>
              <div className='text-wrap'>
                <h2>Service & Security</h2>
                <p>Your safety and satisfaction is our priority</p>
              </div>

            </div>
            <Accordion className="faq-accordion mb-4">
              {serviceFaqs.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body><p>{item.answer}</p></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className='heading-wrap-faq'>
              <div className='icon-wrap'><img src={faq5} /></div>
              <div className='text-wrap'>
                <h2>Contact & Support</h2>
                <p>We're here to help you anytime</p>
              </div>

            </div>
            <Accordion className="faq-accordion mb-4">
              {contactFaqs.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body><p>{item.answer}</p></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </div>);
}

export default FAQpage;