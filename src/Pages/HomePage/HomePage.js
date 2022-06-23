import React from 'react';
import Hero from '../../Components/Hero/Hero';
import NavBar from '../../Components/navbar/navbar';
import Onboarding from '../../Components/Onboarding/Onboarding';
import Sponsors from '../../Components/Sponsors/Sponsors';

import './HomePage.css'

const HomePage = () => (
        <div>
            <NavBar />
            <div id="Listener" className='container-fluid'>
                <Hero />
                <Onboarding />
                <Sponsors />
            </div>
        </div>
    );

export default HomePage;