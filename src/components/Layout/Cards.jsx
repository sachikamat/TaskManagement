import { CardContent, Typography } from '@material-ui/core';
// import { AddBox } from '@material-ui/icons';
import {  Card, CardActions, CardHeader } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../config';
import { AddEventButton } from './ActionDialogBox';


//TEAM MEMBER CARD

export const TaskCard=({task_title,taskCard_title})=>(
  <Card className="task_card">
    <h2>{taskCard_title}</h2>
    <ul>
      {task_title}
    </ul>
  </Card>
)

//TASK COUNT CARD
export const TaskCountCard = ({taskCount,taskCount_title,taskCountIcon}) => (
  <div className="card">
    
      <div className="card-left">
        <i className={taskCountIcon}></i>
        <div className="total-leave"></div>
      </div>
      <div className="card-right">
        <div className="days-no">{taskCount}</div>
        <div className="leave-type-card">{taskCount_title}</div>
      </div>
   
  </div>
);



export const EventCard = () => {
  const [events,setEvents]=useState([])
  useEffect(()=>{
    axios
    .get(`${API}/event/events`)
    .then((response)=>{
      setEvents(response.data.events)
    })
    .catch((err) => {
      console.log(err);
    });
  })
  const today = new Date().toLocaleDateString()
  const event_list=events.map((event)=>
    <li>{event.eventTitle}</li>
  )
  
  return (
    <div className="event-card">
      <Card>
        <CardHeader title="Today's Events" subheader={today} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <ul>{event_list}</ul>
          </Typography>
        </CardContent>
        <CardActions>
          <AddEventButton />
        </CardActions>
      </Card>
    </div>
  );
};
export const TaskCountCardContainer=({pending_count,ongoing_count,completed_count})=>(
  <div className="card-container">
                <ul className="pd-ul">
                  <li>
                    <TaskCountCard
                      taskCount={pending_count}
                      taskCount_title="Pending Tasks"
                      taskCountIcon="fa fa-tasks bx1"
                    />
                  </li>
                  <li>
                    <TaskCountCard
                      taskCount={ongoing_count}
                      taskCount_title="Ongoing Tasks"
                      taskCountIcon="fa fa-bar-chart bx5"
                    />
                  </li>

                  <li>
                    <TaskCountCard
                      taskCount={completed_count}
                      taskCount_title="Completed Tasks"
                      taskCountIcon="fa fa-bars bx3"
                    />
                  </li>
                </ul>
                
              </div>
  )