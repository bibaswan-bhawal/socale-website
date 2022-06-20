import React from 'react';
import * as Scroll from 'react-scroll';


import './Button.css';

const Button = ({ children, href }) => (
    <button className='button-hero' onClick={() => {
        window.scrollTo(0, window.innerHeight - 25);
    }}>{children}</button>
);

export default Button;