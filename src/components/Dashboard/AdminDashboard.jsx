import React, { useEffect, useState } from "react";
import Wrapper from "../Layout/Wrapper";
import axios from 'axios';
import { EventCard, TaskCard } from "../Layout/Cards";
import {API} from '../config'
import { useParams } from "react-router-dom";



export default function AdminDashboard() {
  let {id} = useParams()
  console.log(id)
  // const GETUSER_URL=`user/${id}`
  const [user,setUser] = useState({})
  const [tasks, setTasks] = useState([]);
  
  useEffect(()=>{
    axios
    .get(`${API}/user/${id}`)
    .then((res)=>{
      setUser(res.data.user)
    })
    .catch((err) => {
      console.log(err);
    });
  },[id])

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
      <Wrapper adminSidebar navHeader page_title="Dashboard" user_name={user.name} user_role={user.role}>
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
              </div>
            </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-5  admin xyz notice card p-3 ">
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
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="tab-03"
                        >
                          <div className="noticecard">
                            <div className="number">1.</div>
                            <div className="noticecard-text">
                              <h6>Meeting with Principal</h6>
                              <p>
                                There is a meet with the principal
                                <span>Time: 5:04 PM</span>
                              </p>
                            </div>
                          </div>
                          <div className="noticecard">
                            <div className="number">2.</div>
                            <div className="noticecard-text">
                              <h6>Meeting with Principal</h6>
                              <p>
                                There is a meet with the principal
                                <span>Time: 5:04 PM</span>
                              </p>
                            </div>
                          </div>
                          <div className="noticecard">
                            <div className="number">3.</div>
                            <div className="noticecard-text">
                              <h6>Meeting with Principal</h6>
                              <p>
                                There is a meet with the principal
                                <span>Time: 5:04 PM</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="tab-04">
                          <div className="noticecard">
                            <div className="number">1.</div>
                            <div className="noticecard-text">
                              <h6>There was a meet with Principal</h6>
                              <p>
                                There is a meet with the principal
                                <span>Date: 7/27/2022</span>
                              </p>
                            </div>
                          </div>
                          <div className="noticecard">
                            <div className="number">2.</div>
                            <div className="noticecard-text">
                              <h6>There was a meet with Principal</h6>
                              <p>
                                There is a meet with the principal
                                <span>Date: 7/27/2022</span>
                              </p>
                            </div>
                          </div>
                          <div className="noticecard">
                            <div className="number">3.</div>
                            <div className="noticecard-text">
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
