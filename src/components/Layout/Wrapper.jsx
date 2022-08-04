import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavHeader from '../Navbar/NavHeader'
import SideBar from '../Navbar/SideBar'
import SideBarUser from '../Navbar/SideBarUser'
import AdminRightLayout from './AdminRightLayout'
const Wrapper = ({navBar,navHeader,children,adminSidebar,userSideBar,page_title,adminRight}) => {
  return (
    <>
      {navBar && <Navbar />}
      <div className="container_wrapper">
        <div>
          {adminSidebar && <SideBar />}
          {userSideBar && <SideBarUser />}
        </div>
        <main className="wrapper_children">
          {navHeader && <NavHeader page_title={page_title} />}
          <div className="dashboard_container">
            <div>{children}</div>
            <div className="right_layout">{adminSidebar && <AdminRightLayout />}</div>
          </div>
        </main>
        
      </div>
    </>
  );
}

export default Wrapper
