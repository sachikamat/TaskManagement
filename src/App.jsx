import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
// import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Pages/Login"
import Dashboard from "./components/Dashboard/Dashboard"
import SideBar from "./components/Navbar/SideBar";
import AddUser from "./components/Pages/AddUser";
import AddTask from './components/Pages/AddTask'
import { ChangePassword } from "./components/Pages/ChangePassword";
import TasksInfo from "./components/Pages/TasksInfo";
import { UserTask } from "./components/Pages/UserTask";

function App() {
  return (
    
    <div className="App">
      <Router>
        <SideBar>
        {/* <Navbar/> */}
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/users/adduser' element={<AddUser />} />
            <Route exact path='/tasks/addtasks' element={<AddTask />} />
            <Route exact path='/settings/2fa' element={<ChangePassword/>}/>
            <Route exact path='/settings/logout' element={<UserTask/>}/>
            <Route exact path='/task/taskInfo/:id' element={<TasksInfo/>}/>
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
