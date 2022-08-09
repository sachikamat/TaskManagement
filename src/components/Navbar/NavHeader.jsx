import React from "react";
import { AccountCircle } from "@material-ui/icons";

const NavHeader = ({page_title,user_name,user_role}) => {
  return (
    <>
      <div className="nav_header">
        <div>
          <h2>{page_title}</h2>
        </div>
        <div className="nav_userInfo">
          <div>
            <h3>{user_name}</h3>
            <p>{user_role}</p>
          </div>
          <div>
            <AccountCircle style={{ fontSize: 45 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
