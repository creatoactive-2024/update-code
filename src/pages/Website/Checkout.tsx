import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import oil from "../../img/oil-change.svg";
import fuel from "../../img/fuel.svg";
import ev from "../../img/ev-recharge.svg";
import car from "../../img/car-wash.svg";
import amenities1 from "../../img/amen-1.svg";
import amenities2 from "../../img/amen-2.svg";
import amenities3 from "../../img/amen-3.svg";
import amenities4 from "../../img/amen-4.svg";

import baseURL from "../utils/baseURL"

interface Service {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Car Wash & Detailing",
    desc: "Deep cleaning with ceramic coating protection",
    price: 33.74,
    img: car,
  },
  {
    id: 2,
    title: "Oil Change & Maintenance",
    desc: "Pre-schedule a routine oil change",
    price: 45.0,
    img: oil,
  },
  {
    id: 3,
    title: "EV Charging",
    desc: "We guarantee a full charge upon your return",
    price: 82.54,
    img: ev,
  },
  {
    id: 4,
    title: "Fuel Fill-Up",
    desc: "We’ll top off your tank just before your return",
    price: 65.47,
    img: fuel,
  },
];

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, bookingData, formData } = location.state || {};

  console.log("✅ Checkout received data:");
  console.log("User Data:", userData);
  console.log("Booking Data:", bookingData);
  console.log("Form Data:", formData);

  const [selected, setSelected] = useState<Service[]>(
    bookingData?.selectedAddons || []
  );

  // ✅ Base price from previous step
  const basePrice = Number(bookingData?.totalPrice) || 0;

  // ✅ Calculate valet adjustment
  const isValet = bookingData?.selectedService?.toLowerCase().includes("valet");
  const adjustedBasePrice = isValet ? basePrice - 10 : basePrice;

  // ✅ Add-on totals
  const addonsTotal = selected.reduce((sum, s) => sum + s.price, 0);
  const subtotal = adjustedBasePrice + addonsTotal + (isValet ? 10 : 0); // valet fixed charge adds back $10
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  // ✅ Toggle service selection
  const toggleService = (service: Service) => {
    setSelected((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  // ✅ Handle booking
//  const handleBookNow = async () => {
//   try {
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     const userId = storedUser?._id || storedUser?.id;

//     if (!userId) {
//       alert("User not logged in. Please login first.");
//       return;
//     }

//     // 💳 Step 1: Start Stripe Checkout session first
//     const stripeResponse = await fetch("http://localhost:5009/api/users/paymentt", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         amount: Number(total.toFixed(2)), // ✅ send total amount to backend
//       }),
//     });

//     const stripeData = await stripeResponse.json();

//     if (stripeData?.url) {
//       // 💾 Store booking data in localStorage temporarily
//       const bookingSummary = {
//         id: userId,
//         role: "customer",
//         vehicle: {
//           make: formData?.make || "",
//           type: formData?.type || "",
//           color: formData?.color || "",
//           licensePlate: formData?.licensePlate || "",
//           provinceOrState: formData?.provinceOrState || "",
//           isElectric: formData?.isElectric || false,
//         },
//         airportName: bookingData?.airportName,
//         dropOffDateTime: bookingData?.dropOffDateTime,
//         pickUpDateTime: bookingData?.pickUpDateTime,
//         parkingService: {
//           name: bookingData?.selectedService || "Standard Parking",
//           price: adjustedBasePrice,
//         },
//         addons: selected.map((a) => ({
//           name: a.title,
//           price: a.price,
//         })),
//         totalAmount: Number(total.toFixed(2)),
//         paymentMethod: "Stripe",
//         paymentStatus: "pending",
//         bookingStatus: "initiated",
//         noOfDays: bookingData?.days || 1,
//       };

//       localStorage.setItem("pendingBooking", JSON.stringify(bookingSummary));

//       // ✅ Redirect to Stripe checkout
//       window.location.href = stripeData.url;
//     } else {
//       alert(stripeData?.error || "Error creating Stripe checkout session");
//     }
//   } catch (error) {
//     console.error("❌ Stripe checkout error:", error);
//     alert("Something went wrong while starting payment. Please try again.");
//   }
// };

const handleBookNow = async () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    // ✅ Try user ID from localStorage first, then from formData
    const userId =
      storedUser?._id ||
      storedUser?.id ||
      formData?.id ||
      formData?.userId ||
      null;

    // (keeping your original commented check untouched)
    // if (!userId) {
    //   alert("User not logged in.");
    //   return;
    // }

    const bookingSummary = {
      ...formData,
      ...bookingData,
      totalAmount: total, // ✅ exact total
      email: storedUser?.email || formData?.email || "", // ✅ ADD THIS LINE
    };

    const response = await fetch(`${baseURL}/api/users/create-booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, bookingSummary }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // ✅ Redirect to Stripe Checkout
    } else {
      alert("Failed to start payment");
    }
  } catch (err) {
    console.error("Payment error:", err);
    alert("Something went wrong.");
  }
};


  return (
    <div className="addon-service">
      {/* Inner Banner */}
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

      {/* Add-on Services Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <nav className="custom-breadcrumb">
                <span className="breadcrumb-item">View Rates</span>
                <span className="breadcrumb-separator">{">"}</span>
                <span className="breadcrumb-item">Parking Options</span>
                <span className="breadcrumb-separator">{">"}</span>
                <span className="breadcrumb-item active">Check Out</span>
              </nav>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="heading-wrapper text-center">
                <h2>Checkout Now</h2>
                <p>
                  Turn your travel time into vehicle care time. Our Add-On Services allow you to return to a vehicle that is fully maintained, immaculately clean, and ready for the road.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* Left Column - Add-ons */}
            <Col lg={8}>
              {services.map((service) => (
                <Card key={service.id} className="service-card mb-3">
                  <Card.Body className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="service-icon">
                        <img src={service.img} alt={service.title} />
                      </div>
                      <div>
                        <h5>{service.title}</h5>
                        <p>{service.desc}</p>
                        <h6>${service.price.toFixed(2)}</h6>
                      </div>
                    </div>
                    <Button
                      className={`add-btn ${
                        selected.find((s) => s.id === service.id) ? "active" : ""
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      {selected.find((s) => s.id === service.id)
                        ? "ADDED"
                        : "+ ADD SERVICE"}
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* Right Column - Summary */}
            <Col lg={4}>
              <div className="order-summary p-4">
                <h5>Order Summary</h5>

                {/* Main service */}
                <div className="summary-item">
                  <p>{bookingData?.selectedService || "Selected Service"}</p>
                  <span>
                    $
    {bookingData?.selectedService?.toLowerCase().includes("valet")
      ? (basePrice - 30).toFixed(2)
      : basePrice.toFixed(2)}
                  </span>
                </div>

                {/* Fixed valet charge */}
                {isValet && (
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
                      <p>{s.title}</p>
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

                <Button className="book-btn w-100 mt-3" onClick={handleBookNow}>
                  PAY NOW
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Amenities */}
      <section className="section-padding amenities-wrapp">
        <Container>
          <Row>
            <div className="heading-wrapper text-center">
              <h2>Parking Amenities</h2>
            </div>
          </Row>
          <Row>
            {[amenities1, amenities2, amenities3, amenities4].map(
              (imgSrc, idx) => (
                <Col sm={6} md={3} key={idx}>
                  <div className="amenities-box">
                    <img src={imgSrc} alt={`amenity-${idx}`} />
                    <h4>
                      {
                        [
                          "Open Air & Covered Parking",
                          "Parking Open 24 Hours",
                          "Guaranteed Reservations",
                          "Electric Vehicle Charging",
                        ][idx]
                      }
                    </h4>
                  </div>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
