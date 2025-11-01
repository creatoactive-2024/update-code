import React, { useState } from "react";
// import Calender from './Calender';

import { tableData } from './../../../data/data.js';
import Calender from "./Calender";
import ModelForm from "./ModelForm";
import Serc from '../image/search.svg'
import './TableData.scss'
import { NavLink, useNavigate } from "react-router-dom";


function TableData() {
  const [data, setData] = useState(tableData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
   const [isModalOpen, setIsModalOpen] = useState(false);

  const rowsPerPage = 5;

  const sortTable = (key: keyof tableData) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const columns = [
    { key: "no", label: "No" },
    { key: "client", label: "Client" },
    { key: "airport", label: "Airport" },
    { key: "driver", label: "Driver" },
    { key: "type", label: "Type" },
    { key: "datetime", label: "Date & Time" },
    { key: "status", label: "Status" },
    { key: "service", label: "SERVICE" },
    
    { key: "parkingSpot", label: "Parking Spot" },
    { key: "keyspot", label: "Key Spot" },
    { key: "addons", label: "Add Ons" },
    { key: "cardet", label: "CAR DETAILS" },
    { key: "actions", label: "ACTIONS" },
  ];

   const initialData = {
    name: 'John Doe',
    pn: '0000000000',
    an: 'mumbai',
    dn: 'jack',
    cd: 'Make/Color/License Plate',

  };

   const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/admin/add-booking");
  };

   const newDriverOne = () => {
    navigate("/admin/add-driver");
  };

   const newDriverTwo = () => {
    navigate("/admin/add-supervisor");
  };
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false); // Close modal on submit
  };

  

  return (
    <>
    <div className="calender-wrap">
    <div className="search-wrap-table">
    <Calender/>
    <div className="search-wrap-t">
      <img src={Serc}/>
      <input type="text" placeholder="search" className="search-bx"/>
    </div>
    </div>


    
<button onClick={goToAbout} className="open-modal-btn">+ Add New Booking</button>
{/* <button onClick={newDriverOne} className="open-modal-btn">+ Add New Driver</button>
<button onClick={newDriverTwo} className="open-modal-btn">+ Add New Supervisor</button> */}


    {/* <button onClick={handleOpenModal} className="open-modal-btn">
       + Add New Booking
      </button>
      
    
      <ModelForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        initialData={initialData}
      /> */}
    </div>

    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => sortTable(col.key)}>
                {col.label}
                <span className={`arrow ${sortConfig.key === col.key ? sortConfig.direction : ""}`}>
                  ▲
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>


  
          {currentRows.map((row) => (
            <tr key={row.no}>
              <td>{row.no}</td>
              <td>{row.client}</td>
              <td>{row.airport}</td>
              <td>{row.driver}</td>
              <td>{row.type}</td>
              <td>{row.datetime}</td>
              <td>{row.status}</td>
              <td>{row.service}</td>
              <td>{row.parkingSpot}</td>
              <td>{row.keyspot}</td>
              <td>{row.addons}</td>
              <td>{row.cardet}</td>
              <td>{row.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>

    </>
  );
}

export default TableData;
