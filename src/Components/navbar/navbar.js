import React, { useEffect, useState } from 'react';

import './navbar.css';

const NavBar = () => {
    const [navbarstyle, setnavbarstyle] = useState("navbar sticky-top");
    const [logoStyle, setLogoStyle] = useState("logo");

    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setnavbarstyle("navbar sticky-top navbar-alt");
                setLogoStyle("logo logo-alt");
            }

            if (document.documentElement.scrollTop <= 80) {
                setnavbarstyle("navbar sticky-top");
                setLogoStyle("logo");
            }
        };

    }, []);

    return (
        <nav className={navbarstyle}>
            <div className="container">
                <div className={logoStyle}></div>
            </div>
        </nav>
    );
};

export default NavBar;