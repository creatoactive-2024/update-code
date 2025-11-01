import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import AdminLogo from '../image/admin-logo.png';

import side1 from '../image/side-1.svg';
import side2 from '../image/side-2.svg';
import side3 from '../image/side-3.svg';
import side4 from '../image/side-4.svg';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar d-flex flex-column">
      <div className='logo-wrap'><img src={AdminLogo} alt='logo'/></div>
      <div className='nav-link-wrap'>
      <NavLink to="/admin/dashboard" className="nav-link"><img src={side1}/><p>Dashboard</p></NavLink>
      <NavLink to="/admin/users" className="nav-link"><img src={side1}/><p>Users</p></NavLink>
      <NavLink to="/admin/bookings" className="nav-link"><img src={side2}/><p>Bookings</p></NavLink>
      <NavLink to="/admin/reports" className="nav-link"><img src={side3}/><p>Reports</p></NavLink>
      <NavLink to="/admin/coupons" className="nav-link"><img src={side4}/><p>Coupons</p></NavLink>
      <NavLink to="/admin/add-booking" className="nav-link"><img src={side4}/><p>Add Booking</p></NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
