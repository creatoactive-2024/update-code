import React, { useState } from "react";

import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import FileUpload from './FileUpload';
import { useNavigate } from 'react-router-dom';
// import Edit from '../../../img/edit-blue.svg';
// import Delete from '../../../img/delete-red.svg';
interface Booking {
  id: number;
  cname: string;
  emailaddress: string;
  mobile: number;
  driverli: string;

}

type SortDirection = "asc" | "desc" | null;

const SelectSupervisor: React.FC = () => {
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
      cname: "Mujahid Shaikh",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
 
    },
    {
      id: 2,
      cname: "Aman Sandhu",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 3,
      cname: "Rohit Sharma",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 4,
      cname: "Ms Dhoni",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 5,
      cname: "Jorden Cox",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 6,
      cname: "ian ward",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 7,
      cname: "Jock Itch",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
    },
    {
      id: 8,
      cname: "Ricky Martin",
      emailaddress: "Mujahid.shaikh@gmail.com",
      mobile: 9995552223,
      driverli: "D6101 - 40706 - 60905",
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
    { label: "NAME", key: "cname" },
    { label: "EMAIL ADDRESS", key: "emailaddress" },
    { label: "MOBILE", key: "mobile" },
    { label: "DRIVER LICENCE NUMBER", key: "driverli" },
    { label: "ACTIONS", key: "actions" },
    
  ];

    const navigate = useNavigate();
    const goToAbout = () => navigate("/admin/add-driver");
  return (
    <>
    <div className='select-driver-wrap'>
    <h2 className='driver-inner-headings'>Select Supervisor</h2>
    <button onClick={goToAbout} className="open-modal-btn">
          + Add New Booking
        </button>
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
                <td>{row.cname}</td>
                <td>{row.emailaddress}</td>
                <td>{row.mobile}</td>
                <td>{row.driverli}</td>
     

                <td>
                  {/* <button className="action-btn">{<img src={Edit}/>} edit</button>
                  <button className="action-btn delete" onClick={openModal}>{<img src={Delete}/>} delet</button> */}
                  <button className="action-btn"> edit</button>
                  <button className="action-btn delete" onClick={openModal}> delet</button>
                </td>
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

export default SelectSupervisor