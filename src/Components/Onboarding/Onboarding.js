import React from 'react';
import EmailForm from '../EmailForm/EmailForm';

import './Onboarding.css';

const Onboarding = () => (
    <div name="myScrollToElement" className='row onboarding justify-content-center'>
        <div className='col'></div>
        <div className='col col-md-auto'>
            <div className='box'>
                <div className='headline text-center'>
                    <h1 className='onboarding-title'>Join Our Exclusive <span className='under'>Community!</span></h1>
                </div>
                <EmailForm />
            </div>
        </div>
        <div className='col'></div>
    </div>
);

export default Onboarding;