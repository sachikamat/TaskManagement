import { Card, CardContent } from '@mui/material';
import React from 'react'


//TEAM MEMBER CARD
export const Team = ({ uname, position, icon }) => (
  <>
    <div className="teamMember">
      <div class="descimage">
        <div class="taskicon">
          <img src={icon} alt="#"></img>
        </div>
      </div>
      <div className="userInfo">
        <h3>{uname}</h3>
        <p>{position}</p>
      </div>
    </div>
  </>
);

export const TeamCard = () => {
  return (
    <>
      <Card className="teamCard">
        <h2 className="teamCard_title">Team Members</h2>
        <CardContent className="teamCardContent">
          <Team
            uname="Abhaya Mani Paudel"
            position="Frontend Developer"
            icon={process.env.PUBLIC_URL + "/team/pic.jpg"}
          />
          <Team
            uname="Jeevika Shakya"
            position="QA Engineer"
            icon={process.env.PUBLIC_URL + "/team/jeevika.png"}
          />
          <Team
            uname="Kamal Pandit"
            position="Backend Developer"
            icon={process.env.PUBLIC_URL + "/team/kamal.png"}
          />
          <Team
            uname="Sachi Kamat"
            position="Frontend Developer"
            icon={process.env.PUBLIC_URL + "/team/sachi.png"}
          />
        </CardContent>
      </Card>
    </>
  );
}

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
    <ul>
      <li className="card-left">
        <i class={taskCountIcon}></i>
        <div className="total-leave"></div>
      </li>
      <li className="card-right">
        <div className="days-no">{taskCount}</div>
        <div className="leave-type-card">{taskCount_title}</div>
      </li>
    </ul>
  </div>
);


export const EventCard=()=>(
  <div className="event-card">
    
  </div>
)