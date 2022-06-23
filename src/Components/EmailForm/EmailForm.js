import React, {useState} from 'react';

import './EmailForm.css';

const EmailForm = () => {
    const [email, setEmail] = useState("");

    const onClickSubmit = () => {

    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className='email-form'>
            <div className="container boob">
                <div className="row boob">
                    <div className="col-sm-12 col-md-6 boob">
                        <div className='phone'>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 boob">
                        <h3 className='text-dec'>Enter your UC San Diego email!</h3>
                        <div className="input-group mb-3">
                            <input type="text" className='form-control input-send' placeholder="Email Address" onChange={handleChange}/>
                            <button className='button-send' onClick={onClickSubmit}><i class="fa-solid fa-arrow-right"></i></button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmailForm;