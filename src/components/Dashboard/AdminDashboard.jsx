import React, { useEffect, useState } from "react";
import Wrapper from "../Layout/Wrapper";
import axios from 'axios';
import { EventCard, TaskCard } from "../Layout/Cards";
import {API} from '../config'

export default function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API}/task/tasks`)
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  },[tasks]);

  const pending_tasks=tasks.map((task)=>(
    (task.task_status === "Pending" ?  (<li>{task.title}</li>): (null))
  ))
  const ongoing_tasks=tasks.map((task)=>(
    (task.task_status === "Ongoing" ?  (<li>{task.title}</li>): (null))
  ))
  const completed_tasks=tasks.map((task)=>(
    (task.task_status === "Completed" ?  (<li>{task.title}</li>): (null))
  ))
  console.log(pending_tasks,ongoing_tasks,completed_tasks)
  return (
    <>
      <Wrapper adminSidebar navHeader page_title="Dashboard">
        <div>
          <div className="user_greeting">
            <h2>Hi, Mary Smith!</h2>
            <p>
              Welcome to your dashboard. You can view and update your tasks
              here. You can also view your meeting schedules.
            </p>
          </div>
          <EventCard />
          
            <div className="taskcards_container">
              <div className="pending_card">
                <TaskCard
                  task_title={pending_tasks}
                  taskCard_title="Pending Tasks"
                />
              </div>
<<<<<<< HEAD

              {/* <h1 ><b>Tasks</b></h1> */}
            </div>
            <div class="col-sm-5  admin xyz card p-3 ">
              <h4>Team members</h4>
              <div className="table-wrapper">
                <table className="table">
                  <thead className="thead-light member-card">
                    <tr>
                      <tr ></tr>
                      <th scope="col">Name</th>

                      <th scope="col">Phone</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="trhover member-card">
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
                    <tr class="trhover member-card">
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
                    <tr class="trhover member-card">
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
                    <tr class="trhover member-card">
                      <td>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/sachi.png"}
                        ></img>
                      </td>
                      <td>Sachi Kamat</td>

                      <td>9121884133</td>
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
=======
              <div className="ongoing_card">
                <TaskCard
                  task_title={ongoing_tasks}
                  taskCard_title="Ongoing Tasks"
                />
              </div>
              <div className="completed_card">
                <TaskCard
                  task_title={completed_tasks}
                  taskCard_title="Completed Tasks"
                />
>>>>>>> backup
              </div>
            </div>
          <div class="container">
            <div class="row">
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
      </Wrapper>
    </>
  );
}
