import React from 'react';
// import logo from './asterdio.png'
import "./Navbar.css"
function Navbar(){
    const navStyle={height:40,marginBottom:0}
    return(
        <>
            <nav className="navItems">
                <div className='logo' style={navStyle}>
                    <img src={process.env.PUBLIC_URL+'/asterdio-light.png'} alt="" className='logo_image' style={{maxHeight:'100%'}} />
                </div>
                
            </nav>
        </>
    )
}

export default Navbar