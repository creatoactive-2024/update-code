import React, { useState } from "react";
import { Container, Row, Button, ProgressBar, Form, Col } from "react-bootstrap";
import logo from "../../img/logo.png";
import logout from "../../img/logout-two.svg";
import task1 from "../../img/drivar/task-1.svg";
import task2 from "../../img/drivar/task-2.svg";
import task3 from "../../img/drivar/task-3.svg";
import task4 from "../../img/drivar/task-4.svg";
import task5 from "../../img/drivar/task-5.svg";
import user from "../../img/drivar/user.svg";
import time from "../../img/drivar/time.svg";
import location from "../../img/drivar/location.svg";
import navigaion from "../../img/drivar/navigation.svg";
import prev from "../../img/drivar/prev.svg";
import next from "../../img/drivar/next.svg";
import car from "../../img/drivar/car.svg";
import color from "../../img/drivar/color.svg";
import text from "../../img/drivar/text.svg";
import tick from "../../img/drivar/circle-tick.svg";
import finishIcon from "../../img/drivar/white-tick.svg";


const ProgressTask: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  // ✅ Dynamic content for each step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-section">
            <h5>Task Overview</h5>
            <p>Basic details of the assigned task.</p>
            <Form className="inner-form">
              <Row className="form-row">
                <Form.Group className="col-md-6">
                  <Form.Label>
                    <img src={user} alt="user" /> Customer Name
                  </Form.Label>
                  <Form.Control type="text" value="Emily Rodriguez" readOnly />
                </Form.Group>
                <Form.Group className="col-md-6">
                  <Form.Label>
                   <img src={time} alt="time" /> Scheduled Time
                  </Form.Label>
                  <Form.Control type="text" value="5:00 PM" readOnly />
                </Form.Group>
              </Row>
              <Row className="form-row">
              <Form.Group className="col-md-6">
                <Form.Label>
                  <img src={location} alt="location" /> Location
                </Form.Label>
                <Form.Control type="text" value="Terminal 3, Arrivals" readOnly />
              </Form.Group>
              </Row>
              <Row>
                <Col sm={12}>
                  <Button variant="" className="navigation-btn"><img src={navigaion} alt="navigaion" /> Navigate to Location</Button>
                </Col>
              </Row>
            </Form>
          </div>
        );

      case 2:
        return (
          <div className="form-section">
            <h5>Vehicle Details</h5>
            <p>Verify vehicle information before proceeding.</p>
            <Form className="inner-form">
              <Row className="form-row">
                <Form.Group className="col-md-6">
                  <Form.Label>
                    <img src={car} alt="car" /> Make & Model
                  </Form.Label>
                  <Form.Control type="text" value="Tesla Model 3 2023" readOnly />
                </Form.Group>
                <Form.Group className="col-md-6">
                  <Form.Label>
                    <img src={color} alt="color" /> Color
                  </Form.Label>
                  <Form.Control type="text" value="White" readOnly />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>
                  <img src={text} alt="text" /> License Plate
                </Form.Label>
                <Form.Control type="text" value="TES-9012" readOnly />
              </Form.Group>
            </Form>
            <p className="note">
              <strong>Note:</strong> Please verify the license plate before taking possession.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="form-section">
            <h5>Parking Information</h5>
            <p>Enter or confirm parking slot details.</p>
            <Form className="inner-form">
              <Row className="form-row">
              <Form.Group>
                <Form.Label><img src={location} alt="location" />Assigned Parking Lot</Form.Label>
                <div className="parking-lot-box form-control">
                  <h6>C-45</h6>
                  <p>Level C, Section 45</p>
                </div>
              </Form.Group>
              </Row>
            </Form>
            
          </div>
        );

      case 4:
        return (
          <div className="form-section">
            <h5>Key Management</h5>
            <p>Key storage location and handling</p>
            <Form className="inner-form">
              <Row className="form-row">
              <Form.Group>
                <Form.Label><img src={task4} alt="key" className="w-14" />Key Slot Assignment</Form.Label>
                <div className="parking-lot-box form-control">
                  <h6>K-201</h6>
                  <p>Secure Key Storage</p>
                </div>
              </Form.Group>
              </Row>
            </Form>
            <p className="note mt-auto">
              <strong>Important: </strong> Please collect the keys from the specified slot before retrieving the vehicle.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="form-section complete">
            <h5>Complete Task</h5>
            <p>Review and confirm task completion</p>
            <div className="inner-form">
              <div className="ready-box">
          <div className="ready-header">
            <img src={tick} alt="check" />
            <h6>Ready to Complete</h6>
          </div>
          <p>
            You are about to mark this pickup task as complete. Please ensure all
            steps have been properly executed.
          </p>
        </div>

        {/* Task Summary Box */}
        <div className="summary-box">
          <h6>Task Summary:</h6>
          <div className="summary-grid">
            <p>✔ Customer: Emily Rodriguez</p>
            <p>✔ Parking: C-45</p>
            <p>✔ Vehicle: Tesla Model 3 (TES-9012)</p>
            <p>✔ Key Slot: K-201</p>
          </div>
        </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="driver-dashboard">
      {/* Header */}
      <div className="headar-logo">
        <img src={logo} alt="logo" />
      </div>

      <Container>
        <Row>
          <div className="dashboard-header">
            <div className="user-info">
              <div className="user-avatar">JD</div>
              <div>
                <h5>Johnny Cage</h5>
                <p>Driver ID: DRV001</p>
              </div>
            </div>
            <Button className="logout-btn">
              <img src={logout} alt="logout" />
              Logout
            </Button>
          </div>
        </Row>

        <Row>
          <div className="progress-task-bar">
            <div className="header">
              <div>
                <h6>Task in Progress</h6>
                <p>Task ID: T003</p>
              </div>
              <span>Pick-Up</span>
            </div>

            <div className="step-bar">
              
              <ProgressBar
                now={progress}
                variant={progress === 100 ? "success" : "primary"}
              />
              <div className="bottom-progress"><p>
                Step {step} of {totalSteps}
              </p><span>{Math.round(progress)}% Complete</span></div>
            </div>
          </div>
          <div className="progress-task">
            

            {/* Steps indicator (not clickable) */}
            <div className="tabs">
              {[
                "Task Overview",
                "Vehicle Details",
                "Parking Information",
                "Key Management",
                "Complete Task",
              ].map((label, index) => (
                <div
                  key={index}
                  className={`tab-item ${
                    step === index + 1 ? "active" : step > index + 1 ? "done" : ""
                  }`}
                >
                  <div className="icon-circle">
                    <img
                      src={
                        index === 0
                          ? task1
                          : index === 1
                          ? task2
                          : index === 2
                          ? task3
                          : index === 3
                          ? task4
                          : task5
                      }
                      alt={label}
                    />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {renderStepContent()}

            <div className="btn-group">
  {/* Hide Previous Button on LAST Step */}
  {step < totalSteps && (
    <Button
      variant="light"
      onClick={handlePrevious}
      className="prev-btn"
    >
      <img src={prev} alt="Previous" />
      Previous
    </Button>
  )}

  {/* Change Label & Icon on Final Step */}
  <Button
    variant="primary"
    onClick={handleNext}
    className="next-btn"
  >
    {step === totalSteps ? (
      <>
      <img src={finishIcon} alt="Finish" />
        Confirm & Complete Task
        
      </>
    ) : (
      <>
        Next
        <img src={next} alt="Next" />
      </>
    )}
  </Button>
</div>


          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProgressTask;
