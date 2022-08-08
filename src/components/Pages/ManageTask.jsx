import { ViewButton, EditButton, DeleteButton } from "../Layout/ActionDialogBox";
import Wrapper from "../Layout/Wrapper";
import Table from 'react-bootstrap/Table';
import React from "react";
// import { Paper } from "@material-ui/core";
const createData = (
  id,
  subject,
  priority,
  statusOf,
  duration,
 
  taskAllocated
) => {
  return { id, subject, priority, statusOf, duration, taskAllocated };
};



const rows = [
  createData(1, "Login Form", "Medium", "Pending", "1 week", "Sachi"),
  createData(2, "Signup Form", "Low", "Pending", "1 day", "Sachi"),
  createData(3, "Find bugs", "Urgent", "Pending", "2 weeks", "Sachi"),
  createData(4, "Create Database", "High", "Pending", "3 days", "Sachi"),
  createData(4, "Create Database", "High", "Pending", "3 days", "Sachi"),
  createData(4, "Create Database", "High", "Pending", "3 days", "Sachi"),
  createData(4, "Create Database", "High", "Pending", "3 days", "Sachi"),
  createData(4, "Create Database", "High", "Pending", "3 days", "Sachi"),
];

const ManageTask = () => {
  return (
    <>
      <Wrapper adminSidebar navHeader page_title="Manage tasks">
            <div className="ttw">
              <Table responsive='sm' striped hover>
                <thead className="table_header" >
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">TASK</th>
                    <th scope="col">PRIORITY</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">DURATION</th>
                    <th className="action_col" scope="col">ACTION</th>
                    <th scope="col">TASK ALLOCATED</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr className="table_row" key={row.id}>
                      <td class="paddingtoptd">{row.id}</td>
                      <td>{row.subject}</td>
                      <td>{row.priority}</td>
                      <td>{row.statusOf}</td>
                      <td>{row.duration}</td>
                      <td>{
                        <div className="action_column">
                          <ViewButton dialogTitle="View Task" dialogContent="Viewing the task"/>
                          <EditButton dialogTitle="Edit Task" dialogContent="Editing this task"/>
                          <DeleteButton
                          dialogTitle="Delete Task"
                          dialogContent="Are you sure you want to delete the selected task?"
                          />
                        </div>
                        }</td>
                      <td>{row.taskAllocated}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
      </Wrapper>
    </>
  );
};

export default ManageTask;
