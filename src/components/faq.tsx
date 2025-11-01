import { Accordion, Button, Container } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  showAll?: boolean; // if true = show all FAQs, else show 4
}

const FAQSection: React.FC<FAQSectionProps> = ({ showAll = false }) => {
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
      question: "How can I make my reservation?",
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

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <div>
        <Accordion  className="faq-accordion mb-4">
          {displayedFaqs.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
  );
};

export default FAQSection;
