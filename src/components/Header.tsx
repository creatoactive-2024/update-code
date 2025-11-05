import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import hp1 from "../img/hp1.svg";
import hp2 from "../img/hp2.svg";
import hp3 from "../img/hp3.svg";
import menuIcon from "../img/mobile-menu.svg"; // your hamburger image
import closeIcon from "../img/close.svg"; // your close icon

const Header: React.FC = () => {
  const [user, setUser] = useState<any>(null);
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
    navigate("/signin"); // redirect to sign-in page
  };

  const userName = user ? `${user.firstName || ""} ${user.lastName || ""}`.trim() : "";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <Navbar bg="white" expand="md" className="shadow-sm mobile-navbar">
        <Container>
          <a className="menu-btn" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu toggle" />
          </a>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <img src={logo} alt="Drop N Park" />
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls="nav" /> */}
          <div >
          <Navbar.Collapse id="nav" className={`menu-bar mobile-menu left ${isOpen ? "open" : ""}`}>
            <a className="close-btn" onClick={() => setIsOpen(false)}>
              <img src={closeIcon} alt="close menu" />
            </a>
            <Nav className="mx-auto" >
              {/* <NavDropdown title="Locations" id="nav-dropdown-locations" className="nav-dropdown-locations">
                <NavDropdown.Item as={Link} to="/location">
                  Toronto
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/location">
                  Vancouver
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/location">
                  ottawa
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link as={Link} to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Nav.Link> */}
              <Nav.Link as={Link} to="/" onClick={() => setIsOpen(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/faq" onClick={() => setIsOpen(false)}>
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/help" onClick={() => setIsOpen(false)}>
                Help
              </Nav.Link> */}
              
              <Nav.Link as={Link} to="/signin" className="d-block d-md-none" onClick={() => setIsOpen(false)}>
                login/sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>

          {/* ✅ Conditionally show profile or sign-in button */}
          {!user ? (
            <Button as={Link} to="/signin" variant="outline-primary" className="main-button">
              LOGIN/SIGN UP
            </Button>
          ) : (
            <Dropdown className="user-dropdown ms-2">
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-toggle-custom">
                <div className="user-info">
                  <div className="avatar">
                    {userName ? userName.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div>
                    <h6 className="user-name">{userName || "User"}</h6>
                    <span className="user-role">{user.role || "Customer"}</span>
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/myprofile">
                  <img src={hp1} alt="profile" /> My Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/mybooking">
                  <img src={hp2} alt="book" /> My Booking
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="signout" onClick={handleSignOut}>
                  <img src={hp3} alt="signout" /> Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
