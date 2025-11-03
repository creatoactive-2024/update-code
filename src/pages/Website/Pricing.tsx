import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import parkingImg from "../../../src/img/parking.jpg";
import baseURL from "../utils/baseURL"


interface PricingData {
  airportName: string;
  dropOffDateTime: string | Date;
  pickUpDateTime: string | Date;
}

interface Rate {
  minDays: number;
  maxDays: number | null;
  pricePerDay: number;
}

interface PricingAPI {
  _id: string;
  serviceType: string;
  fixedRate: number;
  rates: Rate[];
}

const Pricing: React.FC = () => {
  const location = useLocation();
  const bookingData = location.state as PricingData;
  const [days, setDays] = useState<number>(0);
  const [pricingData, setPricingData] = useState<PricingAPI[]>([]);

  useEffect(() => {
    if (bookingData?.dropOffDateTime && bookingData?.pickUpDateTime) {
      const start = new Date(bookingData.dropOffDateTime);
      const end = new Date(bookingData.pickUpDateTime);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(totalDays);
    }
  }, [bookingData]);

  // Fetch pricing data from backend
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(`${baseURL}/api/users/getprice`);
        const data = await res.json();
        setPricingData(data);
      } catch (error) {
        console.error("Error fetching pricing:", error);
      }
    };
    fetchPricing();
  }, []);

  // Function to calculate total based on number of days
  const calcPrice = (serviceType: string) => {
    const pricing = pricingData.find(
      (p) => p.serviceType.toLowerCase() === serviceType.toLowerCase()
    );
    if (!pricing) return 0;

    const dayRate =
      pricing.rates.find(
        (r) =>
          days >= r.minDays && (r.maxDays === null || days <= r.maxDays)
      )?.pricePerDay || 0;

    const baseTotal = dayRate * days;
    return pricing.fixedRate ? baseTotal + pricing.fixedRate : baseTotal;
  };

  const valetPrice = calcPrice("valet parking service");
  const driveNDropPrice = calcPrice("Drive N drop");

  return (
    <div className="registration">
      {/* Inner banner */}
      <section className="inner-banner">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1 className="page-title">
                DropNPark Rates <br /> Find Your <span>Perfect Parking</span> Option.
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col>
            <nav className="custom-breadcrumb">
              <span className="breadcrumb-item">View Rates</span>
              <span className="breadcrumb-separator">{">"}</span>
              <span className="breadcrumb-item active">Parking Options</span>
            </nav>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mx-auto">
            <div className="pricing-rates">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-3">
                  <div className="pricing-inner">
                    <h2 className="p-head">Valet Parking Service</h2>
                    <p className="p-text">Save $40.00 based on our regular rate.</p>
                    <h2 className="pricing-text">
                      ${valetPrice.toFixed(2)}
                    </h2>
                   <div className="text-center my-3">
                     <p className="taxes-text mb-0">+ taxes and fuel surcharge</p>
                      <p className="taxes-text mb-0">+ Additional valet charges included</p>
                      </div>

                   <Link
  to="/addonservices"
  state={{
    ...bookingData,
    selectedService: "Valet Parking Service",
    totalPrice: valetPrice,
    days,
  }}
  className="submit-btn add-vechicle"
>
  BOOK NOW
</Link>

                    <p className="para-txt">
                      Enjoy a fast, easy, and affordable trip to the terminal.
                      Your parking is already taken care of.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3">
                  <div className="pricing-inner">
                    <h2 className="p-head">Drive N Drop</h2>
                    <p className="p-text">Save $40.00 based on our regular rate.</p>
                    <h2 className="pricing-text">
                      ${driveNDropPrice.toFixed(2)}
                    </h2>
                     <div className="text-center my-3">
                     <p className="taxes-text mb-0">+ taxes and fuel surcharge</p>
                      <p className="taxes-text mb-0">+ Additional valet charges included</p>
                      </div>
                    <Link
  to="/addonservices"
  state={{
    ...bookingData,
    selectedService: "Drive N Drop",
    totalPrice: driveNDropPrice,
    days,
  }}
  className="submit-btn add-vechicle"
>
  BOOK NOW
</Link>

                    <p className="para-txt">
                      Enjoy a fast, easy, and affordable trip to the terminal.
                      Your parking is already taken care of.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Keep existing UI as is */}
      <div className="parking-type">
        <div className="container">
          <div className="heading-wrapper text-center">
            <h2>Find Your Perfect Parking Space</h2>
          </div>
          <div className="row align-items-stretch">
            <div className="col-md-3 col-lg-3">
              <div className="for-row-flex">
                <div>
                  <h3>Valet Parking</h3>
                  <p>
                    Drop your car directly at the terminal curb. We park it
                    securely, and it's waiting for you upon return.
                  </p>
                  <h5>Fastest, most effortless experience.</h5>
                </div>
                <div>
                  <h3>Short-Term Lot</h3>
                  <p>
                    Ideal for stays up to 24 hours, greeting/farewell, or brief
                    business travel. Located near the terminal.
                  </p>
                  <h5>Quickest entry and exit for brief visits.</h5>
                </div>
                <div>
                  <h3>Long-Term Lot</h3>
                  <p>
                    Affordable daily rates designed for trips lasting several
                    days or weeks.
                  </p>
                  <h5>Cost-effective solution for longer travel.</h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="parking-img">
                <img src={parkingImg} alt="parking" />
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div className="for-row-flex">
                <div>
                  <h3>Premium Parking</h3>
                  <p>
                    Guaranteed parking spaces in the most convenient area of the
                    terminal garage or lot.
                  </p>
                  <h5>Ultimate proximity and guaranteed space.</h5>
                </div>
                <div>
                  <h3>Parking Garage</h3>
                  <p>
                    Convenient, weather-protected parking located adjacent to
                    the terminal. Best for stays up to a few days.
                  </p>
                  <h5>Weather protection and close terminal access.</h5>
                </div>
                <div>
                  <h3>Long-Term Lot</h3>
                  <p>The most affordable option for extended stays.</p>
                  <h5>Best value for travelers on a budget.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
