import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
import SideBarUser from '../Navbar/SideBarUser'
import './layout.css'

const Wrapper = ({navBar,children,adminSidebar,userSideBar}) => {
  return (
    <>
        {navBar && <Navbar/> } 
        <div className='container_wrapper' >
        {adminSidebar && <SideBar/>}
        {userSideBar && <SideBarUser/> }
        <main className='wrapper_children'>
            {children}
        </main>
        </div>
    </>
  )
}

export default Wrapper
