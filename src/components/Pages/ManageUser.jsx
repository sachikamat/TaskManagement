import React from "react";
import Wrapper from "../Layout/Wrapper";
import togglepopup from "../Layout/toggle";
import { DeleteButton, EditButton, ViewButton } from "../Layout/ActionDialogBox";

const ManageUser = () => {
  return (
    <>
      <Wrapper adminSidebar>
        <div className="content" id="blur">
          <div className="content-top"></div>
          <div className="content-bottom">
            <h2 class="tabletoptext">Manage Users</h2>
            <div className="table-wrapper ttw">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="paddingtoptd">
                      1
                    </th>
                    <td class="paddingtoptd">Abhaya</td>
                    <td class="paddingtoptd">abhayamanipaudel@gmail.com</td>
                    <td class="paddingtoptd">9818884133</td>
                    <td class="paddingtoptd">
                      <a
                        className="activeinactive-details"
                        href="/#"
                        onClick={togglepopup}
                      >
                        Active
                      </a>
                    </td>
                    <td class="paddingadjustedclass">
                      <ViewButton/>
                      <EditButton/>
                      <DeleteButton/>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="paddingtoptd">
                      {" "}
                      2
                    </th>
                    <td class="paddingtoptd">Abhaya</td>
                    <td class="paddingtoptd">abhayamanipaudel@gmail.com</td>
                    <td class="paddingtoptd">9818884133</td>
                    <td class="paddingtoptd">
                      <a
                        className="inactiveactive-details"
                        href="/#"
                        onClick={togglepopup}
                      >
                        Inactive
                      </a>
                    </td>
                    <td class="paddingadjustedclass">
                      <ViewButton/>
                      <EditButton/>
                      <DeleteButton/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ManageUser;
