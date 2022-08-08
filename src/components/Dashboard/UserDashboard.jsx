import React from "react";
import { TaskCountCard } from "../Layout/Cards";
import Wrapper from "../Layout/Wrapper";


const UserDashboard = () => {
  return (
    <>
      <Wrapper userSideBar navHeader>
        <div className="dashboard_container">
          <div>
            <div className="user_greeting">
              <h2>Hi, Mary Smith!</h2>
              <p>
                Welcome to your dashboard. You can view and update your tasks
                here. You can also view your meeting schedules.
              </p>
            </div>
            <div className="container-properties">
              <div className="card-container">
                <ul className="pd-ul">
                  <li>
                    <TaskCountCard
                      taskCount={12}
                      taskCount_title="Tasks"
                      taskCountIcon="fa fa-tasks bx1"
                    />
                  </li>
                  <li>
                    <TaskCountCard
                      taskCount={3}
                      taskCount_title="Tasks"
                      taskCountIcon="fa fa-bar-chart bx5"
                    />
                  </li>

                  <li>
                    <TaskCountCard
                      taskCount={9}
                      taskCount_title="Tasks Remaining"
                      taskCountIcon="fa fa-bars bx3"
                    />
                  </li>
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/team/jeevika.png"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/kamal.png"
                                    }
                                    alt="#"
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/sachi.png"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
                                    alt="#"
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                                    src={
                                      process.env.PUBLIC_URL + "/team/pic.jpg"
                                    }
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default UserDashboard;
