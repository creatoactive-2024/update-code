// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
// import oil from "../../img/oil-change.svg";
// import fuel from "../../img/fuel.svg";
// import ev from "../../img/ev-recharge.svg";
// import car from "../../img/car-wash.svg";
// import amenities1 from "../../img/amen-1.svg";
// import amenities2 from "../../img/amen-2.svg";
// import amenities3 from "../../img/amen-3.svg";
// import amenities4 from "../../img/amen-4.svg";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";


// interface Service {
//   id: number;
//   title: string;
//   desc: string;
//   price: number;
//   img: string;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: "Car Wash & Detailing",
//     desc: "Deep cleaning with ceramic coating protection",
//     price: 33.74,
//     img: car,
//   },
//   {
//     id: 2,
//     title: "Oil Change & Maintenance",
//     desc: "Pre-schedule a routine oil change",
//     price: 45,
//     img: oil,
//   },
//   {
//     id: 3,
//     title: "EV Charging",
//     desc: "We guarantee a full charge upon your return",
//     price: 82.54,
//     img: ev,
//   },
//   {
//     id: 4,
//     title: "Fuel Fill-Up",
//     desc: "We’ll top off your tank just before your return",
//     price: 65.47,
//     img: fuel,
//   },
// ];

// const AddonServices: React.FC = () => {
//   const location = useLocation();
//   const bookingDetails = location.state;

//   console.log("Received booking data:", bookingDetails);
  
//   const [selected, setSelected] = useState<Service[]>([]);
//   const basePrice = 110.4;
// const navigate = useNavigate();

//   const toggleService = (service: Service) => {
//     if (selected.find((s) => s.id === service.id)) {
//       setSelected(selected.filter((s) => s.id !== service.id));
//     } else {
//       setSelected([...selected, service]);
//     }
//   };


//   const handleBookNow = () => {
//   const bookingSummary = {
//     basePrice,
//     selectedAddons: selected,
//     subtotal,
//     tax,
//     total,
//   };

//   console.log("Booking Summary:", bookingSummary);

//   // Navigate to registration page with booking data
//   navigate("/registration", { state: bookingSummary });
// };

//   const subtotal = basePrice + selected.reduce((sum, s) => sum + s.price, 0);
//   const tax = subtotal * 0.08;
//   const total = subtotal + tax;
//   return (
//     <div className="addon-service">
//       {/* Inner banner */}
//       <section className="inner-banner addon-banner">
//         <Container>
          
//           <Row className="align-items-center text-center">
//             <Col>
//               <h1 className="page-title">Maximize Your Travel Time<br></br><span>Premium Vehicle Care</span> While You Travel</h1>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <section>
//         <Container>
//           <Row>
//             <Col>
//             <nav className="custom-breadcrumb">
//               <span className="breadcrumb-item">View Rates</span>
//               <span className="breadcrumb-separator">{">"}</span>
//               <span className="breadcrumb-item">Parking Options</span>
//               <span className="breadcrumb-separator">{">"}</span>
//               <span className="breadcrumb-item active">Add-On</span>
//             </nav>
//             </Col>
//           </Row>
//           <Row>
//             <Col className=''>
//              <div className='heading-wrapper text-center'>
//                 <h2>Add-On Services</h2>
//                 <p>Turn your travel time into vehicle care time. Our Add-On Services allow you to return to a vehicle that is fully maintained, immaculately clean, and ready for the road. Simply select a service when you book, and we'll handle the rest while you're away.</p>
//               </div>
//             </Col>
//           </Row>

//           <Row>
//         {/* Left Column: Services */}
//         <Col lg={8}>
//           {services.map((service) => (
//             <Card key={service.id} className="service-card mb-3">
//               <Card.Body className="d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="service-icon">
//                     <img src={service.img} alt={service.title} />
//                   </div>
//                   <div>
//                     <h5>{service.title}</h5>
//                     <p>{service.desc}</p>
//                     <h6>${service.price.toFixed(2)}</h6>
//                   </div>
//                 </div>
//                 <Button
//                   className={`add-btn ${
//                     selected.find((s) => s.id === service.id) ? "active" : ""
//                   }`}
//                   onClick={() => toggleService(service)}
//                 >
//                   {" "}
//                   {selected.find((s) => s.id === service.id)
//                     ? "ADDED"
//                     : "+ ADD SERVICE"}
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </Col>

//         {/* Right Column: Order Summary */}
//         <Col lg={4}>
//           <div className="order-summary p-4">
//             <h5>Order Summary</h5>
//             <div className="summary-item">
//               <p>{bookingDetails?.selectedService}</p>
//               <span>${bookingDetails?.totalPrice}</span>
//             </div>
//             <h3 className="">Add-on Services</h3>
//             <hr />
            
//             {selected.length === 0 ? (
//               <div className="empty-box">No Add-ons Selected</div>
//             ) : (
//               selected.map((s) => (
//                 <div key={s.id} className="summary-item-sub">
//                   <p>{s.title}</p>
//                   <span>${s.price.toFixed(2)}</span>
//                 </div>
//               ))
//             )}
//             <hr />
//             <div className="summary-item-sub">
//               <p>Subtotal</p>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="summary-item-sub">
//               <p>Tax (8%)</p>
//               <span>${tax.toFixed(2)}</span>
//             </div>
//             <hr />
//             <div className="summary-total">
//               <p>Total</p>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <Button className="book-btn w-100 mt-3" onClick={handleBookNow}>BOOK SERVICE</Button>
//           </div>
//         </Col>
//       </Row>
//         </Container>
//       </section>
//       <section className="section-padding amenities-wrapp">
//         <Container>
//           <Row>
//             <div className='heading-wrapper text-center'>
//                 <h2>Parking Amenities</h2>
//             </div>
//           </Row>
//           <Row>
//             <Col sm={6} md={3}>
//               <div className="amenities-box">
//                 <img src={amenities1} title="park" />
//                 <h4>Open Air & Covered Parking</h4>
//               </div>
//             </Col>
//             <Col sm={6} md={3}>
//               <div className="amenities-box">
//                 <img src={amenities2} title="hours" />
//                 <h4>Parking Open 24 Hours</h4>
//               </div>
//             </Col>
//             <Col sm={6} md={3}>
//               <div className="amenities-box">
//                 <img src={amenities3} title="reservation" />
//                 <h4>Guaranteed Reservations</h4>
//               </div>
//             </Col>
//             <Col sm={6} md={3}>
//               <div className="amenities-box">
//                 <img src={amenities4} title="evcharge" />
//                 <h4>Electric Vehicle Charging</h4>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>

//   );
// };

// export default AddonServices;





import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import oil from "../../img/oil-change.svg";
import fuel from "../../img/fuel.svg";
import ev from "../../img/ev-recharge.svg";
import car from "../../img/car-wash.svg";
import amenities1 from "../../img/amen-1.svg";
import amenities2 from "../../img/amen-2.svg";
import amenities3 from "../../img/amen-3.svg";
import amenities4 from "../../img/amen-4.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface Service {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Car Wash & Detailing",
    desc: "Deep cleaning with ceramic coating protection",
    price: 33.74,
    img: car,
  },
  {
    id: 2,
    name: "Oil Change & Maintenance",
    desc: "Pre-schedule a routine oil change",
    price: 45.0,
    img: oil,
  },
  {
    id: 3,
    name: "EV Charging",
    desc: "We guarantee a full charge upon your return",
    price: 82.54,
    img: ev,
  },
  {
    id: 4,
    name: "Fuel Fill-Up",
    desc: "We’ll top off your tank just before your return",
    price: 65.47,
    img: fuel,
  },
];

const AddonServices: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  const [selected, setSelected] = useState<Service[]>([]);

  const [isExistingUser, setIsExistingUser] = useState(false);

  // ✅ use base price dynamically from previous page (Valet / Drive N Drop)
  const basePrice = bookingDetails?.totalPrice ? Number(bookingDetails.totalPrice) : 0;

  // ✅ handle selecting / deselecting add-on
  const toggleService = (service: Service) => {
    setSelected((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  // ✅ calculate subtotal, tax, total dynamically
  const addonsTotal = selected.reduce((sum, s) => sum + s.price, 0);
  const subtotal = basePrice + addonsTotal;
  const tax = subtotal * 0.13; // 13% tax
  const total = subtotal + tax;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        console.log(parsed);
        setIsExistingUser(true);
      } catch (err) {
        console.error("Error parsing stored user:", err);
      }
    }
  }, []);

  // ✅ booking summary for next page
  const handleBookNow = () => {
    const bookingSummary = {
      ...bookingDetails,
      selectedAddons: selected,
      basePrice,
      addonsTotal,
      subtotal,
      tax,
      total,
    };

    console.log("Booking Summary:", bookingSummary);

    // navigate("/registration", { state: bookingSummary });
    // if (isExistingUser) {
      navigate("/registration", { state: bookingSummary });
    // } else {
    //   navigate("/signin", { state: bookingSummary });
    // }
    
  };

  return (
    <div className="addon-service">
      {/* Inner banner */}
      <section className="inner-banner addon-banner">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1 className="page-title">
                Maximize Your Travel Time
                <br />
                <span>Premium Vehicle Care</span> While You Travel
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <nav className="custom-breadcrumb">
                <span className="breadcrumb-item">View Rates</span>
                <span className="breadcrumb-separator">{">"}</span>
                <span className="breadcrumb-item">Parking Options</span>
                <span className="breadcrumb-separator">{">"}</span>
                <span className="breadcrumb-item active">Add-On</span>
              </nav>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="heading-wrapper text-center">
                <h2>Add-On Services</h2>
                <p>
                  Turn your travel time into vehicle care time. Our Add-On Services allow you to return to a vehicle that is fully maintained, immaculately clean, and ready for the road. Simply select a service when you book, and we'll handle the rest while you're away.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* Left Column: Services */}
            <Col lg={8}>
              {services.map((service) => (
                <Card key={service.id} className="service-card mb-3">
                  <Card.Body className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="service-icon">
                        <img src={service.img} alt={service.name} />
                      </div>
                      <div>
                        <h5>{service.name}</h5>
                        <p>{service.desc}</p>
                        <h6>${service.price.toFixed(2)}</h6>
                      </div>
                    </div>
                    <Button
                      className={`add-btn ${
                        selected.find((s) => s.id === service.id)
                          ? "active"
                          : ""
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      {selected.find((s) => s.id === service.id)
                        ? "REMOVE"
                        : "+ ADD SERVICE"}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
              {/* <Card className="service-card mb-3">
                <div className="d-md-flex coupon-card w-100 px-3 py-4 gap-4">
                    <Form.Group className="custome-form-group">
                       <Form.Control
                       type="text"
                       placeholder="Enter coupon code"
                       required
                       />
                   </Form.Group>
                   <div className="d-flex registration-btns w-100">
                     <Button variant="primary" type="submit" className="me-3 primary-btn">
                         Redeem
                     </Button>
                     <Link to="" className="btn btn-secondary secondary-btn">
                         Cancel
                     </Link>
                 </div>
                </div>
              </Card> */}
            </Col>

            {/* Right Column: Order Summary */}
            <Col lg={4}>
              <div className="order-summary p-4">
                <h5>Order Summary</h5>
{/* Main summary item */}
<div className="summary-item">
  <p>{bookingDetails?.selectedService || "Selected Service"}</p>
  <span>
    $
    {bookingDetails?.selectedService?.toLowerCase().includes("valet")
      ? (basePrice - 30).toFixed(2)
      : basePrice.toFixed(2)}
  </span>
</div>

{/* Show valet fixed charge line if applicable */}
{bookingDetails?.selectedService?.toLowerCase().includes("valet") && (
  <div className="summary-item" style={{ marginTop: "4px" }}>
    <p style={{ color: "gray" }}>Fixed valet charge</p>
    <span style={{ color: "gray" }}>$30.00</span>
  </div>
)}



                <h3>Add-on Services</h3>
                <hr />

                {selected.length === 0 ? (
                  <div className="empty-box">No Add-ons Selected</div>
                ) : (
                  selected.map((s) => (
                    <div key={s.id} className="summary-item-sub">
                      <p>{s.name}</p>
                      <span>${s.price.toFixed(2)}</span>
                    </div>
                  ))
                )}

                <hr />
                <div className="summary-item-sub">
                  <p>Subtotal</p>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item-sub">
                  <p>Tax (13%)</p>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="summary-total">
                  <p>Total</p>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Button
                  className="book-btn w-100 mt-3"
                  onClick={handleBookNow}
                >
                  BOOK SERVICE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Amenities section - unchanged */}
      <section className="section-padding amenities-wrapp">
        <Container>
          <Row>
            <div className="heading-wrapper text-center">
              <h2>Parking Amenities</h2>
            </div>
          </Row>
          <div className="aminities-box-wrap">
            
              <div className="amenities-box">
                <img src={amenities1} title="park" />
                <h4>Open Air & Covered Parking</h4>
              </div>
            
              <div className="amenities-box">
                <img src={amenities2} title="hours" />
                <h4>Parking Open 24 Hours</h4>
              </div>
            
              <div className="amenities-box">
                <img src={amenities3} title="reservation" />
                <h4>Guaranteed Reservations</h4>
              </div>
           
              <div className="amenities-box">
                <img src={amenities4} title="evcharge" />
                <h4>Electric Vehicle Charging</h4>
              </div>
            </div>
        </Container>
      </section>
    </div>
  );
};

export default AddonServices;
