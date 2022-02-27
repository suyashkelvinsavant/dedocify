import React from "react";
import "./Pricing.scss";
function Pricing() {
  return (
    <div style={{
      backgroundColor: "#212529",
    }}>
      <div
        className="pricing"
        style={{
          backgroundColor: "#212529",
          color: "white",
        }}
      >
        <section>
          <h1 className="membership">Monthly Membership</h1>

          <div className="container__fluid">
              <div className="pricing_cards">
                <div className="pricing_card_container">
                  <div className="pricing-card text-center">
                    <div className="pricing-title">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      <h2>Basic</h2>
                    </div>
                    <div className="price">
                      <h4>
                        <sup>$</sup>5
                      </h4>
                    </div>
                    <div className="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 3
                          Document Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 3
                          Document Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 3
                          Document Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                          ></i>{" "}
                          Live Support{" "}
                        </li>
                      </ul>
                    </div>
                     <p >Order Now </p>
                  </div>
                </div>
                <div className="pricing_card_container">
                  <div className="pricing-card text-center">
                    <div className="pricing-title">
                      <i className="fa fa-plane" aria-hidden="true"></i>
                      <h2>Standard</h2>
                    </div>
                    <div className="price">
                      <h4>
                        <sup>$</sup>30
                      </h4>
                    </div>
                    <div className="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 20
                          Document Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 20
                          Document Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check" aria-hidden="true"></i> 20
                          Document Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                          ></i>{" "}
                          Live Support{" "}
                        </li>
                      </ul>
                    </div>
                     <p >Order Now </p>
                  </div>
                </div>
                <div className="pricing_card_container">
                  <div className="pricing-card text-center">
                    <div className="pricing-title">
                      <i className="fa fa-rocket" aria-hidden="true"></i>
                      <h2>Premium</h2>
                    </div>
                    <div className="price">
                      <h4>
                        <sup>$</sup>50
                      </h4>
                    </div>
                    <div className="pricing-option">
                      <ul>
                        <li>
                          {" "}
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                          ></i>{" "}
                          Unlimited Storage{" "}
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                          ></i>{" "}
                          Unlimited Updation{" "}
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                          ></i>{" "}
                          Unlimited Sharing{" "}
                        </li>
                        <li>
                          {" "}
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                          ></i>{" "}
                          Live Support{" "}
                        </li>
                      </ul>
                    </div>
                    <p >Order Now </p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
        <hr style={{
          width: "80vw",
          margin: "auto",
          color: "white",
        }} />
    </div>
  );
};

export default Pricing;