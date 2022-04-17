import React from "react";
import "../Styles/HeaderFooter.css";
import HeaderAdmin from "./HeaderAdmin";
import "../Styles/AdminHeader.css";

function AdminHome() {
  return (
    <div>
      <HeaderAdmin />

      <div
        style={{
          backgroundColor: "#DCF5FE",
        }}
      >
        <div id="bodyadd">
          <div className="infoadmin">
            <div>
              <div class="container">
                <div
                  class="row"
                  style={{
                    backgroundImage:
                      "url('https://www.teahub.io/photos/full/282-2828960_abstract-triangle-wallpaper.jpg')",
                  }}
                >
                  <div class="col-lg-10 col-xl-auto mx-auto">
                    <div
                      class="card flex-row my-3 border-5 shadow rounded-5 overflow-hidden"
                      style={{ backgroundColor: "hsla(90, 0%, 100%, 0.7)" }}
                    >
                      <div class="card-img-left d-none d-md-flex"></div>
                      <div class="card-body p-4 p-sm-5">
                        <center>
                          {" "}
                          <h1>Admin Panel DashBord</h1>
                        </center>
                        <hr class="my-4" />

                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              
                              <a
                                href="/travelpackages/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-car mr-2"
                                  aria-hidden="true"
                                ></i>
                                Travel Package
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              
                              <a
                                href="/activities"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-swimmer mr-2"
                                  aria-hidden="true"
                                ></i>
                                Activity
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              <a
                                href="/equipment/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-campground mr-2"
                                  aria-hidden="true"
                                ></i>
                                Equipment
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                              
                              <a
                                href="/payment"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-cc-visa mr-2"
                                  aria-hidden="true"
                                ></i>
                                Payment
                              </a>
                            </button>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-5">
                          <div class="form-outline mb-2 ">
                            <button
                              class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                              type="submit"
                            >
                             
                              <a
                                href="/contactus/admin"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {" "}
                                <i
                                  class="fa fa-envelope mr-2"
                                  aria-hidden="true"
                                ></i>
                                Contact Us Messages
                              </a>
                            </button>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <div class="form-outline mb-2 ">
                         
                          </div>
                        </div>
                        <hr class="my-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
