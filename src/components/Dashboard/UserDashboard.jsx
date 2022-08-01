import React from "react";
import Wrapper from "../Layout/Wrapper";

const UserDashboard = () => {
  return (
    <>
      <Wrapper userSideBar>
        <h1 className="h1style userh1">
          User Dashboard!!
        </h1>
        <div className="container-properties">
          <div className="card-container">
            <ul className="pd-ul">
              <li>
                <div className="card">
                  <ul>
                    <li className="card-left">
                      <i class="fa fa-tasks bx1"></i>
                      <div className="total-leave"></div>
                    </li>
                    <li className="card-right">
                      <div className="days-no">12</div>
                      <div className="leave-type-card">Tasks</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="card">
                  <ul>
                    <li className="card-left">
                      <i class="fa fa-bar-chart bx5"></i>
                      <div className="total-leave"></div>
                    </li>
                    <li className="card-right">
                      <div className="days-no">3</div>
                      <div className="leave-type-card">Tasks Completed</div>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="card">
                  <ul>
                    <li className="card-left">
                      <i class="fa fa-bars bx3"></i>
                    </li>
                    <li className="card-right">
                      <div className="days-no">9</div>
                      <div className="leave-type-card">Tasks Remaining</div>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <div className="card">
                  <ul>
                    <li className="card-left">
                      <i class="fa fa-user bx4"></i>
                    </li>
                    <li className="card-right">
                      <div className="days-no">3</div>
                      <div className="leave-type-card">Team Members</div>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
            <div class="col-sm-5  admin-user xyz user-task-card  p-3">
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
                            To-do List
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#tab-02"
                            aria-controls="tab-02"
                            role="tab"
                            data-toggle="tab"
                          >
                            Completed
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/jeevika.png"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/kamal.png"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/sachi.png"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
                                src={process.env.PUBLIC_URL + "/pic.jpg"}
                                alt="#"
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
            {/* <ul>
                        <li>
                            <div className='card'>
                                <ul>
                                    <li className='card-left'>
                                        <i class='fa fa-tasks bx1'></i>
                                    </li>
                                    <li className='card-right'>
                                        <div className='days-no'>3</div>
                                        <div className='leave-type-card'>High Priority Tasks</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='card'>
                                <ul>
                                    <li className='card-left'>
                                        <i class='fa fa-tasks bx2'></i>
                                        <div className='total-leave'></div>
                                    </li>
                                    <li className='card-right'>
                                        <div className='days-no'>10</div>
                                        <div className='leave-type-card'>Medium Priority Tasks</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='card'>
                                <ul>
                                    <li className='card-left'>
                                        <i class='fa fa-tasks bx3'></i>
                                        <div className='total-leave'></div>
                                    </li>
                                    <li className='card-right'>
                                        <div className='days-no'>80</div>
                                        <div className='leave-type-card'>Low Priority Tasks</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default UserDashboard;
