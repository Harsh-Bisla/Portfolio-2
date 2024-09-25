import React, { useState } from "react";
import Logo from "../assets/logo.png"
import EducationLogo from "../assets/educationLogo.png";
import { Link } from 'react-scroll';



function Header() {
    const [Menu, setMenu] = useState(false)

    const openMenu = () => {
        if (Menu == false) {
            setMenu(true)
        }
        else {
            setMenu(false)
        }
    }
    return (
        <nav className="navbar">
            <div className="logo">
                <img width={25} src={Logo} alt="logo" />
                <p>Harsh</p>
            </div>
            <div className="nav-items">
                <ul style={{ left: Menu == false ? "-900px" : "-70px" }}>
                    <Link activeClass="active" spy={true} offset={-70} to="homeSection" smooth={true} duration={700}><li>Home</li></Link>

                    <Link activeClass="active" spy={true} offset={-70} to="About" smooth={true} duration={700}><li>About</li></Link>

                    <Link activeClass="active" spy={true} offset={-70} to="skillSection" smooth={true} duration={700}><li>Skills</li></Link>

                    <Link activeClass="active" spy={true} offset={-70} to="projectSection" smooth={true} duration={700}><li>Projects</li></Link>
                    
                    <Link activeClass="active" spy={true} offset={-70} to="contactSection" smooth={true} duration={700}><li>Contact-Me</li></Link>
                </ul>
                <Link activeClass="active" spy={true} offset={-70} to="educationSection" smooth={true} duration={700}><img width={24} src={EducationLogo} alt="Education-logo" /></Link>
                <div onClick={openMenu} className="menuContainer">
                    <div className={Menu == false ? `bar1` : `bar1Close`}></div>
                    <div className={Menu == false ? `bar2` : `bar2Close`}></div>
                    <div className={Menu == false ? `bar3` : `bar3Close`}></div>
                </div>
            </div>
        </nav>
    )
}

export default Header;