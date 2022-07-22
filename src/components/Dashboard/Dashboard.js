import React from 'react' ;
// import AddUser from './AddUser';
import AddTask from './AddTask';
import Navbar from "../Navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <AddTask/>
      {/* <AddUser/>       */}
    </>
  )
}
