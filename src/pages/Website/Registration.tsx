// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';

// const Registration: React.FC = () => {

//   return (
//     <div className="registration">
//       {/* Inner banner */}
//       <section className="inner-banner registration-banner">
//         <Container>
//           <Row className="align-items-center text-center">
//             <Col>
//               <h1 className="page-title">Welcome to the New <br></br><span>DropNPark</span> Rewards</h1>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <Container>
//         <Row>
//             <Col md={12} className="mx-auto">
//                 <span className="mandatory-warn">
//                     * Mandatory fields
//                 </span>
//                 <div className="registration-form">
//                     <Form>
//                         <Row>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Airport Name *</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="airportName"
//                                 placeholder="Enter Airport name & terminal"
//                                 required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Drop Off Date and Time *</Form.Label>
//                             <Form.Control
//                             type="datetime-local"
//                             name="dropOff"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Pick Up Date and Time *</Form.Label>
//                             <Form.Control
//                             type="datetime-local"
//                             name="pickUp"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                          <Form.Group className="custome-form-group">
//                             <Form.Label>Service</Form.Label>
//                             <Form.Select
//                                 name="service"
//                             >
//                                 <option value="">Select Service</option>
//                                 <option value="valet">Valet Parking</option>
//                                 <option value="premium">Premium Parking</option>
//                                 <option value="longterm">Long Term Parking</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         </Row>
//                         <h5 className="section-title">Your Information</h5>
//                         <Row>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>First Name *</Form.Label>
//                             <Form.Control
//                             type="text"
//                             name="firstName"
//                             placeholder="Enter your first name"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Last Name *</Form.Label>
//                             <Form.Control
//                             type="text"
//                             name="lastName"
//                             placeholder="Enter your last name"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Postal Code *</Form.Label>
//                             <Form.Control
//                             type="text"
//                             name="postalCode"
//                             placeholder="Enter your postal code"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         </Row>
//                         <h5 className="section-title">Sign In Information</h5>
//                         <Row>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Email Address *</Form.Label>
//                             <Form.Control
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Confirm Email Address *</Form.Label>
//                             <Form.Control
//                             type="email"
//                             name="email"
//                             placeholder="Confirm your email"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Password *</Form.Label>
//                             <Form.Control
//                             type="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Confirm Password *</Form.Label>
//                             <Form.Control
//                             type="password"
//                             name="password"
//                             placeholder="Confirm password"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Mobile Number *</Form.Label>
//                             <Form.Control
//                             type="phone"
//                             name="mobile"
//                             placeholder="Enter your mobile number"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         </Row>
//                         <h5 className="section-title">Vehicle Information</h5>

//                         <Row>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Make</Form.Label>
//                             <Form.Select
//                                 name="make"
//                             >
//                                 <option value="">Make</option>
//                                 <option value="valet">Valet Parking</option>
//                                 <option value="premium">Premium Parking</option>
//                                 <option value="longterm">Long Term Parking</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Type</Form.Label>
//                             <Form.Select
//                                 name="type"
//                             >
//                                 <option value="">Type</option>
//                                 <option value="valet">Valet Parking</option>
//                                 <option value="premium">Premium Parking</option>
//                                 <option value="longterm">Long Term Parking</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Color</Form.Label>
//                             <Form.Select
//                                 name="color"
//                             >
//                                 <option value="">Color</option>
//                                 <option value="valet">Valet Parking</option>
//                                 <option value="premium">Premium Parking</option>
//                                 <option value="longterm">Long Term Parking</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                        <Form.Group className="custome-form-group">
//                             <Form.Label>License Plate</Form.Label>
//                             <Form.Control
//                             type="text"
//                             name="licensePlate"
//                             placeholder="License Plate"
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Province / State</Form.Label>
//                             <Form.Select
//                                 name="provincestate"
//                             >
//                                 <option value="">Province / State</option>
//                                 <option value="valet">Valet Parking</option>
//                                 <option value="premium">Premium Parking</option>
//                                 <option value="longterm">Long Term Parking</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Is this an electric vehicle?</Form.Label>
//                             <Form.Select
//                                 name="elevehicle"
//                             >
//                                 <option value="">Yes</option>
//                                 <option value="valet">No</option>
//                             </Form.Select>
//                         </Form.Group>
//                         </Col>
//                         <Col md={6} lg={4}>
//                         <Form.Group className="custome-form-group">
//                             <Form.Label>Coupon/Redeem Code</Form.Label>
//                             <Form.Control
//                             type="text"
//                             name="coupon"
//                             placeholder="Select Coupon or Enter Redeem Code "
//                             required
//                             />
//                         </Form.Group>
//                         </Col>
//                         </Row>
//                         <div className="d-flex registration-btns">
//                             <Button variant="primary" type="submit" className="me-3 primary-btn">
//                                 ADD VEHICLE
//                             </Button>
//                             <Link to="/login" className="btn btn-secondary secondary-btn">
//                                 REMOVE
//                             </Link>
//                         </div>

//                     </Form>
//                     <hr></hr>
//                         <h5 className="section-title">Notification Settings</h5>
//                         <div className="notificatin-text">
//                         <p>Subscribe to the following communication options by selecting
//                             the appropriate checkbox</p>
//                             <h6>I would like to receive communication relating to my reservation:</h6>
//                             <span>(Must select at least one option)</span>
//                         <div className="d-flex checkbox-group">
//                             <Form.Check
//                                 type="checkbox"
//                                 id="email"
//                                 label="Via Email"
//                                 />

//                                 <Form.Check
//                                     type="checkbox"
//                                     id="sms"
//                                     label="Via SMS"
//                                 />
//                         </div>
//                         <div className="d-flex registration-btns">
//                             <Button variant="primary" type="submit" className=" primary-btn">
//                                 REGISTER
//                             </Button>
//                         </div>
//                         <p className="mb-32">By registering, you agree to DropNPark<br></br>
// <Link to=''>Terms & Conditions</Link> and <Link to=''>Privacy Policy</Link>.</p>
// <p>Already have an account? <Link to=''>Sign In</Link></p>
//                         </div>
//                 </div>
//             </Col>
//         </Row>
//       </Container>
//     </div>
//   );

// };

// export default Registration;

import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import baseURL from "../utils/baseURL"

const Registration: React.FC = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  
  const bookingData = location.state || {};
  const bookingDetails = location.state;
  console.log("dataaa", bookingDetails);
  const postalCodeRegex = /^[A-Za-z0-9\s\-]{3,10}$/;


//  🔹 Dummy relational data: Make → Models
const modelOptions: Record<string, string[]> = {
  Acura: ["ILX", "MDX", "RDX", "TLX"],
  "Alfa Romeo": ["Giulia", "Stelvio", "Tonale"],
  AMC: ["AMX", "Gremlin", "Hornet"],
  Audi: ["A3", "A4", "A6", "Q5", "Q7"],
};


const [isExistingUser, setIsExistingUser] = useState(false);

  // 🧠 Track currently selected make (for relational filtering)
  const [selectedMake, setSelectedMake] = useState<string>("");

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedMake(value);

    // Call your existing handler so it updates formData correctly
    handleInputChange(e as any);

    // Reset model/type when make changes
    setFormData((prev: any) => ({
      ...prev,
      type: "",
    }));
  };

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      const parsed = JSON.parse(storedUser);
      if (parsed?.id) {
        setIsExistingUser(true);
      }
    } catch (err) {
      console.error("Error parsing stored user:", err);
    }
  }
}, []);


  const readCheckbox = (form: HTMLFormElement, id: string) => {
    const el = form.querySelector<HTMLInputElement>(`#${id}`);
    return el ? el.checked : false;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // simple, strong email validation
  //   const mobileRegex = /^\+?[0-9]{8,15}$/;
  const mobileRegex = /^[0-9]{10}$/;

  // const validatePayload = (payload: any) => {
  //   const err: Record<string, string> = {};

  //   if (!payload.firstName?.trim()) err.firstName = "First name is required";
  //   if (!payload.lastName?.trim()) err.lastName = "Last name is required";

  //   if (!payload.email?.trim()) err.email = "Email is required";
  //   else if (!emailRegex.test(payload.email)) err.email = "Enter a valid email";

  //   if (!payload.confirmEmail?.trim())
  //     err.confirmEmail = "Confirm email is required";
  //   else if (
  //     payload.email &&
  //     payload.confirmEmail &&
  //     payload.email !== payload.confirmEmail
  //   )
  //     err.confirmEmail = "Emails do not match";

  //   if (!payload.password) err.password = "Password is required";
  //   else if (payload.password.length < 6)
  //     err.password = "Password must be at least 6 characters";

  //   if (!payload.confirmPassword)
  //     err.confirmPassword = "Confirm password is required";
  //   else if (
  //     payload.password &&
  //     payload.confirmPassword &&
  //     payload.password !== payload.confirmPassword
  //   )
  //     err.confirmPassword = "Passwords do not match";

  //   if (!payload.mobile?.trim()) {
  //     err.mobile = "Mobile number is required";
  //   } else if (!mobileRegex.test(payload.mobile)) {
  //     err.mobile = "Enter a valid 10-digit mobile number";
  //   }

  //   if (!payload.airportName?.trim()) err.airportName = "Airport name required";

  //   if (!payload.postalCode?.trim()) err.postalCode = "Postal code is required";
  //   else if (!postalCodeRegex.test(payload.postalCode))
  //     err.postalCode = "Enter a valid postal code";

  //   if (!payload.dropOff) err.dropOff = "Drop-off date & time required";
  //   if (!payload.pickUp) err.pickUp = "Pick-up date & time required";

  //   if (payload.dropOff && payload.pickUp) {
  //     const d = new Date(payload.dropOff);
  //     const p = new Date(payload.pickUp);
  //     if (isNaN(d.getTime()) || isNaN(p.getTime()))
  //       err.pickUp = "Invalid date/time";
  //     else if (p <= d) err.pickUp = "Pick-up must be after drop-off";
  //   }

  //   if (!payload.viaEmail && !payload.viaSMS)
  //     err.notifications = "Select at least one notification option";

  //   return err;
  // };

const validatePayload = (payload: any) => {
  const err: Record<string, string> = {};

  const storedUser = localStorage.getItem("user");
  const isExistingUser = storedUser && JSON.parse(storedUser)?.id;

  if (!payload.firstName?.trim()) err.firstName = "First name is required";
  if (!payload.lastName?.trim()) err.lastName = "Last name is required";

  // ✅ Skip email validation for existing user
  if (!isExistingUser) {
    if (!payload.email?.trim()) err.email = "Email is required";
    else if (!emailRegex.test(payload.email))
      err.email = "Enter a valid email";

    if (!payload.confirmEmail?.trim())
      err.confirmEmail = "Confirm email is required";
    else if (
      payload.email &&
      payload.confirmEmail &&
      payload.email !== payload.confirmEmail
    )
      err.confirmEmail = "Emails do not match";
  }

  // ✅ Skip password validation for existing user
  if (!isExistingUser) {
    if (!payload.password) err.password = "Password is required";
    else if (payload.password.length < 6)
      err.password = "Password must be at least 6 characters";

    if (!payload.confirmPassword)
      err.confirmPassword = "Confirm password is required";
    else if (
      payload.password &&
      payload.confirmPassword &&
      payload.password !== payload.confirmPassword
    )
      err.confirmPassword = "Passwords do not match";
  }

  if (!payload.mobile?.trim()) {
    err.mobile = "Mobile number is required";
  } else if (!mobileRegex.test(payload.mobile)) {
    err.mobile = "Enter a valid 10-digit mobile number";
  }

  if (!payload.airportName?.trim()) err.airportName = "Airport name required";

  if (!payload.postalCode?.trim()) err.postalCode = "Postal code is required";
  else if (!postalCodeRegex.test(payload.postalCode))
    err.postalCode = "Enter a valid postal code";

  if (!payload.dropOff) err.dropOff = "Drop-off date & time required";
  if (!payload.pickUp) err.pickUp = "Pick-up date & time required";

  if (payload.dropOff && payload.pickUp) {
    const d = new Date(payload.dropOff);
    const p = new Date(payload.pickUp);
    if (isNaN(d.getTime()) || isNaN(p.getTime()))
      err.pickUp = "Invalid date/time";
    else if (p <= d) err.pickUp = "Pick-up must be after drop-off";
  }

  if (!payload.viaEmail && !payload.viaSMS)
    err.notifications = "Select at least one notification option";

  return err;
};




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const updatedErrors = { ...errors };

    // Remove required error if field has value
    if (value.trim()) delete updatedErrors[name];

    // Email validation
    if (
      (name === "email" || name === "confirmEmail") &&
      newFormData.email &&
      newFormData.confirmEmail
    ) {
      if (!emailRegex.test(newFormData.email))
        updatedErrors.email = "Enter a valid email";
      else delete updatedErrors.email;

      if (newFormData.email !== newFormData.confirmEmail)
        updatedErrors.confirmEmail = "Emails do not match";
      else delete updatedErrors.confirmEmail;
    }

    // Password mismatch
    if (
      (name === "password" || name === "confirmPassword") &&
      newFormData.password &&
      newFormData.confirmPassword
    ) {
      if (newFormData.password !== newFormData.confirmPassword)
        updatedErrors.confirmPassword = "Passwords do not match";
      else delete updatedErrors.confirmPassword;
    }

    // Postal code
    if (name === "postalCode" && postalCodeRegex.test(value.trim()))
      delete updatedErrors.postalCode;

    if (name === "mobile") {
      if (!mobileRegex.test(value.trim())) {
        updatedErrors.mobile = "Enter a valid mobile number 10 digits";
      } else {
        delete updatedErrors.mobile;
      }
    }

    setErrors(updatedErrors);
  };

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const nativeEvent: any = (e as any).nativeEvent;
//   const submitter: HTMLButtonElement | null = nativeEvent?.submitter || null;
//   const submitText = submitter?.textContent?.trim().toUpperCase() || "";

//   if (!submitText.includes("REGISTER")) return;

//   const form = e.currentTarget;
//   const fd = new FormData(form);

//   // ✅ checkbox reader helper
//   const readCheckbox = (form: HTMLFormElement, id: string): boolean => {
//     const checkbox = form.querySelector(`#${id}`) as HTMLInputElement | null;
//     return checkbox ? checkbox.checked : false;
//   };

//   // 🔹 Get user ID from localStorage
//   const storedUserStr = localStorage.getItem("user");
//   const storedUser = storedUserStr ? JSON.parse(storedUserStr) : null;
//   const userId = storedUser?._id || storedUser?.id || null;

//   // 🔹 Build payload
//   const payload: any = {
//     role: "customer",
//     airportName: String(fd.get("airportName") || "").trim(),
//     dropOff: String(fd.get("dropOff") || ""),
//     pickUp: String(fd.get("pickUp") || ""),
//     service: String(fd.get("service") || ""),
//     firstName: String(fd.get("firstName") || "").trim(),
//     lastName: String(fd.get("lastName") || "").trim(),
//     postalCode: String(fd.get("postalCode") || "").trim(),
//     email: String(fd.get("email") || "").trim(),
//     confirmEmail: String(fd.get("confirmEmail") || "").trim(),
//     password: String(fd.get("password") || ""),
//     confirmPassword: String(fd.get("confirmPassword") || ""),
//     mobile: String(fd.get("mobile") || "").trim(), // ✅ still called mobile here
//     vehicle: {
//       make: String(fd.get("make") || "").trim(),
//       type: String(fd.get("type") || "").trim(),
//       color: String(fd.get("color") || "").trim(),
//       licensePlate: String(fd.get("licensePlate") || "").trim(),
//       provinceOrState: String(fd.get("provincestate") || "").trim(),
//       isElectric: String(fd.get("elevehicle") || "").toLowerCase() === "yes",
//     },
//     viaEmail: readCheckbox(form, "email"),
//     viaSMS: readCheckbox(form, "sms"),
//     dropOffDateTime: String(fd.get("dropOff") || ""),
//     pickUpDateTime: String(fd.get("pickUp") || ""),
//     serviceSelected: String(fd.get("service") || ""),
//   };

//   // 🔹 Validate before submitting
//   const validationErrors = validatePayload(payload);
//   setErrors(validationErrors);
//   if (Object.keys(validationErrors).length > 0) return;

//   // ✅ FIX 1: Rename mobile → phone (backend expects phone)
//   // ✅ FIX 2: Send notificationSettings correctly
//   const body = {
//     id: userId, // ✅ pass the user ID for update
//     role: payload.role,
//     firstName: payload.firstName,
//     lastName: payload.lastName,
//     email: payload.email,
//     password: payload.password,
//     phone: payload.mobile, // ✅ backend expects `phone`, NOT `mobile`
//     postalCode: payload.postalCode,
//     vehicle: payload.vehicle,
//     airportName: payload.airportName,
//     dropOffDateTime: payload.dropOffDateTime,
//     pickUpDateTime: payload.pickUpDateTime,
//     serviceSelected: payload.serviceSelected,
//     notificationSettings: { // ✅ must be nested like this
//       receiveReservationEmails: !!payload.viaEmail,
//       receiveReservationSMS: !!payload.viaSMS,
//     },
//   };

//   try {
//     setSubmitting(true);

//     const res = await fetch("http://localhost:5009/api/users/register-or-update", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();
//     if (!res.ok) {
//       alert(data.message || "Registration failed");
//       return;
//     }

//     alert("Registration successful! Redirecting to checkout...");
//     localStorage.setItem("userData", JSON.stringify(data.user || {}));

//     if (!bookingData || Object.keys(bookingData).length === 0) {
//       navigate("/signin");
//       return;
//     }

//     navigate("/checkout", {
//       state: {
//         userData: data.user || {},
//         bookingData,
//         formData: body,
//       },
//     });
//   } catch (err) {
//     console.error("Registration error:", err);
//     alert("Server error. Please try again.");
//   } finally {
//     setSubmitting(false);
//   }
// };


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const nativeEvent: any = (e as any).nativeEvent;
  const submitter: HTMLButtonElement | null = nativeEvent?.submitter || null;
  const submitText = submitter?.textContent?.trim().toUpperCase() || "";

  if (!submitText.includes("REGISTER")) return;

  const form = e.currentTarget;
  const fd = new FormData(form);

  const readCheckbox = (form: HTMLFormElement, id: string): boolean => {
    const checkbox = form.querySelector(`#${id}`) as HTMLInputElement | null;
    return checkbox ? checkbox.checked : false;
  };

  // 🔹 Get user ID from localStorage
  const storedUserStr = localStorage.getItem("user");
  const storedUser = storedUserStr ? JSON.parse(storedUserStr) : null;
  const userId = storedUser?._id || storedUser?.id || null;

  // 🔹 Build payload
  const payload: any = {
    role: "customer",
    airportName: String(fd.get("airportName") || "").trim(),
    dropOff: String(fd.get("dropOff") || ""),
    pickUp: String(fd.get("pickUp") || ""),
    service: String(fd.get("service") || ""),
    firstName: String(fd.get("firstName") || "").trim(),
    lastName: String(fd.get("lastName") || "").trim(),
    postalCode: String(fd.get("postalCode") || "").trim(),
    email: String(fd.get("email") || "").trim(),
    confirmEmail: String(fd.get("confirmEmail") || "").trim(),
    password: String(fd.get("password") || ""),
    confirmPassword: String(fd.get("confirmPassword") || ""),
    mobile: String(fd.get("mobile") || "").trim(),
    vehicle: {
      make: String(fd.get("make") || "").trim(),
      type: String(fd.get("type") || "").trim(),
      color: String(fd.get("color") || "").trim(),
      licensePlate: String(fd.get("licensePlate") || "").trim(),
      provinceOrState: String(fd.get("provincestate") || "").trim(),
      isElectric: String(fd.get("elevehicle") || "").toLowerCase() === "yes",
    },
    viaEmail: readCheckbox(form, "email"),
    viaSMS: readCheckbox(form, "sms"),
    dropOffDateTime: String(fd.get("dropOff") || ""),
    pickUpDateTime: String(fd.get("pickUp") || ""),
    serviceSelected: String(fd.get("service") || ""),
  };

  const validationErrors = validatePayload(payload);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length > 0) return;

  const body = {
    id: userId,
    role: payload.role,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    phone: payload.mobile,
    postalCode: payload.postalCode,
    vehicle: payload.vehicle,
    airportName: payload.airportName,
    dropOffDateTime: payload.dropOffDateTime,
    pickUpDateTime: payload.pickUpDateTime,
    serviceSelected: payload.serviceSelected,
    notificationSettings: {
      receiveReservationEmails: !!payload.viaEmail,
      receiveReservationSMS: !!payload.viaSMS,
    },
  };

  try {
    setSubmitting(true);

    const res = await fetch(`${baseURL}/api/users/register-or-update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    // ✅ Always save returned user info
    localStorage.setItem("userData", JSON.stringify(data.user || {}));

    // ✅ If no logged-in user in localStorage, store new user ID for booking
   if (!userId && data.user && data.user._id) {
  console.log("🆕 New user created (not saving to localStorage):", data.user._id);
}

    alert("Registration successful! Redirecting to checkout...");

    if (!bookingData || Object.keys(bookingData).length === 0) {
      navigate("/signin");
      return;
    }

    // ✅ Always pass new user ID to checkout
    navigate("/checkout", {
      state: {
        userData: data.user || {},
        bookingData,
        formData: {
          ...body,
          id: data.user?._id || userId, // ensure we pass the correct user ID
        },
      },
    });
  } catch (err) {
    console.error("Registration error:", err);
    alert("Server error. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  useEffect(() => {
    const storedUserStr = localStorage.getItem("user");
    if (!storedUserStr) return;

    const storedUser = JSON.parse(storedUserStr);
    const userId = storedUser._id || storedUser.id;
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const res = await fetch(`${baseURL}/api/users/getById`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: userId }),
        });

        const data = await res.json();
        if (!res.ok) {
          console.error("Failed to fetch user data:", data.message);
          return;
        }

        const userData = data;
        // Pick the most recently added vehicle (last in array)
        const latestVehicle =
          userData.vehicle && userData.vehicle.length > 0
            ? userData.vehicle[userData.vehicle.length - 1]
            : {};

        setFormData((prev) => ({
          ...prev,
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          confirmEmail: userData.email || "",
          postalCode: userData.postalCode || "",
          mobile: userData.phone || "",
          password: "",
          confirmPassword: "",

          // Vehicle details
          make: latestVehicle.make || "",
          type: latestVehicle.type || "",
          color: latestVehicle.color || "",
          licensePlate: latestVehicle.licensePlate || "",
          provincestate: latestVehicle.provinceOrState || "",
          elevehicle: latestVehicle.isElectric ? "yes" : "no",
        }));

        // Set checkbox values
        const notify = userData.notificationSettings || {};
        const emailCheckbox = document.getElementById("email");
        const smsCheckbox = document.getElementById("sms");

        if (emailCheckbox)
          emailCheckbox.checked =
            notify.receiveReservationEmails ||
            notify.receivePromotionsEmail ||
            false;
        if (smsCheckbox)
          smsCheckbox.checked =
            notify.receiveReservationSMS ||
            notify.receivePromotionsSMS ||
            false;
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (location.state) {
      const bookingDetails = location.state;

      // Convert UTC to local datetime-local format
      const formatDateTimeLocal = (isoString: string) => {
        const date = new Date(isoString);
        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60000);
        return localDate.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
      };

      setFormData((prev) => ({
        ...prev,
        airportName: bookingDetails.airportName || "",
        dropOff: bookingDetails.dropOffDateTime
          ? formatDateTimeLocal(bookingDetails.dropOffDateTime)
          : "",
        pickUp: bookingDetails.pickUpDateTime
          ? formatDateTimeLocal(bookingDetails.pickUpDateTime)
          : "",
        service: bookingDetails.selectedService || "",
      }));
    }
  }, [location.state]);

// 👇 Add this after your existing useEffect hooks
useEffect(() => {
  if (formData.make) {
    setSelectedMake(formData.make);
  }
}, [formData.make]);


  return (
    <div className="registration">
      <section className="inner-banner registration-banner">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1 className="page-title">
                Welcome to the New <br />
                <span>DropNPark</span> Rewards
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col md={12} className="mx-auto">
            <span className="mandatory-warn">* Mandatory fields</span>
            <div className="registration-form">
              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  {/* <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Airport Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="airportName"
                        placeholder="Enter Airport name & terminal"
                        value={formData.airportName || ""}
                        onChange={handleInputChange}
                        required
                        // value managed by DOM/FormData, not component state (keeps markup unchanged)
                      />
                      {errors.airportName && (
                        <div className="text-danger">{errors.airportName}</div>
                      )}
                    </Form.Group>
                  </Col> */}
                  <Col md={6} lg={8}>
  <Form.Group className="custome-form-group">
    <Form.Label>Airport Name *</Form.Label>
    <Form.Select
      name="airportName"
      value={formData.airportName || ""}
      onChange={handleInputChange}
      required
    >
      <option value="">Select Airport</option>
      <option value="Toronto">Toronto</option>
      <option value="Vancouver">Vancouver</option>
      <option value="Montreal">Montreal</option>
    </Form.Select>

    {errors.airportName && (
      <div className="text-danger">{errors.airportName}</div>
    )}
  </Form.Group>
</Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Drop Off Date and Time *</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="dropOff"
                        value={formData.dropOff || ""}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.dropOff && (
                        <div className="text-danger">{errors.dropOff}</div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Pick Up Date and Time *</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="pickUp"
                        value={formData.pickUp || ""}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.pickUp && (
                        <div className="text-danger">{errors.pickUp}</div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Service</Form.Label>
                      <Form.Select
                        name="service"
                        onChange={handleInputChange}
                        value={formData.service || ""}
                      >
                        <option value="">Select Service</option>
                        <option value="Valet Parking Service">Valet Parking Service</option>
                        <option value="Drop N Drive">Drop N Drive</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="section-title">Your Information</h5>
                <Row>
                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName || ""}
                        placeholder="Enter your first name"
                        onChange={handleInputChange}
                        required
                      />
                      {errors.firstName && (
                        <div className="text-danger">{errors.firstName}</div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName || ""}
                        placeholder="Enter your last name"
                        onChange={handleInputChange}
                        required
                      />
                      {errors.lastName && (
                        <div className="text-danger">{errors.lastName}</div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Postal Code *</Form.Label>
                      <Form.Control
                        type="text"
                        name="postalCode"
                        placeholder="Enter your postal code"
                        value={formData.postalCode || ""}
                        required
                        onChange={handleInputChange}
                      />
                      {errors.postalCode && (
                        <div className="text-danger">{errors.postalCode}</div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="section-title">Sign In Information</h5>
                <Row>
                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email || ""}
                        onChange={handleInputChange}
                        required
                        disabled={isExistingUser}
                      />{" "}
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Confirm Email Address *</Form.Label>
                      {/* duplicate name kept intentionally to match your markup; we use getAll() */}
                      <Form.Control
                        type="email"
                        name="confirmEmail"
                        placeholder="Confirm your email"
                        value={formData.confirmEmail || ""}
                        onChange={handleInputChange}
                        required
                        disabled={isExistingUser}
                      />{" "}
                      {errors.confirmEmail && (
                        <div className="text-danger">{errors.confirmEmail}</div>
                      )}
                    </Form.Group>
                  </Col>

                 {!isExistingUser && (
  <>
    <Col md={6} lg={4}>
      <Form.Group className="custome-form-group">
        <Form.Label>Password *</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password || ""}
          onChange={handleInputChange}
          required
        />{" "}
        {errors.password && (
          <div className="text-danger">{errors.password}</div>
        )}
      </Form.Group>
    </Col>

    <Col md={6} lg={4}>
      <Form.Group className="custome-form-group">
        <Form.Label>Confirm Password *</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword || ""}
          onChange={handleInputChange}
          required
        />{" "}
        {errors.confirmPassword && (
          <div className="text-danger">{errors.confirmPassword}</div>
        )}
      </Form.Group>
    </Col>
  </>
)}


                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Mobile Number *</Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        value={formData.mobile || ""}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                          const char = String.fromCharCode(e.which);
                          // Only allow digits
                          if (!/[0-9]/.test(char)) e.preventDefault();
                        }}
                        maxLength={10} // limit to 10 digits
                        required
                      />

                      {errors.mobile && (
                        <div className="text-danger">{errors.mobile}</div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="section-title">Vehicle Information</h5>
                <Row>
                   <Col md={6} lg={4}>
        <Form.Group className="custome-form-group">
          <Form.Label>Make</Form.Label>
          <Form.Select
            name="make"
            value={formData.make || ""}
            onChange={handleMakeChange} // 👈 custom handler for relational link
          >
            <option disabled value="">
              Vehicle Make
            </option>
            <option value="Acura">Acura</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="AMC">AMC</option>
            <option value="Audi">Audi</option>
          </Form.Select>
        </Form.Group>
      </Col>

      <Col md={6} lg={4}>
        <Form.Group className="custome-form-group">
          <Form.Label>Model</Form.Label>
          <Form.Select
            name="type"
            value={formData.type || ""}
            onChange={handleInputChange} // 👈 same as before
            disabled={!selectedMake} // disable until a make is picked
          >
            <option disabled value="">
              {selectedMake ? "Select Model" : "Select Make First"}
            </option>

            {/* Dynamically show models for selected make */}
            {selectedMake &&
              modelOptions[selectedMake]?.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Manufacturing Year</Form.Label>
                      <Form.Control
                        type="text"
                        name="ManufacturingYear"
                        
                        placeholder="Manufacturing Year"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Color</Form.Label>
                      <Form.Select
                        name="color"
                        value={formData.color || ""}
                        onChange={handleInputChange}
                      >
                        <option disabled value="">
                          Vehicle Color
                        </option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Brown">Brown</option>
                        <option value="Gold">Gold</option>
                        <option value="Green">Green</option>
                        <option value="Grey">Grey</option>
                        <option value="Orange">Orange</option>
                        <option value="Purple">Purple</option>
                        <option value="Red">Red</option>
                        <option value="Silver">Silver</option>
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>License Plate</Form.Label>
                      <Form.Control
                        type="text"
                        name="licensePlate"
                        value={formData.licensePlate || ""}
                        onChange={handleInputChange}
                        placeholder="License Plate"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Province / State</Form.Label>
                      <Form.Select
                        name="provincestate"
                        value={formData.provincestate || ""}
                        onChange={handleInputChange}
                      >
                        <option disabled value="">
                          Province / State
                        </option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">
                          British Columbia
                        </option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland And Labrador">
                          Newfoundland And Labrador
                        </option>
                        <option value="Northwest Territories">
                          Northwest Territories
                        </option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">
                          Prince Edward Island
                        </option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                        <option value="California">California</option>
                        <option value="Florida">Florida</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Montana">Montana</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New York">New York</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Texas">Texas</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6} lg={4}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Is this an electric vehicle?</Form.Label>
                      <Form.Select
                        name="elevehicle"
                        value={formData.elevehicle || ""}
                        onChange={handleInputChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex registration-btns">
                  {/* ADD VEHICLE kept as submit; form handler will ignore it unless REGISTER clicked */}
                  {/* <Button variant="primary" type="submit" className="me-3 primary-btn">
                    ADD VEHICLE
                  </Button>
                  <Link to="/login" className="btn btn-secondary secondary-btn">
                    REMOVE
                  </Link> */}
                </div>

                <hr />

                <h5 className="section-title">Notification Settings</h5>

                <div className="notificatin-text">
                  <p>
                    Subscribe to the following communication options by
                    selecting the appropriate checkbox
                  </p>
                  <h6>
                    I would like to receive communication relating to my
                    reservation:
                  </h6>
                  <span>(Must select at least one option)</span>
                  <div className="d-flex checkbox-group">
                    {/* IDs kept as in your UI; names omitted in original so we read by id */}
                    <Form.Check type="checkbox" id="email" label="Via Email" />
                    <Form.Check type="checkbox" id="sms" label="Via SMS" />
                  </div>

                  <div className="d-flex registration-btns">
                    <Button
                      variant="primary"
                      type="submit"
                      className="primary-btn"
                    >
                      REGISTER
                    </Button>
                  </div>

                  {errors.notifications && (
                    <div className="text-danger">{errors.notifications}</div>
                  )}

                  <p className="mb-32">
                    By registering, you agree to DropNPark
                    <br />
                    <Link to="">Terms & Conditions</Link> and{" "}
                    <Link to="">Privacy Policy</Link>.
                  </p>
                  <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
