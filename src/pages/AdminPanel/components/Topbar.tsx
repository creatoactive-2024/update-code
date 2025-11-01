import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./TopBar.scss";
const Topbar: React.FC = () => {
  return (
    <div className='dep-wrap'>
        <div className='depurture-button'>Departure and Return Statistics</div>
        <button className='user-button'>NS</button>
      </div>)
}

export default Topbar;
