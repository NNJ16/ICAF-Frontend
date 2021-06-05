import React from 'react'
import login from '../../img/login.png';
import logon from '../../img/logo-nav.png';

export const NavBar = () => {
    return (
        <div className="nav-back">
            <nav className="nav">
                    <div className="container">
                        <div id="logo" className="logo">
                            <img className="logo-img" src={logon} alt="" />
                        </div>
                        <div id="mainListDiv" className="main_list">
                            <ul className="navlinks ">
                                <li className="dropdown">
                                   <div className="dropbtn"> <a href="#">Workshops</a></div>
                                   <div className="dropdown-content dd">
                                       <a className="dd" href="#">Workshops</a>
                                       <a className="dd" href="#">Call for Workshop</a>
                                      
                                   </div>
                                </li>

                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#"><img className="login-logo" src={login} alt="" /></a></li>
                            </ul>
                        </div>
                        <span className="navTrigger">
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </nav>
        </div>
    )
}

