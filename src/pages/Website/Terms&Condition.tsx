import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Terms: React.FC = () => (
  <section className="section-padding tandc-section">
        <Container>
          <Row>
            <Col className="text-center">
              <div className='heading-wrapper'>
                <h2>Terms and Conditions</h2>
                <p>Please read these terms carefully before using DropNPark services</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className=''>
              <div className='tandc-box'>
                <h4>1. Service Overview</h4>
                <div className='tanc-info'>
                <p>DropNPark provides premium valet parking services, including:</p>
                <ul>
                  <li>Driving customers from our lot to the airport departure terminal</li>
                  <li>Parking vehicles in our secure, monitored facility</li>
                  <li>Returning vehicles to customers at the airport curbside upon request</li>
                </ul>
                <p>All services are subject to availability and scheduling.</p>
                </div>
              </div>
              <div className='tandc-box'>
                <h4>2. Reservations & Confirmation</h4>
                <div className='tanc-info'>
                <p>Reservations are strongly recommended to guarantee service.</p>
                <p>A confirmed booking requires accurate customer information, including vehicle details and expected flight times.</p>
                <p>Customers must notify DropNPark of any changes to arrival or departure times.</p>
                </div>
              </div>
              <div className='tandc-box'>
                <h4>3. Vehicle Requirements</h4>
                <div className='tanc-info'>
                <p>Customers must provide accurate details regarding make, model, color, license plate, and any special considerations.</p>
                <p>DropNPark reserves the right to refuse service for vehicles that are unsafe to operate, excessively dirty, or improperly maintained.
</p>
                <p>Customers are responsible for removing all personal belongings and valuables from their vehicle prior to service.</p>
                </div>
              </div>
              <div className='tandc-box'>
                <h4>4. Off-Site Vehicle Storage</h4>
                <div className='tanc-info'>
                <p>DropNPark reserves the right to move vehicles to off-site, secure storage facilities if necessary, for operational, safety, or logistical reasons.</p>
                <p>Off-site lots are fully monitored and insured in accordance with standard industry practices.</p>
                <p>Customers acknowledge and accept that, in such cases, their vehicle may be transported by DropNPark staff to a secondary location without prior notice.</p>
                <p>All precautions will be taken to ensure the safety and security of the vehicle during transit to and from off-site locations.</p>
                </div>
              </div>
              <div className='tandc-box'>
                <h4>5. Cancellation & Refund Policy</h4>
                <div className='tanc-info'>
                <p>Reservation Cancellation: Customers may cancel their booking at least 24 hours prior to their scheduled arrival to avoid any cancellation fees.</p>
                <p>Late Cancellation: Cancellations made within 24 hours of the scheduled drop-off may incur partial or full service charges.</p>
                <p>No-Shows: Customers who fail to arrive for their scheduled service without prior notice will be charged the full service fee.</p>
                <p>Refunds: When refunds are applicable, they will be processed using the original method of payment and may take up to 5-7 business days to appear.</p>
                <p>Flight Delays or Schedule Changes:</p>
                <ul>
                  <li>DropNPark is not responsible for refunds, adjustments, or rescheduling due to flight delays, early arrivals, or changes in travel plans</li>
                  <li>Customers are granted a two-hour grace period beyond the scheduled return time in case of flight delays</li>
                  <li>If the vehicle is not collected within two hours of the scheduled pickup, an additional per-day charge will apply for extended parking/storage</li>
                  <li>Customers are encouraged to notify DropNPark promptly of any flight delays to ensure seamless service and avoid unnecessary charges</li>
                </ul>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>6. Vehicle Damage, Loss, or Theft</h4>
                <div className='tanc-info'>
                <p>No Pre-Existing Damage Record: DropNPark does not maintain formal records of pre-existing vehicle damage. Customers are encouraged to document any such damage prior to drop-off.</p>
                <p>Limited Liability: DropNPark is not responsible for:</p>
            
                <ul>
                  <li>Fire, theft, weather-related damage, or environmental impacts</li>
                  <li>Mechanical malfunctions</li>
                  <li>Loss or damage to personal items left inside the vehicle</li>
                  <li>License plate theft</li>
                  <li>Criminal acts carried out by third parties</li>
                </ul>
                <p>Additional Disclaimer: DropNPark also disclaims liability for any incidental or consequential damages, as well as personal injuries occurring while the vehicle is in our possession.</p>
                <p>Damage During Service: While our team exercises utmost care, any damages occurring during valet parking, transfer, or movement to off-site lots will be addressed according to our insurance coverage and applicable laws. Customers acknowledge that minor or incidental damage cannot be completely guaranteed against.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>7. Customer Responsibility</h4>
                <div className='tanc-info'>
                <p>Customers must remove all valuables and personal items from their vehicle before drop-off.</p>
                <p>Customers authorize DropNPark to operate their vehicle solely for airport transfer, parking, and, if necessary, off-site storage purposes.</p>
                <p>By using DropNPark services, customers accept these terms regarding cancellations, refunds, and liability for damage, loss, or theft.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>8. Payment & Fees</h4>
                <div className='tanc-info'>
                <p>Full payment is required at the time of booking or prior to vehicle drop-off.</p>
                <p>Fees are non-refundable for no-shows or late cancellations unless otherwise agreed in writing.</p>
                <p>DropNPark reserves the right to update rates; confirmed reservations honor the rate at the time of booking.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>9. Prohibited Items</h4>
                <div className='tanc-info'>
                <p>Transport of illegal substances or hazardous materials is strictly prohibited.</p>
                <p>Pets must not be left in vehicles unless prior arrangements are made.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>10. Privacy</h4>
                <div className='tanc-info'>
                <p>DropNPark collects personal and vehicle information solely to provide services.</p>
                <p>Customer information will not be shared with third parties except as required by law or for operational purposes.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>11. Modifications & Termination</h4>
                <div className='tanc-info'>
                <p>DropNPark reserves the right to modify or terminate services at any time, with reasonable notice to customers.</p>
                <p>Customers may cancel reservations subject to the cancellation policy communicated at booking.</p>
                </div>
              </div>

              <div className='tandc-box'>
                <h4>12. Governing Law</h4>
                <div className='tanc-info'>
                <p>These Terms & Conditions are governed by the laws of Ontario, Canada, and any disputes will be resolved in the jurisdiction of Toronto.</p>
                </div>
              </div>

              <div className='tandc-box tandc-footer'>
                <h4>
                  Agreement Acknowledgment
                </h4>
                <p>By using DropNPark services, you acknowledge that you have read, understood, and agree to these terms and conditions in their entirety.</p>
                <p>Last Updated: October 24, 2025</p>
              </div>
            </Col>
          </Row>
        </Container>
  </section>
);

export default Terms;