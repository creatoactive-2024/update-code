import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import './Sidebar.scss';
import AdminLogo from '../image/admin-logo.png';

import side1 from '../image/side-1.svg';
import side2 from '../image/side-2.svg';
import side3 from '../image/side-3.svg';
import side4 from '../image/side-4.svg';

type DropdownKey = "userManagement" | "reports" | null;
const Sidebar: React.FC = () => {
   const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle dropdowns — only one open at a time
  const toggleDropdown = (menu: DropdownKey) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns when clicking a link
  const handleLinkClick = () => setOpenDropdown(null);
  return (
    // <nav className="sidebar d-flex flex-column">
    //   <div className='logo-wrap'><img src={AdminLogo} alt='logo'/></div>
    //   <div className='nav-link-wrap'>
    //   <NavLink to="/admin/dashboard" className="nav-link"><img src={side1}/><p>Dashboard</p></NavLink>
    //   <NavLink to="/admin/users" className="nav-link"><img src={side1}/><p>Users</p></NavLink>
    //   <NavLink to="/admin/bookings" className="nav-link"><img src={side2}/><p>Bookings</p></NavLink>
    //   <NavLink to="/admin/reports" className="nav-link"><img src={side3}/><p>Reports</p></NavLink>
    //   <NavLink to="/admin/coupons" className="nav-link"><img src={side4}/><p>Coupons</p></NavLink>
    //   <NavLink to="/admin/add-booking" className="nav-link"><img src={side4}/><p>Add Booking</p></NavLink>
    //   </div>
    // </nav>
     <div className="sidebar" ref={sidebarRef}>
      <div className='logo-wrap'><img src={AdminLogo} alt='logo'/></div>
      <ul className="sidebar__menu">
        {/* User Management */}
        <li className="sidebar__section">
          <button
            className="sidebar__item"
            onClick={() => toggleDropdown("userManagement")}
          >
            <span>User Management</span>
            <FaChevronDown
              className={`sidebar__icon ${
                openDropdown === "userManagement" ? "rotate" : ""
              }`}
            />
          </button>

          <ul
            className={`sidebar__submenu ${
              openDropdown === "userManagement" ? "open" : ""
            }`}
          >
            <li>
              <NavLink to="/admin/select-driver" onClick={handleLinkClick}>
                Driver
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/select-supervisor" onClick={handleLinkClick}>
                Supervisor
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Booking Management */}
        <li className="sidebar__section">
          <NavLink
            to="/admin"
            className="sidebar__item"
            onClick={handleLinkClick}
          >
            Booking Management
          </NavLink>
        </li>

        {/* Reports */}
        <li className="sidebar__section">
          <button
            className="sidebar__item"
            onClick={() => toggleDropdown("reports")}
          >
            <span>Reports</span>
            <FaChevronDown
              className={`sidebar__icon ${
                openDropdown === "reports" ? "rotate" : ""
              }`}
            />
          </button>

          <ul
            className={`sidebar__submenu ${
              openDropdown === "reports" ? "open" : ""
            }`}
          >
            <li>
              <NavLink to="/admin/driver-daily-report" onClick={handleLinkClick}>
                Driver Daily Report
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Coupons */}
        <li className="sidebar__section">
          <NavLink
            to="/admin/coupon-management"
            className="sidebar__item"
            onClick={handleLinkClick}
          >
            Coupons
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
