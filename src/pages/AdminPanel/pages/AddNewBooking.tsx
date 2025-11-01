import React from 'react'
import "./AddNewBooking.scss";
import Calender from '../components/Calender';
const AddNewBooking: React.FC = () => {
  return (
    <div className='new-booking-wrap'>
       <h3>* Mandatory fields</h3> 
       <form>

    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="firstName">Airport Name *</label>
        <input type="text" id="firstName" name="firstName" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Drop Off Date and Time *</label>
        <Calender/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Pick Up Date and Time *</label>
        <Calender/>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Service</label>
        <input type="tel" id="phone" name="phone" />
      </div>
    </div>

    <h2 className='form-inner-headings'>Your Information</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input type="text" id="firstName" name="firstName" placeholder='Enter your first name' />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input type="text" id="lastName" name="lastName" placeholder='Enter your Last name'/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Postal Code *</label>
         <input type="text" id="lastName" name="lastName" placeholder='Enter your Postal Code'/>
      </div>
    </div>

    <h2 className='form-inner-headings'>Sign In Information</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="firstName">Email Address *</label>
        <input type="Email" id="Email" name="Email" placeholder='Enter your email address'/>
      </div>

      <div className="form-group">
        <label htmlFor="Mobileno">Mobile Number *</label>
        <input type="text" id="Mobile No" name="lastName" placeholder='Enter your Mobile Number'/>
      </div>
    </div>

    <h2 className='form-inner-headings'>Vehicle Information</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="firstName">Make *</label>
        <div className="select-container">
      <div className="select-wrapper">
        <select id="language" className="custom-select">
          <option value="">Select an option</option>
          <option value="a">--</option>
          <option value="b">--</option>
          <option value="c">--</option>
          <option value="">--</option>
        </select>
        <span className="arrow"></span>
      </div>
    </div>
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Type *</label>
        <select name="keySpotValue">
            <option value="">Type</option>
            <option value="a">-</option>
            <option value="b">-</option>
            <option value="c">-</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Color *</label>
        <select name="keySpotValue">
            <option value="">Color</option>
            <option value="a">-</option>
            <option value="b">-</option>
            <option value="c">-</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Is this an electric vehicle? *</label>
       <select name="keySpotValue">
            <option value="">Is this an electric vehicle? </option>
            <option value="a">-</option>
            <option value="b">-</option>
            <option value="c">-</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">License Plate *</label>
        <input type="text" id="lastName" name="License Plate" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Province / State *</label>
        <select name="keySpotValue">
            <option value="">Province / State </option>
            <option value="a">-</option>
            <option value="b">-</option>
            <option value="c">-</option>
        </select>
      </div>
    <div className="form-group">
      <button type="submit" className="submit-btn add-vechicle">ADD VEHICLE</button>
    </div>
    <div className="form-group for-logout"><p>Remove</p></div>
    </div>

    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="firstName">Booking Platform</label>
        <input type="text" id="firstName" name="firstName" />
      </div>

      <div className="form-group">
        &nbsp;
      </div>
       <div className="form-group">
        
        <label htmlFor="firstName">Zero Cost</label>
        <div className='checks-wrap'>
            <div className="checkbox-container">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Yes
            </label>
          </div>

          <div className="checkbox-container">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Yes
            </label>
          </div>
          </div>
      </div>
      <div className="form-group">
        &nbsp;
      </div>
      <div className="form-group"><button type="submit" className="submit-btn">Submit</button></div>
    </div>


      
    </form>
    </div>
  )
}

export default AddNewBooking