import React from 'react';
import Button from '../../Components/Button/Button';

import './Banner.css';

const Banner = () => (
    <div className='banner text-center'>
        <h1 className='title banner-text'>Your Social Network That Builds<mark>Itself</mark> <span className='highlighted'>Itself</span></h1>
        <p className='subtitle banner-text'><strong>UCSD's</strong> first semi-professional networking platform that connects like-minded individuals.</p>
        <Button href="#contact">Get an Invite</Button>
    </div>
)

export default Banner;