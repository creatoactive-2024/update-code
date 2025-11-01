import React from 'react'
import "./AddNewDriver.scss";
import FileUpload from './FileUpload';

const AddNewDriver: React.FC = () => {
  return (
    <div className='new-booking-wrap'>
       <h3>* Mandatory fields</h3> 
       <form>

    

    <h2 className='form-inner-headings'>Your Information</h2>
    <div className="form-gridd">
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
    <div className="form-gridd">
      <div className="form-group">
        <label htmlFor="firstName">Email Address *</label>
        <input type="Email" id="Email" name="Email" placeholder='Enter your email address'/>
      </div>

      <div className="form-group">
        <label htmlFor="Mobileno">Mobile Number *</label>
        <input type="text" id="Mobile No" name="lastName" placeholder='Enter your mobile number'/>
      </div>

      <div className="form-group">
        <label htmlFor="Mobileno">Driver License Number *</label>
        <input type="text" id="Mobile No" name="lastName" placeholder='DL123456789'/>
      </div>
    </div>

    <h2 className='form-inner-headings'>Upload Driver License (JPG/PDF)</h2>
    <FileUpload/>

    <div className="form-gridd">
      <div className="form-group"><button type="submit" className="submit-btn">REGISTER</button></div>
    </div>


      
    </form>
    </div>
  )
}

export default AddNewDriver