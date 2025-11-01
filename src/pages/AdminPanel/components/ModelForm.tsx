import React, { useEffect, useRef, useState } from "react";
import "./ModelForm.scss";
import Calender from "./Calender"; // Assuming this exists
import CalenderForm from "./CalenderForm";

// --- Types ---
interface FormData {
  name: string;
  pn: string;
  an: string;
  dn: string;
  cd: string;
  [key: string]: string; // allows dynamic keys for selects, etc.
}

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: Partial<FormData>;
}



// --- Component ---
const ModelForm: React.FC<ModalFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState<FormData>({
  name: "",
  pn: "",
  an: "",
  dn: "",
  cd: "",
});

  const modalRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {
  if (isOpen && initialData) {
    setFormData((prev) => ({ ...prev, ...initialData }));
  }
}, [isOpen, initialData]);

  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  // Handle input/select changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setSelectedOption(value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>Add New Drop-off/Pick Up Booking</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-wrap">
            {/* Client Name */}
            <div className="form-group">
              <label>Client name:</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                name="pn"
                value={formData.pn}
                onChange={handleChange}
                required
              />
            </div>

            {/* Airport Name */}
            <div className="form-group">
              <label>Airport Name:</label>
              <input
                name="an"
                value={formData.an}
                onChange={handleChange}
                required
              />
            </div>

            {/* Driver Name */}
            <div className="form-group">
              <label>Driver name:</label>
              <input
                name="dn"
                value={formData.dn}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service */}
            <div className="form-group">
              <label>Service:</label>
              <select name="service" value={selectedOption} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </select>
            </div>

            {/* Location */}
            <div className="form-group">
              <label>Location:</label>
              <div className="select-wrap">
                <select name="location1" value={formData.location1 || ""} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option value="loc1">Location 1</option>
                  <option value="loc2">Location 2</option>
                  <option value="loc3">Location 3</option>
                </select>
                <select name="location2" value={formData.location2 || ""} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option value="loc1">Location 1</option>
                  <option value="loc2">Location 2</option>
                  <option value="loc3">Location 3</option>
                </select>
              </div>
            </div>

            {/* Key Spot */}
            <div className="form-group">
              <label>Key Spott:</label>
              <div className="select-wrap">
                <select name="keySpotSize" value={formData.keySpotSize || ""} onChange={handleChange}>
                  <option value="">M</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <select name="keySpotValue" value={formData.keySpotValue || ""} onChange={handleChange}>
                  <option value="">175</option>
                  <option value="175">175</option>
                  <option value="180">180</option>
                  <option value="200">200</option>
                </select>
              </div>
            </div>

            {/* Car Details */}
            <div className="form-group">
              <label>Car Details:</label>
              <input
                name="cd"
                value={formData.cd}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date & Time */}
            <div className="form-group merge">
              <label>Date & Time:</label>
              <CalenderForm/>
            </div>

            {/* Buttons */}
            
          </div>
          <div className="button-wrap">
  
              <button type="button" onClick={onClose} className="submit-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit
              </button>
      
            </div>
        </form>
      </div>
    </div>
  );
};

export default ModelForm;
