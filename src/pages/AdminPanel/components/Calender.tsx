import React, { useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import  "./Calender.scss";
import Cal from '../image/calender.svg'
const Calender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker | null>(null);

  const handleIconClick = () => {
    datePickerRef.current?.setFocus();
  };

  return (
    <div className="calendar-input">
      <div className="calendar-wrapper">
        <DatePicker
          ref={datePickerRef}
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="dd-mm-yyyy"
          className="input-field"
          calendarClassName="custom-datepicker"
          popperPlacement="bottom-start"
        />
        <span className="calendar-icon" onClick={handleIconClick}>
         <img src={Cal} alt="cal"/>
        </span>
      </div>
    </div>
  );
};

export default Calender;
