import React, { useEffect, useRef, useState } from "react";

// import { FaCaretDown, FaPencilAlt } from "react-icons/fa";

import View from '../../../img/view.svg';
import Edit from '../../../img/edit.svg';
import { Form, Button, Container, Row, Col, Alert, Spinner, Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import baseURL from "../../utils/baseURL";

interface Coupon {
  _id: string;
  code: string;
  description: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  maxDiscount: number | null;
  minBookingAmount: number;
  firstTimeCustomersOnly: boolean;
  validDays: number[];
  validForArrival: boolean;
  cannotCombine: boolean;
  notValidWithLongTerm: boolean;
  usageLimit: string;
  totalUsageCount: number;
  isActive: boolean;
  validFrom: string;
  validUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

const Coupons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    alert("Supervisor deleted!");
    closeModal();
  };

  // Coupon form state
  const [formData, setFormData] = useState({
    _id: "",
    code: "",
    description: "",
    discountType: "percentage" as "percentage" | "fixed",
    discountValue: "",
    maxDiscount: "",
    minBookingAmount: "0",
    firstTimeCustomersOnly: false,
    cannotCombine: true,
    usageLimit: "one-time",
    validFrom: "",
    validUntil: "",
    weekdays: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loadingCoupons, setLoadingCoupons] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);

  // Fetch coupons on component mount
  useEffect(() => {
    fetchCoupons();
  }, []);

  // Fetch coupons from API
  const fetchCoupons = async () => {
    try {
      setLoadingCoupons(true);
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await fetch(`${baseURL}/api/users/getcoupons`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok && data.coupons) {
        setCoupons(data.coupons);
      } else {
        console.error("Failed to fetch coupons:", data.message);
      }
    } catch (err) {
      console.error("Error fetching coupons:", err);
    } finally {
      setLoadingCoupons(false);
    }
  };

  // Utility: Detect click outside
  function useClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {
      function listener(e: MouseEvent) {
        if (!ref.current || ref.current.contains(e.target as Node)) return;
        handler();
      }
      document.addEventListener("mousedown", listener);
      return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
  }

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, () => {
    handleCloseModal();
  });

  const handleCloseModal = () => {
    setOpen(false);
    setEditingCoupon(null);
    // Reset form when closing
    setFormData({
      _id: "",
      code: "",
      description: "",
      discountType: "percentage",
      discountValue: "",
      maxDiscount: "",
      minBookingAmount: "0",
      firstTimeCustomersOnly: false,
      cannotCombine: true,
      usageLimit: "one-time",
      validFrom: "",
      validUntil: "",
      weekdays: false,
    });
    setError(null);
    setSuccess(null);
  };

  // Handle edit button click
  const handleEdit = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    
    // Check if weekend days (Friday, Saturday, Sunday = [5, 6, 0])
    const isWeekend = coupon.validDays.length === 3 && 
      coupon.validDays.includes(5) && 
      coupon.validDays.includes(6) && 
      coupon.validDays.includes(0);

    // Format dates for datetime-local input
    const formatDateForInput = (dateString: string | null) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    setFormData({
      _id: coupon._id,
      code: coupon.code,
      description: coupon.description || "",
      discountType: coupon.discountType,
      discountValue: coupon.discountValue.toString(),
      maxDiscount: coupon.maxDiscount ? coupon.maxDiscount.toString() : "",
      minBookingAmount: coupon.minBookingAmount.toString(),
      firstTimeCustomersOnly: coupon.firstTimeCustomersOnly,
      cannotCombine: coupon.cannotCombine,
      usageLimit: coupon.usageLimit,
      validFrom: formatDateForInput(coupon.validFrom),
      validUntil: formatDateForInput(coupon.validUntil),
      weekdays: isWeekend,
    });
    setOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!formData.code.trim()) {
      setError("Coupon code is required");
      return;
    }
    if (!formData.discountValue || parseFloat(formData.discountValue) <= 0) {
      setError("Discount value must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication required. Please login again.");
        setLoading(false);
        return;
      }

      // Prepare request body
      const requestBody: any = {
        code: formData.code.trim().toUpperCase(),
        description: formData.description.trim(),
        discountType: formData.discountType,
        discountValue: parseFloat(formData.discountValue),
        minBookingAmount: parseFloat(formData.minBookingAmount) || 0,
        firstTimeCustomersOnly: formData.firstTimeCustomersOnly,
        cannotCombine: formData.cannotCombine,
        usageLimit: formData.usageLimit,
      };

      // Add _id if editing
      if (editingCoupon && formData._id) {
        requestBody._id = formData._id;
      }

      // Add maxDiscount only if provided
      if (formData.maxDiscount && parseFloat(formData.maxDiscount) > 0) {
        requestBody.maxDiscount = parseFloat(formData.maxDiscount);
      }

      // Add validFrom if provided
      if (formData.validFrom) {
        requestBody.validFrom = new Date(formData.validFrom).toISOString();
      }

      // Add validUntil if provided
      if (formData.validUntil) {
        requestBody.validUntil = new Date(formData.validUntil).toISOString();
      }

      // Handle weekdays (validDays) - if checked, set to Friday, Saturday, Sunday
      if (formData.weekdays) {
        requestBody.validDays = [5, 6, 0]; // Friday (5), Saturday (6), Sunday (0)
      }

      const response = await fetch(`${baseURL}/api/users/couponAU`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create coupon");
      }

      // Success
      setSuccess(data.message || (editingCoupon ? "Coupon updated successfully!" : "Coupon created successfully!"));
      
      // Refresh coupon list
      await fetchCoupons();
      
      // Reset form
      setFormData({
        _id: "",
        code: "",
        description: "",
        discountType: "percentage",
        discountValue: "",
        maxDiscount: "",
        minBookingAmount: "0",
        firstTimeCustomersOnly: false,
        cannotCombine: true,
        usageLimit: "one-time",
        validFrom: "",
        validUntil: "",
        weekdays: false,
      });
      setEditingCoupon(null);

      // Close modal after 2 seconds
      setTimeout(() => {
        setOpen(false);
        setSuccess(null);
      }, 2000);

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Get coupon status
  const getCouponStatus = (coupon: Coupon) => {
    if (!coupon.isActive) return "Inactive";
    
    const now = new Date();
    const validFrom = new Date(coupon.validFrom);
    const validUntil = coupon.validUntil ? new Date(coupon.validUntil) : null;

    if (now < validFrom) return "Upcoming";
    if (validUntil && now > validUntil) return "Expired";
    return "Active";
  };

  // Format discount display
  const formatDiscount = (coupon: Coupon) => {
    if (coupon.discountType === "percentage") {
      return `${coupon.discountValue}%`;
    }
    return `$${coupon.discountValue.toFixed(2)}`;
  };

  return (
    <>
      <div className='select-driver-wrap'>
        <h2 className='driver-inner-headings'>Coupon Management<br /><span>Create and manage discount coupons</span></h2>
        <button onClick={() => setOpen(true)} className="open-modal-btn">
          + Create New Coupon
        </button>

        {open && (
          <div className="modal-overlay-coupon">
            <div className="modal-box-admin" ref={modalRef}>
              <h2 className="modal-title">{editingCoupon ? "Edit Coupon" : "Create Coupon"}</h2>

              {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
              {success && <Alert variant="success" className="mb-3">{success}</Alert>}

              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Coupon Code *</Form.Label>
                      <Form.Control
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleInputChange}
                        placeholder="eg. SAVE50"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Discount Type *</Form.Label>
                      <div className="select-box">
                        <select
                          name="discountType"
                          value={formData.discountType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="percentage">Percentage</option>
                          <option value="fixed">Fixed Amount</option>
                        </select>
                        <img src={View} alt="dropdown" className="caret-icon" />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>
                        Discount Value {formData.discountType === "percentage" ? "(%)" : "($)"} *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="discountValue"
                        value={formData.discountValue}
                        onChange={handleInputChange}
                        placeholder={formData.discountType === "percentage" ? "eg. 20" : "eg. 50"}
                        min="0"
                        step="0.01"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Maximum Discount Amount ($)</Form.Label>
                      <Form.Control
                        type="number"
                        name="maxDiscount"
                        value={formData.maxDiscount}
                        onChange={handleInputChange}
                        placeholder="eg. 100"
                        min="0"
                        step="0.01"
                      />
                      <Form.Text className="text-muted">
                        {formData.discountType === "percentage" 
                          ? "Maximum discount cap for percentage discounts" 
                          : "Leave empty for fixed amount discounts"}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Valid From</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="validFrom"
                        value={formData.validFrom}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Valid Until</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="validUntil"
                        value={formData.validUntil}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} lg={12}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Minimum Booking Amount ($)</Form.Label>
                      <Form.Control
                        type="number"
                        name="minBookingAmount"
                        value={formData.minBookingAmount}
                        onChange={handleInputChange}
                        placeholder="eg. 40"
                        min="0"
                        step="0.01"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <div className="checkbox-container">
                        <label className="custom-checkbox-coupon">
                          <input 
                            type="checkbox" 
                            className="check-bx"
                            name="weekdays"
                            checked={formData.weekdays}
                            onChange={handleInputChange}
                          />
                          <span className="checkmark"></span>
                          Weekend Only (Fri, Sat, Sun)
                        </label>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6} lg={6}>
                    <Form.Group className="custome-form-group">
                      <div className="checkbox-container">
                        <label className="custom-checkbox-coupon">
                          <input 
                            type="checkbox" 
                            className="check-bx"
                            name="firstTimeCustomersOnly"
                            checked={formData.firstTimeCustomersOnly}
                            onChange={handleInputChange}
                          />
                          <span className="checkmark"></span>
                          For New User Only
                        </label>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} lg={12}>
                    <Form.Group className="custome-form-group">
                      <Form.Label>Description (Optional)</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Brief description of the coupon"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} lg={6}>
                    <Button 
                      type="button"
                      className="cancel-btn" 
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col md={6} lg={6}>
                    <Button 
                      type="submit" 
                      className="submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Creating...
                        </>
                      ) : (
                        "Create Coupon"
                      )}
                    </Button>
                  </Col>
                </Row>





              </form>

            </div>
          </div>
        )}

      </div>
      <div className="coupons-dashboard-wrap">
        <div className="coupons-dash-blocks"><h4>5</h4><p>Total Coupons</p></div>
        <div className="coupons-dash-blocks"><h4>4</h4><p>Active</p></div>
        <div className="coupons-dash-blocks"><h4>1</h4><p>Expired</p></div>
        <div className="coupons-dash-blocks"><h4>0</h4><p>Deactivated</p></div>
      </div>
      <div className="booking-table-container">
        <div className="table-wrapper">
          {loadingCoupons ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Table bordered hover responsive className="booking-table">
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Description</th>
                  <th>Discount</th>
                  <th>Min Purchase</th>
                  <th>Valid From</th>
                  <th>Valid To</th>
                  <th>Maximum Discount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {coupons.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="text-center py-4">
                      No coupons found. Create your first coupon!
                    </td>
                  </tr>
                ) : (
                  coupons.map((coupon) => {
                    const status = getCouponStatus(coupon);
                    return (
                      <tr key={coupon._id}>
                        <td><strong>{coupon.code}</strong></td>
                        <td>{coupon.description || "-"}</td>
                        <td>{formatDiscount(coupon)}</td>
                        <td>
                          {coupon.minBookingAmount > 0 
                            ? `$${coupon.minBookingAmount.toFixed(2)}` 
                            : "-"}
                        </td>
                        <td>{formatDate(coupon.validFrom)}</td>
                        <td>{formatDate(coupon.validUntil)}</td>
                        <td>
                          {coupon.maxDiscount 
                            ? `$${coupon.maxDiscount.toFixed(2)}` 
                            : "-"}
                        </td>
                        <td>
                          <span 
                            className={`badge ${
                              status === "Active" 
                                ? "bg-success" 
                                : status === "Expired" 
                                ? "bg-danger" 
                                : status === "Upcoming"
                                ? "bg-warning"
                                : "bg-secondary"
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button 
                              className="action-btn"
                              onClick={() => handleEdit(coupon)}
                              title="Edit"
                            >
                              <img src={Edit} alt="Edit" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          )}
        </div>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
            >
              <h2 className="modal__title">Create Coupon</h2>
              <p className="modal__text">
                Are you sure you want to delete this supervisor?
                <br />
                <span>This action cannot be undone.</span>
              </p>
              <div className="modal__actions">
                <button className="btn cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button className="btn delete" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Pagination */}
        {/* <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
      </div>
    </>
  )
}

export default Coupons