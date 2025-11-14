import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import logout from "../../img/logout-two.svg";
import filter from "../../img/filter.svg";
import driver1 from "../../img/driver-1.svg";
import driver2 from "../../img/driver-2.svg";
import driver3 from "../../img/driver-3.svg";
import driver4 from "../../img/driver-4.svg";
import user from "../../img/drivar/user.svg";
import time from "../../img/drivar/time.svg";
import location from "../../img/drivar/location.svg";
import call from "../../img/drivar/call.svg";
import plane from "../../img/drivar/plane.svg";
import car from "../../img/drivar/car.svg";
import color from "../../img/drivar/color.svg";
import text from "../../img/drivar/text.svg";
import accept from "../../img/drivar/done.svg";
import cancle from "../../img/drivar/cancel.svg";
import danger from "../../img/drivar/priority.svg";
import dropoff from "../../img/drivar/droppoff.svg";

interface Task {
  id: string;
  type: "Pick-Up" | "Drop-Off";
  icon: string;
  client: string;
  time: string;
  terminal: string;
  flight: string;
  call: string;
  vehicle: string;
  color: string;
  text: string;
  priority: "High" | "Normal" | "Low";
}

const DriverDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [priorityFilter, setPriorityFilter] = useState<string>("All");

  const stats = [
    { title: "Total Tasks", value: 8, color: "#2070FF", img: driver1 },
    { title: "Pick-Ups", value: 5, color: "#00BA48", img: driver2},
    { title: "Drop-Offs", value: 3, color: "#A435FF", img: driver3},
    { title: "High Priority", value: 4, color: "#F31928", img: driver4},
  ];

  const allTasks: Task[] = [
    {
      id: "TD001",
      type: "Pick-Up",
      icon: car,
      client: "Sarah Johnson",
      time: "2:30 PM",
      terminal: "Terminal A Gate A6",
      call: "+1 (555) 234-5678",
      flight: "UA 1234",
      vehicle: "Toyota Camry 2022",
      priority: "High",
      color: "silver",
      text: "ABC-1234",
    },
    {
      id: "TD002",
      type: "Drop-Off",
      icon: dropoff,
      client: "David Miller",
      time: "3:15 PM",
      terminal: "Terminal B Gate B2",
      call: "+1 (555) 234-5678",
      flight: "AA 5678",
      vehicle: "Honda Accord 2021 – Black",
      priority: "Normal",
      color: "silver",
      text: "ABC-1234",
    },
    {
      id: "TD003",
      type: "Pick-Up",
      icon: car,
      client: "Emily Carter",
      time: "4:05 PM",
      terminal: "Terminal C Gate C4",
      call: "+1 (555) 234-5678",
      flight: "DL 7890",
      vehicle: "Tesla Model 3 2023 – White",
      priority: "High",
      color: "silver",
      text: "ABC-1234",
    },
    {
      id: "TD004",
      type: "Drop-Off",
      icon: dropoff,
      client: "Jim Carry",
      time: "6:20 PM",
      terminal: "Terminal D Gate D5",
      call: "+1 (555) 234-5678",
      flight: "BA 7780",
      vehicle: "BMW M5 2022 – Silver",
      priority: "Low",
      color: "silver",
      text: "ABC-1234",
    },
  ];

  // Filter logic
  const filteredTasks = allTasks.filter((task) => {
    const matchTab =
      activeTab === "All" ? true : task.type.toLowerCase() === activeTab.toLowerCase();
    const matchPriority =
      priorityFilter === "All" ? true : task.priority === priorityFilter;
    return matchTab && matchPriority;
  });

  return (
    <div className="driver-dashboard">
      {/* Header */}
      <div className="headar-logo">
          <img src={logo} alt="logo" />
      </div>
      <Container className="">
        <Row>
        <div className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">JD</div>
          <div>
            <h5>Johnny Cage</h5>
            <p>Driver ID: DRV001</p>
          </div>
        </div>
        
        <Button className="logout-btn"> <img src={logout} alt="logout" />Logout</Button>
        </div>
        </Row>
      </Container>

      <Container>
        <Row>
      <div className="tab-row">
        
        <div className="filter-tabs">
          {["All", "Pick-Up", "Drop-Off"].map((tab) => (
            <Button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="header-actions">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="filter-btn">
              <img src={filter} alt="logout" /> Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setPriorityFilter("All")}>
                All Priorities
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriorityFilter("High")}>
                High Priority
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriorityFilter("Normal")}>
                Normal
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPriorityFilter("Low")}>
                Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          
        </div>

        </div>
          </Row>
        </Container>
        <Container className="my-bookings">
        <Row className="booking-dashboard">
          {stats.map((item, i) => (
          <Col xs={6} md={3}>
            <div className="stat-box total" style={{ backgroundColor: item.color }}>
              <div className='stat-info'>
                  <h5>{item.title}</h5>
                  <p>{item.value}</p>
              </div>
              <div className='state-icon state-icon-transparent'>
                <img src={item.img} alt="Total Bookings" />
              </div>
            </div>
          </Col>
              ))}
        </Row>

        {/* Task Section */}
        <section className="assigned-tasks">
          <h4>Assigned Tasks</h4>
          <Row>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, i) => (
                <Col md={6} lg={4} key={i}>
                  <div className={`task-card ${task.priority === "High" ? "high" : ""}`}>
                    <div className="task-card-blue">
                    <div className="task-header">
                      <div className="task-name">
                      <h6><img src={task.icon} className="task-icon" /> {task.type}</h6>
                      <p>Task ID: {task.id}</p>
                      </div>
                      <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                       <img src={danger} alt="priority" /> {task.priority}
                      </span>
                    </div>

                    <ul className="task-details">
                      <li><img src={user} alt="user" /> {task.client}</li>
                      <li><img src={time} alt="time" /> {task.time}</li>
                      <li><img src={location} alt="location" /> {task.terminal}</li>
                      <li><img src={call} alt="call" /> {task.call}</li>
                      <li><img src={plane} alt="plane" /> {task.flight}</li>
                    </ul>
                    </div>
                    <div className="task-card-orange">
                    <div className="vehicle-details">
                      <h6><img src={car} alt="car" /> Vehicle Details</h6>
                      <ul className="task-details">
                      <li><img src={car} alt="car" /> {task.vehicle}</li>
                      <li><img src={color} alt="color" /> {task.color}</li>
                      <li><img src={text} alt="location" /> {task.text}</li>
                    </ul>
                    </div>

                    <div className="action-buttons">
                      <Button variant="primary" className="accept" as={Link} to="/progresstask"><img src={accept} alt="accept" />Accept</Button>
                      <Button variant="outline-danger"><img src={cancle} alt="cancle" /> Reject</Button>
                    </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p className="no-tasks">No tasks found for this filter.</p>
            )}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default DriverDashboard;
