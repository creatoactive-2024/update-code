import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import hp1 from "../img/hp1.svg";
import hp2 from "../img/hp2.svg";
import hp3 from "../img/hp3.svg";

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

  return (
    <header className="site-header">
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <img src={logo} alt="Drop N Park" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav" className="menu-bar">
            <Nav className="mx-auto">
              <NavDropdown title="Locations" id="nav-dropdown-locations" className="nav-dropdown-locations">
                <NavDropdown.Item as={Link} to="/location">
                  Toronto
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/location/city-a">
                  Vancouver
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/location/city-b">
                  ottawa
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/help">
                Help
              </Nav.Link>
              <Nav.Link as={Link} to="/signin" className="d-block d-md-none">
                LOGIN/SIGN UP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

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
