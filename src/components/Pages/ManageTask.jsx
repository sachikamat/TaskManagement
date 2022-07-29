import React from "react";
import { ViewButton, EditButton, DeleteButton } from "../Layout/ActionDialogBox";
import Wrapper from "../Layout/Wrapper";

const ManageTask = () => {
  return (
    <>
      <Wrapper adminSidebar>
        <div className="content" id="blur">
          <div className="content-top"></div>
          <div className="content-bottom">
            <h2 class="tabletoptext">Manage tasks</h2>
            <div className="table-wrapper ttw">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Action</th>
                    <th scope="col">Task Allocated To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="paddingtoptd">
                      1
                    </th>
                    <td class="paddingtoptd">task1</td>
                    <td class="paddingtoptd">urgent</td>
                    <td class="paddingtoptd">pending</td>
                    <td class="paddingtoptd">1 week</td>

                    <td class="paddingadjustedclass">
                      <ViewButton/>
                      <EditButton/>
                      <DeleteButton/>
                    </td>
                    <td>
                      <div class="descimage">
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/kamal.png"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/pic.jpg"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/jeevika.png"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/sachi.png"}
                        ></img>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="paddingtoptd">
                      1
                    </th>
                    <td class="paddingtoptd">task1</td>
                    <td class="paddingtoptd">urgent</td>
                    <td class="paddingtoptd">pending</td>
                    <td class="paddingtoptd">1 week</td>
                    <td class="paddingadjustedclass">
                      <ViewButton/>
                      <EditButton/>
                      <DeleteButton/>
                    </td>
                    <td>
                      <div class="descimage">
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/kamal.png"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/pic.jpg"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/jeevika.png"}
                        ></img>
                        <img
                          alt="#"
                          src={process.env.PUBLIC_URL + "/sachi.png"}
                        ></img>
                      </div>
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

export default ManageTask;
