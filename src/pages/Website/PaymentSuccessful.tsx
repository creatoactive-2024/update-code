// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';
// import { PiCaretRight } from "react-icons/pi";
// import barcodeOne from "../../../src/img/barcode-one.png";
// import barcodeTwe from "../../../src/img/barcode-one.png";
// const PaymentSuccessful: React.FC = () => {

//     return (
//         <div>
//             <div className="registration">
//                 {/* Inner banner */}
//                 <section className="inner-banner-success inner-banner success-banner">
//                     <Container>
//                         <Row className="align-items-center text-center">
//                             <Col className="text-white">
//                             <h1>Payment Successful!</h1>
//                             <h3>Your booking has been confirmed</h3>
//                             <p>Booking ID:Â BK-MG6UYFLA-G19</p>
                                
//                             </Col>
//                         </Row>
//                     </Container>
//                 </section>
//             </div>

//             <div className="button-wrap">
//                 <div className="container">
//                     <div className="button-wrap-flex">
//                         <Button href="#" variant="secondary" size="lg">Download Receipt</Button>
//                         <Button href="#" variant="secondary" size="lg">New Booking</Button>
//                     </div>
//                 </div>
//             </div>

//             <div className="success-inner-body">
//                 <div className="container">
//                     <div className="row">
//                     <div className="col-lg-8 col-md-8">
//                         <div className="wrapper-for-flex">
//                             <div className="success-upper">
//                                 <h2>Valet Car Services</h2>
//                                 <p className="small-heading">Service Receipt</p>
//                                 <div className="success-inner-wrap">
//                                     <div className="success-left">
//                                             <div className="section-a">
//                                                 <h3>Customer Information</h3>
//                                                 <p>Name : Nasir Shaikh </p>
//                                                 <p>Email : nasirshaikh007@gmail.com</p>
//                                                 <p>Phone : +1 416 1234567</p>
//                                             </div>
//                                             <div className="section-1">
//                                                 <div className="table-container-cg">
//                                                     <div className="product-table">
//                                                         <div className="table-sec-1">
//                                                         <h3>Services</h3>
//                                                         <p className="for-price">ValetÂ Package (Base) <span>$110.40</span></p>
//                                                         <p>Add-on services</p>
//                                                         </div>
//                                                         <div className="table-sec-2">

//                                                         <p className="for-price">Premium Car Wash <span>$33.74</span></p>
                                            
//                                                         </div>

//                                                         <div className="table-sec-3">
                                       
//                                                         <p className="for-price">Subtotal <span>$144.14</span></p>
//                                                         <p className="for-price">Tax (8%) <span>$ 11.53</span></p>
//                                                         </div>

//                                                         <div className="table-sec-4">
                                       
//                                                         <p>$155.87</p>
                                                    
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
                                            
//                                     </div>
//                                     <div className="success-right">
//                                         <div className="success-sec-a">
//                                             <h3>Booking Details</h3>
//                                             <p>BOOKING ID: BK-MG6UYFLA-G19</p>
//                                             <p>Booked On: September 30, 2025 at 11:25 PM</p>
//                                         </div>
//                                         <div className="success-sec-b">
//                                             <h3>Vehicle Information</h3>
//                                             <p>Vehicle: Mercedes-AMGÂ GLEÂ 53 4MATIC+</p>
//                                             <p>Color: Silver</p>
//                                             <p>License Plate: ABCD - 555</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="success-lower">
//                                 <h3>Confirmation Sent</h3>
//                                 <p>A copy of this receipt and QR codes have been sent toÂ asdasd@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4">
//                         <div className="wrapper-for-flex">
//                             <div className="barcode-section">
//                                 <h3>Check-In QR Code</h3>
//                                 <p>Scan this code when you arrive for service</p>
//                                     <div className="barcode-wrap">
//                                         <img src={barcodeOne} alt="barcode-1"/>
//                                     </div>
//                                 <p>Present this code to our service team</p>
//                             </div>
//                             <div className="barcode-section">
//                                 <h3>Check-In QR Code</h3>
//                                 <p>Scan this code when you arrive for service</p>
//                                     <div className="barcode-wrap">
//                                         <img src={barcodeTwe} alt="barcode-1"/>
//                                     </div>
//                                 <p>Present this code to our service team</p>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>



//         </div>
//     );

// };

// export default PaymentSuccessful;


import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import barcodeOne from "../../../src/img/barcode-one.png";
import barcodeTwo from "../../../src/img/barcode-one.png";
import baseURL from "../utils/baseURL"

interface Booking {
  bookingNumber: string;
  airportName: string;
  dropOffDateTime: string;
  pickUpDateTime: string;
  noOfDays: number;
  parkingService: { name: string; price: number };
  addons: { name: string; price: number }[];
  vehicle: { make: string; model: string; color: string; licensePlate: string };
  totalAmount: number;
  createdAt: string;
  user: { name: string; email: string; phone?: string };
}

const PaymentSuccessful: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId");

  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (bookingId) {
      fetch(`${baseURL}/api/users/${bookingId}`)
        .then((res) => res.json())
        .then((data) => setBooking(data))
        .catch((err) => console.error("Error fetching booking:", err));
    }
  }, [bookingId]);

  if (!booking) {
    return (
      <div className="text-center py-5">
        <h3>Loading your booking details...</h3>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <div className="registration">
        <section className="inner-banner-success inner-banner success-banner">
          <Container>
            <Row className="align-items-center text-center">
              <Col className="text-white">
                <h1>Payment Successful!</h1>
                <h3>Your booking has been confirmed</h3>
                <p>Booking ID: {booking.bookingNumber}</p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Buttons */}
      <div className="button-wrap">
        <div className="container">
          <div className="button-wrap-flex">
            <Button variant="secondary" size="lg">Download Receipt</Button>
            <Link to="/" className="btn btn-secondary btn-lg">New Booking</Link>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="success-inner-body">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-8 col-md-8">
              <div className="wrapper-for-flex">
                <div className="success-upper">
                  <h2>{booking.parkingService.name}</h2>
                  <p className="small-heading">Service Receipt</p>

                  <div className="success-inner-wrap">
                    {/* Customer Info */}
                    <div className="success-left">
                      <div className="section-a">
                        <h3>Customer Information</h3>
                        <p>Name: {booking.user?.name || "N/A"}</p>
                        <p>Email: {booking.user?.email || "N/A"}</p>
                        <p>Phone: {booking.user?.phone || "N/A"}</p>
                      </div>

                      {/* Services */}
                      <div className="section-1">
                        <div className="table-container-cg">
                          <div className="product-table">
                            <div className="table-sec-1">
                              <h3>Services</h3>
                              <p className="for-price">
                                {booking.parkingService.name} <span>${booking.parkingService.price.toFixed(2)}</span>
                              </p>
                              {booking.addons.length > 0 && <p>Add-on services</p>}
                            </div>

                            {booking.addons.map((addon, index) => (
                              <div className="table-sec-2" key={index}>
                                <p className="for-price">
                                  {addon.name} <span>${addon.price.toFixed(2)}</span>
                                </p>
                              </div>
                            ))}

                            <div className="table-sec-3">
                              <p className="for-price">
                                Subtotal <span>${booking.totalAmount.toFixed(2)}</span>
                              </p>
                            </div>
                            <div className="table-sec-4">
                              <p>${booking.totalAmount.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="success-right">
                      <div className="success-sec-a">
                        <h3>Booking Details</h3>
                        <p>Booking ID: {booking.bookingNumber}</p>
                        <p>Airport: {booking.airportName}</p>
                        <p>
                          Drop-off: {new Date(booking.dropOffDateTime).toLocaleString()}
                        </p>
                        <p>
                          Pick-up: {new Date(booking.pickUpDateTime).toLocaleString()}
                        </p>
                        <p>Days: {booking.noOfDays}</p>
                        <p>
                          Booked On: {new Date(booking.createdAt).toLocaleString()}
                        </p>
                      </div>

                      <div className="success-sec-b">
                        <h3>Vehicle Information</h3>
                        <p>
                          Vehicle: {booking.vehicle.make} {booking.vehicle.model}
                        </p>
                        <p>Color: {booking.vehicle.color}</p>
                        <p>License Plate: {booking.vehicle.licensePlate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="success-lower">
                  <h3>Confirmation Sent</h3>
                  <p>
                    A copy of this receipt and QR codes have been sent to{" "}
                    {booking.user?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* QR Codes */}
            <div className="col-lg-4 col-md-4">
              <div className="wrapper-for-flex">
                <div className="barcode-section">
                  <h3>Check-In QR Code</h3>
                  <p>Scan this code when you arrive for service</p>
                  <div className="barcode-wrap">
                    <img src={barcodeOne} alt="barcode-1" />
                  </div>
                  <p>Present this code to our service team</p>
                </div>
                <div className="barcode-section">
                  <h3>Check-Out QR Code</h3>
                  <p>Scan this code when you leave</p>
                  <div className="barcode-wrap">
                    <img src={barcodeTwo} alt="barcode-2" />
                  </div>
                  <p>Present this code to our service team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
