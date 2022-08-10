import { CardContent, Typography } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { Button, Card, CardActions } from '@mui/material';
import React from 'react'


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


export const EventCard=()=>(
  <div className="event-card">
    <Card className="event">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Today's Events
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We will have today's events here
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          <AddBox style={{fontSize:50}} />
        </Button>
      </CardActions>
    </Card>
  </div>
)

export const TaskCountCardContainer=()=>(
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
                
              </div>
  )