import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Paidcheck from "../../img/paid-check.svg";

const Receipt: React.FC = () => {
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

        {/* Top Buttons */}
        <div className="top-actions">
          <Button className="dark-btn">⬇ Download Receipt</Button>
          <Button className="dark-btn">🆕 New Booking</Button>
        </div>

        {/* Paid Badge */}
        <div className="paid-box d-flex justify-between">
          <div className="paid-title">
            <h2 className="brand-title">DropNPark</h2>
            <p className="sub-title">Airport Valet Parking Service</p>
          </div>
          
          <div className="receipt-info">
            <span className="paid"><img src={Paidcheck} alt="check" /> Paid</span>
            <p>Receipt #: RCP-51783604</p>
            <p>Booking ID: BK-WG6JYFLA-019</p>
          </div>
        </div>

        {/* Title */}
        

        {/* Customer Info */}
        <div className="info-card">
          <h5>Customer Information</h5>
          <Row>
            <Col md={4}><strong>Name:</strong> <p>Nasir Shaikh</p></Col>
            <Col md={4}><strong>Email:</strong> <p>nasirshaikh007@gmail.com</p></Col>
            <Col md={4}><strong>Drop-Off Date:</strong> <p>10th-Nov-2025 01:00 PM</p></Col>

            <Col md={4}><strong>Phone Number:</strong> <p>+1 416 1234567</p></Col>
            <Col md={4}><strong>Booking Date:</strong> <p>10th-Nov-2025</p></Col>
            <Col md={4}><strong>Pick Up Date:</strong> <p>14th-Nov-2025 08:00 AM</p></Col>
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
                <td>Nissan</td>
                <td>Leaf</td>
                <td>Red</td>
                <td>ABXC 007</td>
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
                  Valet Parking Service
                  <div className="small-text">(Fixed valet charge)</div>
                </td>
                <td>3 days</td>
                <td>$57.00</td>
                <td>$169.99</td>
              </tr>

              <tr>
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
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Totals */}
        <div className="totals-box">
          <Row>
            <Col>Subtotal</Col>
            <Col className="text-end">$278.74</Col>
          </Row>
          <Row>
            <Col>Tax (13%)</Col>
            <Col className="text-end">$36.24</Col>
          </Row>

          <Row className="total-amount">
            <Col><strong>Total Amount</strong></Col>
            <Col className="text-end"><strong>$314.98</strong></Col>
          </Row>
        </div>

        {/* Confirmation */}
        <div className="confirmation-box">
          <h5>Confirmation Sent</h5>
          <p>A copy of this receipt has been sent to nasirshaikh@gmail.com</p>
        </div>

      </Container>
    </section>
    </div>
  );
};

export default Receipt;
