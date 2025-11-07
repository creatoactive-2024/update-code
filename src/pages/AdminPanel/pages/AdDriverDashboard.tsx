import React from 'react'

import FileUpload from './FileUpload';
import { useNavigate } from 'react-router-dom';
import TableData from '../components/TableData';

const AdDriverDashboard: React.FC = () => {
    const navigate = useNavigate();
    const goToAbout = () => navigate("/admin/add-driver");
  return (
    <>
    <div className='select-driver-wrap'>
    <h2 className='driver-inner-headings'>Select Driver</h2>
    <button onClick={goToAbout} className="open-modal-btn">
          + Add New Booking
        </button>
    </div>
    <div className='drivers-dashboard-wrap'>
        
        <div className='dirvers-dash-blocks'>
          <h4>0</h4>
          <p>Pendings</p>
        </div>
        <div className='dirvers-dash-blocks'>
          <h4>1</h4>
          <p>In Progress</p>
        </div>
        <div className='dirvers-dash-blocks'>
          <h4>1</h4>
          <p>Completed Today</p>
        </div>
        
        
        
      
    </div>
    <TableData/>
    </>
  )
}

export default AdDriverDashboard