import React from "react";
import Wrapper from "../Layout/Wrapper";
import toggle from "../Layout/toggle"


export default function AdminDashboard() {
  return (
    <>
      <Wrapper adminSidebar>
        <h1 class="h1style">Welcome to Our Dashboard!!!</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-5 admin xyz card p-2">
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/jeevika.png"}
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
                                src={process.env.PUBLIC_URL + "/kamal.png"}
                              ></img>
                            </div>
                          </div>
                        </div>
                        <div class="tasks-card">
                          <div class="desctext">
                            <div class="number">4.</div>
                            <div class="tasktext">Finish Color Choosing</div>
                          </div>
                          <div class="descimage">
                            <div class="taskicon">
                              <img
                                alt="#"
                                src={process.env.PUBLIC_URL + "/sachi.png"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                              ></img>
                            </div>
                          </div>
                        </div>
                        <div class="tasks-card">
                          <div class="desctext">
                            <div class="number">4.</div>
                            <div class="tasktext">Finish Color Choosing</div>
                          </div>
                          <div class="descimage">
                            <div class="taskicon">
                              <img
                                alt="#"
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <h1 ><b>Tasks</b></h1> */}
            </div>
            <div class="col-sm-5  admin xyz card p-2 ">
              <h4>Team members</h4>
              <div className="table-wrapper">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <tr ></tr>
                      <th scope="col">Name</th>

                      <th scope="col">Phone</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="trhover">
                      <td >
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/pic.jpg"}
                        ></img>
                      </td>
                      <td>Abhaya Mani Paudel</td>

                      <td>9818884133</td>
                      <td>
                        <a
                          className="activeinactive-details"
                          href="/"
                          onClick={toggle}
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr class="trhover">
                      <td>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/jeevika.png"}
                        ></img>
                      </td>
                      <td>Jeevika Shakya</td>

                      <td>9818884133</td>
                      <td>
                        <a
                          className="inactiveactive-details"
                          href="/"
                          onClick={toggle}
                        >
                          Inactive
                        </a>
                      </td>
                    </tr>
                    <tr class="trhover">
                      <td>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/kamal.png"}
                        ></img>
                      </td>
                      <td>Kamal Pandit</td>

                      <td>9818884133</td>
                      <td>
                        <a
                          className="activeinactive-details"
                          href="/"
                          onClick={toggle}
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr class="trhover">
                      <td>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/sachi.png"}
                        ></img>
                      </td>
                      <td>Sachi Kamat</td>

                      <td>9818884133</td>
                      <td>
                        <a
                          className="activeinactive-details"
                          href="/"
                          onClick={toggle}
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-sm-5  admin xyz notice card p-2 ">
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
                          <h6>Meeting with Principal</h6>
                          <p>
                            There is a meet with the principal
                            <span>Time: 5:04 PM</span>
                          </p>
                        </div>
                        <div class="noticecard">
                          <h6>Meeting with Principal</h6>
                          <p>
                            There is a meet with the principal
                            <span>Time: 5:04 PM</span>
                          </p>
                        </div>
                        <div class="noticecard">
                          <h6>Meeting with Principal</h6>
                          <p>
                            There is a meet with the principal
                            <span>Time: 5:04 PM</span>
                          </p>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="tab-04">
                        <div class="noticecard">
                          <h6>There was a meet with Principal</h6>
                          <p>
                            There is a meet with the principal
                            <span>Date: 7/27/2022</span>
                          </p>
                        </div>
                        <div class="noticecard">
                          <h6>There was a meet with Principal</h6>
                          <p>
                            There is a meet with the principal
                            <span>Date: 7/27/2022</span>
                          </p>
                        </div>
                        <div class="noticecard">
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
      </Wrapper>
    </>
  );
}
