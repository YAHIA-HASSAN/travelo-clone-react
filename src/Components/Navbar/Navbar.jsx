import { FaBars, FaPhone, FaSearch } from "react-icons/fa";
import "./NavBar.css"
import { NavLink } from "react-bootstrap";
import { useState } from "react";


const NavBar = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false)

    function ToggledMenu(){
        setToggleMenu(!toggleMenu)
        console.log(toggleMenu)
    }

    function handleToggledMenu(){
        return (({toggleMenu})=>({display: toggleMenu? "flex":"none"}))
    }


    return(
        <header id="header">
        <nav id="nav">
            <div className="nav-part1">
                <img src='./logo.png' alt="logo" />
            </div>


            <div className="nav-part2">
                <ul id="nav-list">
                    <li>
                        <NavLink href="home.html">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="about.html">About</NavLink>
                    </li>
                    <li>
                        <NavLink href="destination.html">Destination</NavLink>
                    </li>
                    <li>
                        <NavLink href="feedback.html">Feedback</NavLink>
                    </li>
                    <li>
                        <NavLink href="contact.html">Contact</NavLink>
                    </li>
                </ul>
                <div className="nav-phone-number">
                    <FaPhone />
                    <span> 10(256)-928 256</span>
                </div>
            </div>

            <div className="nav-part3" id="nav-part3">
                <div className="nav-red-button">
                    <NavLink href="./home.html#search-section">
                    <FaSearch className="nav-btn-text" />
                    </NavLink>
                </div>
                <div className="nav-red-button">
                    <NavLink href="login.html" className="nav-btn-text">Login</NavLink>
                </div>

            </div>

            <div className="toggle" onClick={ToggledMenu} style={()=>{handleToggledMenu()}}>
            <FaBars />

            </div>

        </nav>
        <div id="toggled-menu">
            <ul className="toggled-menu-list">
                <li className="toggled-menu-item">
                    <NavLink href="home.html" className="toggled-menu-item-text">Home</NavLink>
                </li>
                <li className="toggled-menu-item">
                    <NavLink href="about.html" className="toggled-menu-item-text">About</NavLink>
                </li>
                <li className="toggled-menu-item">
                    <NavLink href="destination.html" className="toggled-menu-item-text">Destination</NavLink>
                </li>
                <li className="toggled-menu-item">
                    <NavLink href="feedback.html" className="toggled-menu-item-text">Feedback</NavLink>
                </li>
                <li className="toggled-menu-item">
                    <NavLink href="contact.html" className="toggled-menu-item-text">Contact</NavLink>
                </li>
                <li className="toggled-menu-item" id="toggled-menu-item-login">
                    <NavLink href="login.html" className="toggled-menu-item-text">Login</NavLink>
                </li>
            </ul>
        </div>
    </header>

    )
}

export default NavBar;