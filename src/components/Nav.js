import React from 'react'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div className="container"><a className="navbar-brand js-scroll-trigger" href="index.html">HEllO there!</a>
                <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="portfolio.html">PORTFOLIO</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="about.html">ABOUT</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="contact.html">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
