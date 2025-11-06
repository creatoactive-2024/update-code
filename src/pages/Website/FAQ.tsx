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
        "We provide airport valet parking, including curbside pickup, secure parking, luggage assistance, and convenient return delivery.",
    },
    {
      question: "What are your working hours?",
      answer:
        "Our services are available 24 hours a day, 7 days a week, ensuring you get the support you need whenever you need it.",
    },
    {
      question: "What should I bring on the day of my flightttt?",
      answer:
        "Please bring your vehicle keys and booking confirmation for a smooth handover.",
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
        "Reservations can be made easily online via our website or by calling our friendly customer service team.",
    },
    {
      question: "How can I confirm my reservation?",
      answer:
        "Once your booking is complete, you will receive a confirmation email or message for your reference.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, bookings can be modified or cancelled online or through our customer service, following our cancellation policy.",
    },
    {
      question: "For how many days can I make a booking?",
      answer:
        "Bookings can be made for any duration, whether short-term or long-term, according to your travel needs.",
    },
    
  ];

  const payment: FAQItem[] = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, debit, and credit cards to provide flexible payment options.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "Yes, all payments are processed securely through encrypted channels to ensure your information is safe.",
    },
    {
      question: "If my booking is cancelled, how can I get a refund?",
      answer:
        "Refunds are processed as per our cancellation policy, directly to the original payment method.",
    },
    {
      question: "Are there any additional fees I should be aware of?",
      answer:
        "No, all charges are transparent and included at the time of booking, with no hidden costs.",
    },
    {
      question: "Why am I charged for a full day if I stay just a few hours over my reservation?",
      answer: `At Drop N Park, we understand that travel plans don’t always go exactly as scheduled. That’s why we offer a 3-hour grace period after your scheduled return time—completely free of charge.<br /><br />
      If you exceed that 3-hour window, a flat late fee of $XX + tax will be applied. This fee covers the additional time your vehicle occupies our facility beyond your reserved period.<br /><br />
      Please note that Drop N Park does not offer hourly rates. Our pricing is based on a 24-hour daily rate structure, which is standard in airport parking services.`
    }
    
  ];


  const service: FAQItem[] = [
    {
      question: "Do you provide vehicle insurance while it is parked?",
      answer:
        "Yes, all vehicles are insured and stored securely in our monitored facility.",
    },
    {
      question: "What if I forget to inform DropNPark about my pickup or arrival?",
      answer:
        "Simply contact our customer service team immediately, and we will assist you promptly.",
    },
    {
      question: "What should I do if my flight is delayed?",
      answer:
        "Please inform us of any delays, and our valet team will adjust the pickup or delivery accordingly.",
    },
    
    
  ];

  const contact: FAQItem[] = [
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our team via phone or email, and we’ll be happy to assist you. (Phone No : +1 942-200-0043, Email Id: info@dropnpark.com)",
    },
    
    
  ];




  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);
  const reservatonFaqs = showAll ? reservations : reservations.slice(0, 4);
  const paymentFaqs = showAll ? payment : payment.slice(0, 5);
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
                  <Accordion.Body><p dangerouslySetInnerHTML={{ __html: item.answer }} /></Accordion.Body>
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