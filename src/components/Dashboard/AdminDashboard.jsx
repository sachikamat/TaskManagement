import React from "react";
import Wrapper from "../Layout/Wrapper";
// import toggle from "../Layout/toggle"
import { TeamCard } from "../Layout/Cards";
// import { Paper } from "@material-ui/core";

export default function AdminDashboard() {
  return (
    <>
      <Wrapper adminSidebar navHeader page_title="Dashboard">
        <div className="dashboard_container">
          <div>
            <div className="user_greeting">
              <h2>Hi, Mary Smith!</h2>
              <p>
                Welcome to your dashboard. You can view and update your tasks
                here. You can also view your meeting schedules.
              </p>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-5 admin xyz card p-3">
                  <div className="content">
                    <div className="content-main">
                      <h4>Tasks</h4>
                      <div className="content-form">
                        <div className="form-type">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation">
                              <a
                                href="#tab-01"
                                className="active"
                                aria-controls="tab-01"
                                role="tab"
                                data-toggle="tab"
                              >
                                Ongoing/Assigned Tasks
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#tab-02"
                                aria-controls="tab-02"
                                role="tab"
                                data-toggle="tab"
                              >
                                Completed Tasks
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="tab-01"
                          >
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">To Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">2.</div>
                                <div class="tasktext">Finish Dashboard</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={
                                      process.env.PUBLIC_URL + "/team/jeevika.png"
                                    }
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">3.</div>
                                <div class="tasktext">
                                  Finish Positioning and Styling
                                </div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/kamal.png"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">4.</div>
                                <div class="tasktext">
                                  Finish Color Choosing
                                </div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/sachi.png"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="tab-02">
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">2.</div>
                                <div class="tasktext">Finish Dashboard</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">3.</div>
                                <div class="tasktext">
                                  Finish Positioning and Styling
                                </div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">4.</div>
                                <div class="tasktext">
                                  Finish Color Choosing
                                </div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div class="tasks-card">
                              <div class="desctext">
                                <div class="number">1.</div>
                                <div class="tasktext">Finish Sidebar</div>
                              </div>
                              <div class="descimage">
                                <div class="taskicon">
                                  <img
                                    alt="#"
                                    src={process.env.PUBLIC_URL + "/team/pic.jpg"}
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-5  admin xyz notice card p-3 ">
                  <div className="content">
                    <div className="content-main">
                      <h4>Notice</h4>
                      <div className="content-form">
                        <div className="form-type">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation">
                              <a
                                href="#tab-03"
                                className="active"
                                aria-controls="tab-03"
                                role="tab"
                                data-toggle="tab"
                              >
                                Today
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#tab-04"
                                aria-controls="tab-04"
                                role="tab"
                                data-toggle="tab"
                              >
                                History
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="tab-03"
                          >
                            <div class="noticecard">
                              <div class="number">1.</div>
                              <div class="noticecard-text">
                                <h6>Meeting with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Time: 5:04 PM</span>
                                </p>
                              </div>
                            </div>
                            <div class="noticecard">
                              <div class="number">2.</div>
                              <div class="noticecard-text">
                                <h6>Meeting with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Time: 5:04 PM</span>
                                </p>
                              </div>
                            </div>
                            <div class="noticecard">
                              <div class="number">3.</div>
                              <div class="noticecard-text">
                                <h6>Meeting with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Time: 5:04 PM</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="tab-04">
                            <div class="noticecard">
                              <div class="number">1.</div>
                              <div class="noticecard-text">
                                <h6>There was a meet with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Date: 7/27/2022</span>
                                </p>
                              </div>
                            </div>
                            <div class="noticecard">
                              <div class="number">2.</div>
                              <div class="noticecard-text">
                                <h6>There was a meet with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Date: 7/27/2022</span>
                                </p>
                              </div>
                            </div>
                            <div class="noticecard">
                              <div class="number">3.</div>
                              <div class="noticecard-text">
                                <h6>There was a meet with Principal</h6>
                                <p>
                                  There is a meet with the principal
                                  <span>Date: 7/27/2022</span>
                                </p>
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
          </div>
          <div>
            <TeamCard />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
