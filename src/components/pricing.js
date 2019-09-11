import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

export default class Pricing extends React.Component {
  render() {
    return (
      <div>
        <section className="pricing py-5" data-section="home">
          <div className="container">
            <div className="row">
              {/* Free Tier */}
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Bronze
                    </h5>
                    <h6 className="card-price text-center">$50</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Good for streamers/influencers
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Free changes 1
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Delivery in less than 3 Days
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Basic logo perfect for a limited budget
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times" />
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times" />
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times" />
                        </span>
                        Free Subdomain
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times" />
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Plus Tier */}
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Silver
                    </h5>
                    <h6 className="card-price text-center">$120</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        <strong>5 Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        50GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Free Subdomain
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times" />
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Pro Tier */}
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Pro
                    </h5>
                    <h6 className="card-price text-center">$200</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        <strong>Unlimited Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        150GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        <strong>Unlimited</strong> Free Subdomains
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check" />
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
