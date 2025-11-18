// import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useEffect, useState, useRef  } from "react"
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Paidcheck from "../../img/paid-check.svg";
import baseURL from "../utils/baseURL"

interface Booking {
  bookingNumber: string;
  airportName: string;
  dropOffDateTime: string;
  pickUpDateTime: string;
  noOfDays: number;
  parkingService: { name: string; price: number };
  addons: { name: string; price: number }[];
  vehicle: { make: string; type: string; color: string; licensePlate: string };
  totalAmount: number;
  subtotal?: number;
  tax?: number;
  couponCode?: string | null;
  discountAmount?: number;
  createdAt: string;
  user: { name: string; email: string; phone?: string; firstName?: string; lastName?: string };
}

const Receipt: React.FC = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId"); 

  const [booking, setBooking] = useState<Booking | null>(null);
  const receiptRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (bookingId) {
        fetch(`${baseURL}/api/users/booking/${bookingId}`)
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

    const total = booking.totalAmount;
    const taxRate = 0.13;
    const subtotal = total / (1 + taxRate); // reverse-calculate subtotal
    const tax = total - subtotal;

    const handleDownloadPDF = async () => {
      
      if (!receiptRef.current) return;

      const element = receiptRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Receipt-${booking.bookingNumber}.pdf`);
    };

  return (
    <div>
        <div className="inner-banner addon-banner">
                        <Container>
                            <Row className="align-items-center text-center">
                                <Col>
                                    <h1 className="page-title"><span>Payment Successful!</span></h1>
                                     <p className='page-discription'>Your booking has been confirmed</p>
                                </Col>
                            </Row>
                        </Container>
      </div>

<section className="receipt-section">
  <Container>
              <div className="top-actions">
                    {/* <Button className="dark-btn">⬇ Download Receipt</Button> */}
                    <button
                        className="btn btn-secondary btn-lg"
                        onClick={handleDownloadPDF}
                      >
                        ⬇ Download Receipt
                      </button>
                    {/* <Button className="dark-btn">🆕 New Booking</Button> */}
                    <Link to="/" className="btn btn-secondary btn-lg">🆕 New Booking</Link>
                  </div>
          </Container>
</section>

          
      

    <section className="receipt-section" ref={receiptRef}>
        
      <Container>

        

        {/* Paid Badge */}
        <div className="paid-box d-flex justify-between">
          <div className="paid-title">
            <h2 className="brand-title">DropNPark</h2>
            <p className="sub-title">Airport Valet Parking Service</p>
          </div>
          
          <div className="receipt-info">
            <span className="paid"><img src={Paidcheck} alt="check" /> Paid</span>
            <p>Receipt #: RCP-51783604</p>
            <p>Booking ID: {booking.bookingNumber}</p>
          </div>
        </div>

        {/* Title */}
        

        {/* Customer Info */}
        <div className="info-card">
          <h5>Customer Information</h5>
          <Row>
            <Col md={4}><strong>Name:</strong> <p>{" "}
  {booking.user
    ? `${booking.user?.firstName || ""} ${booking.user.lastName || ""}`.trim() ||
      "N/A"
    : "N/A"}</p></Col>
            <Col md={4}><strong>Email:</strong> <p>{booking.user?.email || "N/A"}</p></Col>
            <Col md={4}><strong>Drop-Off Date:</strong> <p>{new Date(booking.dropOffDateTime).toLocaleString()}</p></Col>

            <Col md={4}><strong>Phone Number:</strong> <p> {booking.user?.phone || "N/A"}</p></Col>
            <Col md={4}><strong>Booking Date:</strong> <p>{new Date(booking.createdAt).toLocaleString()}</p></Col>
            <Col md={4}><strong>Pick Up Date:</strong> <p>{new Date(booking.pickUpDateTime).toLocaleString()}</p></Col>
          </Row>
        </div>

        {/* Vehicle Details */}
        <h5 className="section-title-receipt">Vehicle Details</h5>
        <div className="table-wrapper">
          <Table bordered>
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Color</th>
                <th>License Plate</th>
                <th>Province / State</th>
                <th>Electric Vehicle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booking.vehicle.make}</td>
                <td>{booking.vehicle.type}</td>
                <td>{booking.vehicle.color}</td>
                <td>{booking.vehicle.licensePlate}</td>
                <td>Alberta</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Services Charges */}
        <h5 className="section-title">Services & Add-On Charges</h5>

        <div className="table-wrapper">
          <Table bordered>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity/Days</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {booking.parkingService.name}
                  <div className="small-text">(Fixed valet charge)</div>
                </td>
                <td>{booking.noOfDays} days</td>
                <td>${booking.parkingService.price.toFixed(2)}</td>
                <td>${booking.parkingService.price.toFixed(2)}</td>
              </tr>

              {booking.addons.map((addon, index) => (
                 <tr key={index}>
                    <td>
                      {addon.name}
                      <div className="small-text">Deep cleaning with ceramic coating protection</div>
                    </td>
                    <td>1</td>
                    <td>${addon.price.toFixed(2)}</td>
                    <td>${addon.price.toFixed(2)}</td>
              </tr>
              ))}

              {/* <tr>
                <td>
                  Car Wash & Detailing
                  <div className="small-text">Deep cleaning with ceramic coating protection</div>
                </td>
                <td>1</td>
                <td>$33.74</td>
                <td>$33.74</td>
              </tr>

              <tr>
                <td>Oil Change & Maintenance</td>
                <td>1</td>
                <td>$45.00</td>
                <td>$45.00</td>
              </tr>

              <tr>
                <td>EV Charging</td>
                <td>1</td>
                <td>$82.54</td>
                <td>$82.54</td>
              </tr>

              <tr>
                <td>Fuel Fill-Up</td>
                <td>1</td>
                <td>$65.47</td>
                <td>$65.47</td>
              </tr> */}
            </tbody>
          </Table>
        </div>

        {/* Totals */}
        <div className="totals-box">
          <Row>
            <Col>Subtotal</Col>
            <Col className="text-end">${(booking.subtotal || subtotal).toFixed(2)}</Col>
          </Row>
          
          {/* Discount row - show only if coupon code exists */}
          {booking.couponCode && booking.discountAmount && booking.discountAmount > 0 && (
            <Row style={{ color: "#00BA48" }}>
              <Col>
                Discount ({booking.couponCode})
              </Col>
              <Col className="text-end">-${booking.discountAmount.toFixed(2)}</Col>
            </Row>
          )}
          
          <Row>
            <Col>Tax (13%)</Col>
            <Col className="text-end">${(booking.tax || tax).toFixed(2)}</Col>
          </Row>

          <Row className="total-amount">
            <Col><strong>Total Amount</strong></Col>
            <Col className="text-end"><strong>${booking.totalAmount.toFixed(2)}</strong></Col>
          </Row>
        </div>

        {/* Confirmation */}
        <div className="confirmation-box">
          <h5>Confirmation Sent</h5>
          <p>A copy of this receipt has been sent to {booking.user?.email || "N/A"}</p>
        </div>

      </Container>
    </section>
    </div>
  );
};

export default Receipt;
