import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavHeader from '../Navbar/NavHeader'
import SideBar from '../Navbar/SideBar'
import SideBarUser from '../Navbar/SideBarUser'
const Wrapper = ({navBar,navHeader,children,adminSidebar,userSideBar,page_title}) => {
  return (
    <>
        
        {navBar && <Navbar/> } 
        
        <div className='container_wrapper' >
        {adminSidebar && <SideBar/>}
        {userSideBar && <SideBarUser/> }
        <main className='wrapper_children'>
        {navHeader && <NavHeader page_title={page_title}/> }
            {children}
        </main>
        </div>
    </>
  )
}

export default Wrapper
