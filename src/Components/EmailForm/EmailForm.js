import React from 'react';

import './EmailForm.css';

const EmailForm = () => (
    <div className='email-form'>
        <div className="container boob">
            <div className="row boob">
                <div className="col boob">
                    <div className='phone'>
                    </div>
                </div>
                <div className="col boob">
                    <h3 className='text-dec'>Enter your UC San Diego email!</h3>
                    <div className="input-group mb-3">
                        <input type="text" className='form-control input-send' placeholder="Email Address" />
                        <button className='button-send'><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default EmailForm;