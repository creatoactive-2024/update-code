// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Modal } from "react-bootstrap";
// import state1 from '../../img/state-1.svg';
// import state2 from '../../img/state-2.svg';
// import state3 from '../../img/state-3.svg';
// import state4 from '../../img/state-4.svg';
// import search from '../../img/search.svg';
// import edit from '../../img/edit.svg';
// import deleteIcon from '../../img/trash.svg';
// import view from '../../img/view.svg';
// import receipt from '../../img/receipt.svg';
// import profile from '../../img/profile-pic.jpg';
// // import useAuth from '../utils/useAuth.js'
// interface Booking {
//   id: string;
//   status: 'upcoming' | 'completed' | 'cancelled';
//   package: string;
//   date: string;
//   vehicle: string;
//   total: number;
//   addons: string[];
// }

// const MyBooking: React.FC = () => {
//   // useAuth();
//   const tabClasses: Record<'all'|'upcoming'|'completed'|'cancelled', string> = {
//   all: 'btn-outline-primary',
//   upcoming: 'btn-outline-success',
//   completed: 'btn-outline-info',
//   cancelled: 'btn-outline-danger',
// };
//  const bookings: Booking[] = [
//     {
//       id: 'BK-ABC123',
//       status: 'upcoming',
//       package: 'Valet Package',
//       date: '2025-10-15T08:00',
//       vehicle: 'Toyota Camry 2023',
//       total: 285.45,
//       addons: ['Car Wash', 'Luggage Assistance', 'EV Charging', 'Oil Change', 'Fuel Top-Up'],
//     },
//     {
//       id: 'BK-XYZ789',
//       status: 'completed',
//       package: 'Premium Wash',
//       date: '2025-09-10T09:00',
//       vehicle: 'Honda Civic 2022',
//       total: 120.0,
//       addons: ['Car Wash', 'Wax'],
//     },
//     {
//       id: 'BK-AAA999',
//       status: 'completed',
//       package: 'Basic Service',
//       date: '2025-09-20T10:00',
//       vehicle: 'Hyundai i20 2020',
//       total: 85.0,
//       addons: ['Oil Change'],
//     },
//     {
//       id: 'BK-CCC333',
//       status: 'cancelled',
//       package: 'Interior Clean',
//       date: '2025-10-05T12:00',
//       vehicle: 'BMW X3 2021',
//       total: 150.0,
//       addons: [],
//     },
//   ];

//   const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all');

//   const filteredBookings =
//     filter === 'all' ? bookings : bookings.filter((b) => b.status === filter);

//   const countByStatus = (status: string) =>
//     bookings.filter((b) => b.status === status).length;


//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const handleCancel = () => {
//     console.log("Booking cancelled!");
//     handleClose();
//   };

//   return (
//     <div className="my-bookings">
//       {/* Inner banner */}
//       <section className="inner-banner booking-banner">
//         <Container>
//           <Row className="align-items-center text-center">
//             <Col>
//               <div className='profile-wrapper'>
//                 <div className='profile-img'>
//                   <img src={profile} alt="Profile" />
//                 </div>
//                 <div className='profile-info'>
//                   <h2>John Doe</h2>
//                   <a href='mailto:johndoe@gmail.com'>johndoe@gmail.com</a>
//                   <span>Customer</span>
//                 </div>
//               </div>
//               <div className='profile-btn'>
//                 <span>
//                   Member Since 2024
//                 </span>
//                 <Button className="btn btn-primary">Active Account</Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>


//       <Container>
//         <Row>
//             <Col md={12} className="">
//                 <div className="title-card">
//                     <h3 className="mb-4">My Bookings</h3>
//                     <p>Manage and track all your parking reservations</p>
//                 </div>
//             </Col>
//         </Row>
//         <Row>
//           <Col md={12}>
//           <div className="booking-dashboard">
//             {/* Stats */}
//             <Row className="">
//               <Col xs={6} md={3}>
//                 <div className="stat-box total">
//                   <div className='stat-info'>
//                       <h5>Total Bookings</h5>
//                       <p>{bookings.length}</p>
//                   </div>
//                   <div className='state-icon'>
//                     <img src={state1} alt="Total Bookings" />
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={6} md={3}>
//                 <div className="stat-box upcoming">
//                   <div className='stat-info'>
//                       <h5>Upcoming</h5>
//                       <p>{countByStatus('upcoming')}</p>
//                   </div>
//                   <div className='state-icon'>
//                     <img src={state2} alt="Upcoming Bookings" />
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={6} md={3}>
//                 <div className="stat-box completed">
//                   <div className='stat-info'>
//                       <h5>Completed</h5>
//                       <p>{countByStatus('completed')}</p>
//                   </div>
//                   <div className='state-icon'>
//                     <img src={state3} alt="Completed Bookings" />
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={6} md={3}>
//                 <div className="stat-box cancelled">
//                   <div className='stat-info'>
//                       <h5>Cancelled</h5>
//                       <p>{countByStatus('cancelled')}</p>
//                   </div>
//                   <div className='state-icon'>
//                     <img src={state4} alt="Cancelled Bookings" />
//                   </div>
//                 </div>
//               </Col>
              
//             </Row>

//             <Row>
//               <Col md={12} className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center search-tab-bar">
//                 <div className="search-bar">
//                   <input
//                     type="text"
//                     className="form-control search-box"
//                     placeholder="Search by booking ID or vehicle..."
//                   />
//                   <Button className="btn btn-search">
//                     <img src={search} alt="Search" />
//                   </Button>
//                 </div>
//               <div className="tab-group" role="group" aria-label="Filter bookings">
//                   {(['all','upcoming','completed','cancelled'] as const).map((tab) => {
//                     const baseClass = tabClasses[tab];
//                     const activeClass = filter === tab ? ' active' : '';
//                     return (
//                       <Button
//                         key={tab}
//                         type="button"
//                         className={`${baseClass}${activeClass}`}
//                         onClick={() => setFilter(tab)}
//                         aria-pressed={filter === tab}
//                       >
//                         {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                       </Button>
//                     );
//                   })}
//                 </div>
//               </Col>
//             </Row>

//             {/* Booking Cards */}
//             {filteredBookings.map((b) => (
//               <div key={b.id} className="booking-card">
                
//                   <Row>
//                     <Col md={10}>
//                     <div className='cart-title-status'>
//                       <div className='card-title'>
//                         <h5 className="mb-1">{b.package}</h5>
//                         <p className="booking-id">
//                           Booking ID: {b.id}
//                         </p>
//                       </div>
//                       <span className={`badge status-${b.status}`}>
//                         {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
//                       </span>
//                     </div>
//                     <Row>
//                       <Col md={4}>
//                         <div className='sub-box'>
//                           <p>Date & Time:</p>
//                           <h6>{new Date(b.date).toLocaleString()}</h6>
//                         </div>
//                       </Col>
//                       <Col md={4}>
//                         <div className='sub-box'>
//                           <p>Vehicle:</p>
//                           <h6>{b.vehicle}</h6>
//                         </div>
//                       </Col>
//                       <Col md={4}>
//                         <div className='sub-box'>
//                           <p>Total:</p>
//                           <h3>${b.total.toFixed(2)}</h3>
//                         </div>
//                       </Col>
//                     </Row>
//                     <div>
                   
                    
//                     <div className="sub-box">
//                       <p>Add-ons:</p>
//                       <div className="addons-section">
//                       {b.addons.map((a) => (
//                         <span key={a} className="addon-badge">
//                           {a}
//                         </span>
//                       ))}
//                       </div>
//                     </div>
//                     </div>
//                   </Col>
//                   <Col md={2} className="text-md-end mt-3 mt-md-0">
//                     <h4 className="fw-bold text-primary"></h4>
//                     <div className="d-flex flex-column action-buttons-group">
//                       <Button className="btn action-btn">
//                        <img src={view} alt='view' /> View</Button>

//                       <Button className="btn action-btn">
//                         <img src={edit} alt='edit' /> Edit</Button>

//                       <Button className="btn action-btn" onClick={handleShow}>
//                         <img src={deleteIcon} alt='delet' /> Delete</Button>

//                         <Button className="btn action-btn" >
//                         <img src={receipt} alt='delet' /> Receipt</Button>
//                     </div>
//                   </Col>
//               </Row>
//               </div>
//             ))}
//           </div>
//           </Col>
//         </Row>
//       </Container>
//       {/* Modal */}
//       <Modal
//         show={show}
//         onHide={handleClose}
//         centered
//         contentClassName="cancel-modal"
//       >
//         <Modal.Body className="text-left">
//           <h4 className="title">Cancel Booking</h4>
//           <p className="message">
//             Are you sure you want to cancel booking BK-ABC123? This action cannot be undone.
//           </p>

//           <div className="action-btns">
//             <Button className="keep-booking" onClick={handleClose}>
//               Keep Booking
//             </Button>
//             <Button className="cancel-booking" onClick={handleCancel}>
//               Yes, Cancel Booking
//             </Button>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
  
// };

// export default MyBooking;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import state1 from "../../img/state-1.svg";
import state2 from "../../img/state-2.svg";
import state3 from "../../img/state-3.svg";
import state4 from "../../img/state-4.svg";
import search from "../../img/search.svg";
import edit from "../../img/edit.svg";
import deleteIcon from "../../img/trash.svg";
import view from "../../img/view.svg";
import receipt from "../../img/receipt.svg";
import profile from "../../img/profile-pic.jpg";

import baseURL from "../utils/baseURL"


interface Booking {
  _id: string;
  bookingNumber: string;
  bookingStatus: "pending" | "confirmed" | "completed" | "cancelled";
  parkingService: { name: string; price: number };
  dropOffDateTime: string;
  pickUpDateTime: string;
  vehicle: { make: string; type: string };
  totalAmount: number;
  addons: { name: string }[];
  createdAt: string;
}

const MyBooking: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<
    "all" | "upcoming" | "completed" | "cancelled"
  >("all");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCancel = () => {
    console.log("Booking cancelled!");
    handleClose();
  };

  // Replace this with logged-in user's id from auth/localStorage
// ✅ Get logged-in user's ID properly from localStorage
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const userId = storedUser?.id || storedUser?.user?.id;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.post(`${baseURL}/api/users/getbookingalldata`, {
          userId,
        });

       if (res.data.bookings) {
  // ✅ Filter only confirmed & paid bookings
  const confirmedBookings = res.data.bookings.filter(
    (b: any) =>
      b.paymentStatus === "paid" && b.bookingStatus === "confirmed"
  );

  // ✅ Sort latest first
  const sorted = confirmedBookings.sort(
    (a: Booking, b: Booking) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  setBookings(sorted);
}

      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, [userId]);

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter((b) => b.bookingStatus === filter);

  const countByStatus = (status: string) =>
    bookings.filter((b) => b.bookingStatus === status).length;

  return (
    <div className="my-bookings">
      {/* Inner banner */}
      <section className="inner-banner booking-banner">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <div className="profile-wrapper">
                <div className="profile-img">
                  <img src={profile} alt="Profile" />
                </div>
               <div className="profile-info">
  {(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const firstName = storedUser?.firstName || storedUser?.user?.firstName || "Guest";
    const lastName = storedUser?.lastName || storedUser?.user?.lastName || "";
    const email = storedUser?.email || storedUser?.user?.email || "N/A";
    const role = storedUser?.role || storedUser?.user?.role || "customer";

    return (
      <>
        <h2>{`${firstName} ${lastName}`}</h2>
        <a href={`mailto:${email}`}>{email}</a>
        <span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
      </>
    );
  })()}
</div>

              </div>
              <div className="profile-btn">
                <Button className="btn btn-primary">Active Account</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col md={12}>
            <div className="title-card">
              <h3 className="mb-4">My Bookings</h3>
              <p>Manage and track all your parking reservations</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="booking-dashboard">
              {/* Stats */}
              <Row>
                <Col xs={6} md={3}>
                  <div className="stat-box total">
                    <div className="stat-info">
                      <h5>Total Bookings</h5>
                      <p>{bookings.length}</p>
                    </div>
                    <div className="state-icon">
                      <img src={state1} alt="Total Bookings" />
                    </div>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="stat-box upcoming">
                    <div className="stat-info">
                      <h5>Upcoming</h5>
                      <p>{countByStatus("pending")}</p>
                    </div>
                    <div className="state-icon">
                      <img src={state2} alt="Upcoming Bookings" />
                    </div>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="stat-box completed">
                    <div className="stat-info">
                      <h5>Completed</h5>
                      <p>{countByStatus("completed")}</p>
                    </div>
                    <div className="state-icon">
                      <img src={state3} alt="Completed Bookings" />
                    </div>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="stat-box cancelled">
                    <div className="stat-info">
                      <h5>Cancelled</h5>
                      <p>{countByStatus("cancelled")}</p>
                    </div>
                    <div className="state-icon">
                      <img src={state4} alt="Cancelled Bookings" />
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Booking List */}
              {filteredBookings.map((b) => (
                <div key={b._id} className="booking-card">
                  <Row>
                    <Col md={10}>
                      <div className="cart-title-status">
                        <div className="card-title">
                          <h5 className="mb-1">
                            {b.parkingService?.name || "Parking Service"}
                          </h5>
                          <p className="booking-id">
                            Booking ID: {b.bookingNumber}
                          </p>
                        </div>
                        <span
                          className={`badge status-${b.bookingStatus || "pending"}`}
                        >
                          {b.bookingStatus?.charAt(0).toUpperCase() +
                            b.bookingStatus?.slice(1)}
                        </span>
                      </div>

                      <Row>
                        <Col md={4}>
  <div className="sub-box">
    <p>Drop-off:</p>
    <h6>{new Date(b.dropOffDateTime).toLocaleString([], { 
      dateStyle: "medium", 
      timeStyle: "short" 
    })}</h6>

    <p className="mt-2">Pick-up:</p>
    <h6>{new Date(b.pickUpDateTime).toLocaleString([], { 
      dateStyle: "medium", 
      timeStyle: "short" 
    })}</h6>
  </div>
</Col>

                        <Col md={4}>
                          <div className="sub-box">
                            <p>Vehicle:</p>
                            <h6>
                              {b.vehicle?.make} {b.vehicle?.type}
                            </h6>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="sub-box">
                            <p>Total:</p>
                            <h3>${b.totalAmount?.toFixed(2)}</h3>
                          </div>
                        </Col>
                      </Row>

                      <div className="sub-box">
                        <p>Add-ons:</p>
                        <div className="addons-section">
                          {b.addons?.length ? (
                            b.addons.map((a, idx) => (
                              <span key={idx} className="addon-badge">
                                {a.name}
                              </span>
                            ))
                          ) : (
                            <span className="text-muted">No add-ons</span>
                          )}
                        </div>
                      </div>
                    </Col>

                    <Col md={2} className="text-md-end mt-3 mt-md-0">
  <div className="d-flex flex-column action-buttons-group">
    <Button className="btn action-btn" disabled>
      <img src={view} alt="view" /> View
    </Button>

    <Button className="btn action-btn" disabled>
      <img src={edit} alt="edit" /> Edit
    </Button>

    <Button className="btn action-btn" disabled>
      <img src={deleteIcon} alt="delete" /> Delete
    </Button>

    <Button className="btn action-btn" disabled>
      <img src={receipt} alt="receipt" /> Receipt
    </Button>
  </div>
</Col>

                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Cancel modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="cancel-modal"
      >
        <Modal.Body className="text-left">
          <h4 className="title">Cancel Booking</h4>
          <p className="message">
            Are you sure you want to cancel this booking? This action cannot be
            undone.
          </p>

          <div className="action-btns">
            <Button className="keep-booking" onClick={handleClose}>
              Keep Booking
            </Button>
            <Button className="cancel-booking" onClick={handleCancel}>
              Yes, Cancel Booking
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyBooking;
