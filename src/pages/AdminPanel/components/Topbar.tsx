import React, { useState, useRef, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./TopBar.scss";
import logo from "../../../img/logo.png";
import hp1 from "../../../img/hp1.svg";
import hp2 from "../../../img/hp2.svg";
import hp3 from "../../../img/hp3.svg";

import lgt from "../../../img/logout.svg";
import prf from "../../../img/profile.svg";

import menuIcon from "../../../img/mobile-menu.svg"; // your hamburger image
import closeIcon from "../../../img/close.svg"; // your close icon
const Topbar: React.FC = () => {
    const [user, setUser] = useState<any>(null);
   
const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ✅ Define the ref here

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on link click
  const handleLinkClick = () => setIsOpen(false);


    const navigate = useNavigate();
    
      useEffect(() => {
        // Load user data from localStorage on mount
        const loadUserData = () => {
          const storedUser = localStorage.getItem("user");
          const firstName = localStorage.getItem("firstName");
          const lastName = localStorage.getItem("lastName");
          const role = localStorage.getItem("role");
    
          if (storedUser) {
            try {
              const parsedUser = JSON.parse(storedUser);
              setUser({
                ...parsedUser,
                firstName: parsedUser.firstName || firstName,
                lastName: parsedUser.lastName || lastName,
                role: parsedUser.role || role,
              });
            } catch {
              console.error("Invalid user data in localStorage");
              setUser(null);
            }
          } else if (firstName || lastName) {
            setUser({ firstName, lastName, role });
          } else {
            setUser(null);
          }
        };
    
        loadUserData();
      }, []); // runs once when header mounts
    
      // ✅ Logout functionality
      const handleSignOut = () => {
        localStorage.clear(); // clear all user data
        setUser(null); // instantly hide profile menu
        navigate("/admin/signin"); // redirect to sign-in page
      };
    
    
  return (
    <div className='dep-wrap'>
        <div className='depurture-button'>Departure and Return Statistics</div>
        <div className="site-header">
            <div className="container">
      <div className="dropdown" ref={dropdownRef}>
        <button className="dropdown-btn" onClick={toggleDropdown}>
          NS
        </button>

        <div className={`dropdown-admin-menu ${isOpen ? "open" : ""}`}>
          <div className="user-wrap">
            <h3>Nasir Shaikh</h3>
            <p>Nasirshaikh@gmail.com</p>
          </div>
          <div className="drop-content">
            <p><span><img src={prf}/></span> My Profile</p>
            <p 
            onClick={handleSignOut} 
            className="cursor-pointer flex items-center gap-2 hover:text-red-600"
          >
            <span><img src={lgt} alt="Logout" className="w-5 h-5" /></span> 
            Logout
          </p>
          </div>
          {/* <a href="#" onClick={handleLinkClick}>
            Profile
          </a>
          <a href="#" onClick={handleLinkClick}>
            Settings
          </a>
          <a href="#" onClick={handleLinkClick}>
            Logout
          </a> */}
        </div>
      </div>
    </div>
      </div>
      </div>)
}

export default Topbar;
