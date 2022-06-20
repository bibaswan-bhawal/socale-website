import React from 'react';
import Banner from '../Banner/Banner';

import './Hero.css';

const Hero = () => (
    <div className='row hero'>
        <div className='col d-flex justify-content-center align-self-center'>
            <Banner />
        </div>

        <div className='col text-center '>
            <div className='banner-background'>
                <div className='banner-hero'>
                </div>
            </div>
        </div>
    </div>
)

export default Hero;