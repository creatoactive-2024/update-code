import React, { useEffect, useRef, useState } from 'react';
import "../scss/Dashboard.scss"
import { BsCheck2Circle } from "react-icons/bs";
import TableData from '../components/TableData';
import Topbar from '../components/Topbar';
const Dashboard: React.FC = () => {

const Departure = [
    {
      "id": 1,
      "num": 32,
      "condition": "Pending",
      "bc": "#BFE2FF"
    },
    {
      "id": 2,
      "num": 32,
      "condition": "Ready",
      "bc": "#D5FFB1"
    },
    {
      "id": 3,
      "num": 32,
      "condition": "Saved",
      "bc": "#C2CCFF"
    },
    {
      "id": 4,
      "num": 32,
      "condition": "Started",
      "bc": "#E3BFFF"
    },
    {
      "id": 5,
      "num": 3,
      "condition": "Driver Not Assigned",
      "bc": "#FF543E"
    }
  ]

  const Back = [
    {
      "id": 1,
      "num": 54,
      "condition": "Pending",
      "bc": "#BFE2FF"
    },
    {
      "id": 2,
      "num": 0,
      "condition": "Ready",
      "bc": "#D5FFB1"
    },
    {
      "id": 3,
      "num": 24,
      "condition": "Saved",
      "bc": "#C2CCFF"
    },
    {
      "id": 4,
      "num": 32,
      "condition": "Started",
      "bc": "#E3BFFF"
    },
    {
      "id": 1,
      "num": 3,
      "condition": "Driver Not Assigned",
      "bc": "#FF543E"
    }
  ]

  const Capacity = [
    {
      "id": 1,
      "num": 100,
      "condition": "Total Capacity",
      "bc": "#7CFFCB"
    },
    {
      "id": 2,
      "num": 85,
      "condition": "Occupied",
      "bc": "#7CFFCB"
    },
    {
      "id": 3,
      "num": 24,
      "condition": "Available",
      "bc": "#7CFFCB"
    },
    {
      "id": 4,
      "num": <BsCheck2Circle />,
      "condition": "Available",
      "bc": "#7CFFCB"
    },

  ]



  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  // get days for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrev = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNext = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    const newSelected = new Date(year, month, day);
    setSelectedDate(newSelected);
    setShowCalendar(false);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <Topbar/> */}

      <div className="deperture-blocks-wrap">
        <div className="dep-blks-wrap">
          <h4>Departure </h4>
        <div className="dep-blocks">
          {
            Departure.map((item, index) => (
              <div className="four-blocks" style={{ backgroundColor: item.bc }} key={item.id}>
                <h4>{item.num}</h4>
                <p>{item.condition}</p>
              </div>
            ))
          }
        </div>
        </div>
        <div className="dep-blks-wrap">
          <h4>Return </h4>
        <div className="dep-blocks">
          {
            Back.map((item, index) => (
              <div className="four-blocks" style={{ backgroundColor: item.bc }} key={item.id}>
                <h4>{item.num}</h4>
                <p>{item.condition}</p>
              </div>
            ))
          }
        </div>
        </div>
        <div className="dep-blks-wrap">
          <h4>Parking Capacity Status </h4>
        <div className="dep-blocks-last">
          <div className="avilable">
            {
              Capacity.map((item, index) => (
                <div className="four-blocks" style={{ backgroundColor: item.bc }} key={item.id}>
                  <h4>{item.num}</h4>
                  <p>{item.condition}</p>
                </div>

              ))
            }
          </div>
          <div className="checkbox-container">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Stop taking online booking
            </label>
          </div>
        </div>
        </div>
      </div>

      <TableData/>

    </div>
  );
};

export default Dashboard;
