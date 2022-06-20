import React, { useState, useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import Onboarding from '../../Components/Onboarding/Onboarding';

import './HomePage.css'

const HomePage = () => {
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
        <div>
            <nav className={navbarstyle}>
                <div className="container">
                    <div className={logoStyle}></div>
                </div>
            </nav>
            <div id="Listener" className='container-fluid'>
                <Hero />
                <Onboarding />


                
                <div className='row break justify-content-center'>
                    <div className='col'></div>
                    <div className='col-md-auto'>
                        <h1 className=' onboarding-title'>Offical <span className='under'>Partners</span></h1>
                    </div>
                    <div className='col'></div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col'></div>
                    <div className='col-md-auto logos'></div>
                    <div className='col'></div>
                </div>

            </div>
        </div>
    );
}


    ;

export default HomePage;