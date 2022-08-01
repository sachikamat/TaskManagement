import React from "react";
import Wrapper from "../Layout/Wrapper";
// import togglepopup from "../Layout/toggle";
import Table from "react-bootstrap/Table";
import { EditButton, DeleteButton } from "../Layout/ActionDialogBox";
import { EditUserInfo } from "./EditUserInfo";

const createData = (id, uname, email, phone, statusOf, action) => {
  return { id, uname, email, phone, statusOf, action };
};

const rows = [
  createData(1, "Sachi Kamat", "sachikamat1@gmail.com", 9807123456, "active"),
  createData(
    2,
    "Abhaya Mani Paudel",
    "abhayamani@gmail.com",
    9807123456,
    "active"
  ),
  createData(3, "Jeevika Shakya", "jeevika@gmail.com", 9807123456, "active"),
  createData(4, "Kamal Pandit", "kamal_p@gmail.com", 9807123456, "active"),
];

const ManageUser = () => {
  return (
    <>
      <Wrapper adminSidebar>
        <div className="content" id="blur">
          <div className="content-top"></div>
          <div className="content-bottom">
            <h2 class="tabletoptext">Manage Users</h2>
            <div className="table-wrapper ttw">
              <Table responsive="sm" striped hover>
                <thead className="table_header">
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">STATUS</th>
                    <th className="action_col" scope="col">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr className="table_row" key={row.id}>
                      <td class="paddingtoptd">{row.id}</td>
                      <td>{row.uname}</td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
                      <td>{row.statusOf}</td>
                      <td>
                        {
                          <div>
                            <EditButton
                              dialogTitle="Edit User"
                              dialogContent={<EditUserInfo 
                                uname ={row.uname}
                                email={row.email}
                                phone={row.phone}
                                statusOf={row.statusOf}
                                />}
                            />
                            <DeleteButton
                            dialogTitle="Delete User"
                            dialogContent="Are you sure you want to delete the selected user?"
                            />
                          </div>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ManageUser;
