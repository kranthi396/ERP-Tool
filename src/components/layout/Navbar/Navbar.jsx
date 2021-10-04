import React, { useState } from 'react'
import { NavItem } from 'react-bootstrap';
import { FaBars, FaWindowClose, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { sidebarData, sidebarDataFaculty, sidebarDataHod, sidebarDataStudent } from '../../layout/Navbar/SidebarData'
import '../Navbar/Navbar.css'
import { IconContext } from 'react-icons';

function Navbar() {
    const type = localStorage.getItem("type")
    const name = localStorage.getItem("name")


    let sidebarData
    if (type == "student") {
        sidebarData = sidebarDataStudent;
    }
    else if (type == "faculty") {
        sidebarData = sidebarDataFaculty;
    }
    else {
        sidebarData = sidebarDataHod;
    }

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }} />
            <div className='navbar1'>
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showSidebar} />
                </Link>
                <div className=" container text-end">
                    <h4 style={{ color: "white" }}>SLN -ClouD</h4>
                </div>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <div className='navbar-toogle'>
                        <Link to='#' className='menu-bars'>
                            <FaWindowClose />
                        </Link>
                    </div>
                    <div style={{ paddingLeft: "21pt", color: "white", paddingTop: "5pt" }}>
                        <div style={{ paddingLeft: "15pt" }}>
                            <FaUserCircle size="90px" />
                        </div>
                        <br/>
                        <div>
                            <h6>{name}</h6>
                        </div>
                    </div>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
