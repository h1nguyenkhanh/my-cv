import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div className="container"><NavLink className="navbar-brand js-scroll-trigger" to="/">HEllO there!</NavLink>
                <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/news">NEWS</NavLink>
                        </li>
                        {/* <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/news-detail">NEWS DETAIL</NavLink>
                        </li> */}
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
