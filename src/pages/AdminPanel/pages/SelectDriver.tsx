import React from 'react'

import FileUpload from './FileUpload';
import { useNavigate } from 'react-router-dom';

const SelectDriver: React.FC = () => {
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
    <div className='drivers-blog-wrap'>
        <div className='dirvers-blogs'>
          <h2><span className='profile-name'>GP</span>Gafoor Pathan</h2>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
        <div className='dirvers-blogs'>
          <h2><span className='profile-name'>JC</span>Johnny Cage</h2>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
        <div className='dirvers-blogs'>
          <h2><span className='profile-name'>BC</span>Ben Cutting</h2>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
        <div className='dirvers-blogs'>
          <h2><span className='profile-name'>JS</span>Jaspreet Singh</h2>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
        <div className='dirvers-blogs'>
          <div className='tag-wrap'>
            <h2><span className='profile-name'>JS</span>Jaspreet Singh</h2>
            <span className='tagg'>New</span>
          </div>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
        <div className='dirvers-blogs'>
          <div className='tag-wrap'>
            <h2><span className='profile-name'>JS</span>Jaspreet Singh</h2>
            <span className='tagg'>New</span>
          </div>
          <div className='task-wrap'>
          <p><span>Assigned Tasks:</span><span>3</span></p>
          <p><span>Active Tasks:</span><span>2</span></p>
          <p><span>Completed Tasks:</span><span>37</span></p>
          </div>
        </div>
    </div>
    </>
  )
}

export default SelectDriver