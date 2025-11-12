import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import logo from "../../img/logo.png";
import logout from "../../img/logout-two.svg";
import filter from "../../img/filter.svg";
import driver1 from "../../img/driver-1.svg";
import driver2 from "../../img/driver-2.svg";
import driver3 from "../../img/driver-3.svg";
import driver4 from "../../img/driver-4.svg";

interface Task {
  id: string;
  type: "Pick-Up" | "Drop-Off";
  client: string;
  time: string;
  terminal: string;
  flight: string;
  vehicle: string;
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
      client: "Sarah Johnson",
      time: "2:30 PM",
      terminal: "Terminal A Gate A6",
      flight: "UA 1234",
      vehicle: "Toyota Camry 2022 – Silver",
      priority: "High",
    },
    {
      id: "TD002",
      type: "Drop-Off",
      client: "David Miller",
      time: "3:15 PM",
      terminal: "Terminal B Gate B2",
      flight: "AA 5678",
      vehicle: "Honda Accord 2021 – Black",
      priority: "Normal",
    },
    {
      id: "TD003",
      type: "Pick-Up",
      client: "Emily Carter",
      time: "4:05 PM",
      terminal: "Terminal C Gate C4",
      flight: "DL 7890",
      vehicle: "Tesla Model 3 2023 – White",
      priority: "High",
    },
    {
      id: "TD004",
      type: "Drop-Off",
      client: "Jim Carry",
      time: "6:20 PM",
      terminal: "Terminal D Gate D5",
      flight: "BA 7780",
      vehicle: "BMW M5 2022 – Silver",
      priority: "Low",
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
                <Col md={4} key={i}>
                  <div className={`task-card ${task.priority === "High" ? "high" : ""}`}>
                    <div className="task-header">
                      <h6>{task.type}</h6>
                      <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </div>

                    <ul className="task-details">
                      <li><strong>Task ID:</strong> {task.id}</li>
                      <li><strong>Client:</strong> {task.client}</li>
                      <li><strong>Time:</strong> {task.time}</li>
                      <li><strong>Terminal:</strong> {task.terminal}</li>
                      <li><strong>Flight:</strong> {task.flight}</li>
                    </ul>

                    <div className="vehicle-details">
                      <h6>Vehicle Details</h6>
                      <p>{task.vehicle}</p>
                    </div>

                    <div className="action-buttons">
                      <Button variant="primary">Accept</Button>
                      <Button variant="outline-danger">Reject</Button>
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
