import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Pages/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import UserDashboard from "./components/Dashboard/UserDashboard"
import AddUser from "./components/Pages/AddUser";
import AddTask from './components/Pages/AddTask'
import { ChangePassword } from "./components/Pages/ChangePassword";
import TasksInfo from "./components/Pages/TasksInfo";
import { UserTask } from "./components/Pages/UserTask";
import Test from "./components/Pages/Test";
import './App.css';
import ManageUser from "./components/Pages/ManageUser";
import ManageTask from "./components/Pages/ManageTask";
import React from "react";
// import { ActionDialogBox } from "./components/Layout/ActionButton";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
            <Route exact path="/admin/adduser" element={<AddUser />} />
            <Route exact path="/admin/manageuser" element={<ManageUser/> } />
            <Route exact path="/admin/addtasks" element={<AddTask />} />
            <Route exact path="/admin/managetasks" element={<ManageTask/> } />
            <Route exact path="/:currentUser/settings/2fa" element={<ChangePassword />} />
            <Route exact path="/user/dashboard" element={<UserDashboard/> } />
            <Route exact path="/user/tasks" element={<UserTask />} />
            <Route exact path="/user/tasks/taskInfo/:id" element={<TasksInfo />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
