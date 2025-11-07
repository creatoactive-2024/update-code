import React, { useState } from "react";

import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import FileUpload from './FileUpload';
import { useNavigate } from 'react-router-dom';
import Edit from '../../../img/edit-blue.svg';
import Delete from '../../../img/delete-red.svg';
interface Booking {
  id: number;
  date: string;
  tb: number;
  dropo: number;
  picku: number;
  eraning: string;

}

type SortDirection = "asc" | "desc" | null;

const Coupons: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    alert("Supervisor deleted!");
    closeModal();
  };


     // Mock data
  const [data, setData] = useState<Booking[]>([
    {
      id: 1,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 2,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 3,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 4,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 5,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 6,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 7,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
    {
      id: 8,
      date: "Thu, Oct 09, 2025",
      tb: 23,
      dropo: 70,
      picku: 6,
      eraning:"$4,250.00"
 
    },
  ]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof Booking | null; direction: SortDirection }>({
    key: null,
    direction: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sorting logic
  const handleSort = (key: keyof Booking) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    else if (sortConfig.key === key && sortConfig.direction === "desc") direction = null;

    setSortConfig({ key: direction ? key : null, direction });

    if (direction) {
      const sorted = [...data].sort((a, b) => {
        const valA = String(a[key]).toLowerCase();
        const valB = String(b[key]).toLowerCase();
        if (valA < valB) return direction === "asc" ? -1 : 1;
        if (valA > valB) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setData(sorted);
    } else {
      setData([...data]); // reset to original order (for simplicity)
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getSortIcon = (key: keyof Booking) => {
    if (sortConfig.key !== key) return <FaSort />;
    if (sortConfig.direction === "asc") return <FaSortUp />;
    if (sortConfig.direction === "desc") return <FaSortDown />;
    return <FaSort />;
  };


  const headers: { label: string; key: keyof Booking | "actions" }[] = [
    // { label: "No", key: "id" },
    { label: "Date", key: "date" },
    { label: "Total Bookings", key: "tb" },
    { label: "Drop-offs", key: "dropo" },
    { label: "Pick-ups", key: "picku" },
    { label: "Earnings", key: "eraning" },
    // { label: "ACTIONS", key: "actions" },
    
  ];

    const navigate = useNavigate();
    const goToAbout = () => navigate("/admin/add-driver");
  return (
    <>
    <div className='select-driver-wrap'>
    <h2 className='driver-inner-headings'>Coupon Management<br/><span>Create and manage discount coupons</span></h2>
    <button onClick={goToAbout} className="open-modal-btn">
          + Add New Booking
        </button>
    </div>
    <div className="coupons-dashboard-wrap">
      <div className="coupons-dash-blocks"><h4>5</h4><p>Total Coupons</p></div>
      <div className="coupons-dash-blocks"><h4>4</h4><p>Active</p></div>
      <div className="coupons-dash-blocks"><h4>1</h4><p>Expired</p></div>
      <div className="coupons-dash-blocks"><h4>0</h4><p>Deactivated</p></div>
    </div>
    <div className="booking-table-container">
      <div className="table-wrapper">
        <table className="booking-table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h.label} onClick={() => h.key !== "actions" && handleSort(h.key as keyof Booking)}>
                  <span>{h.label}</span>
                  {/* {h.key !== "actions" && <span className="sort-icon">{getSortIcon(h.key as keyof Booking)}</span>} */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id}>
                {/* <td>{row.id}</td> */}
                <td>{row.date}</td>
                <td>{row.tb}</td>
                <td>{row.dropo}</td>
                <td>{row.picku}</td>
                <td>{row.eraning}</td>
     

                {/* <td>
                  <button className="action-btn">{<img src={Edit}/>}</button>
                  <button className="action-btn delete" onClick={openModal}>{<img src={Delete}/>}</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
          >
            <h2 className="modal__title">Delete Supervisor</h2>
            <p className="modal__text">
              Are you sure you want to delete this supervisor?
              <br />
              <span>This action cannot be undone.</span>
            </p>
            <div className="modal__actions">
              <button className="btn cancel" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Pagination */}
      {/* <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
    </div>
    </>
  )
}

export default Coupons