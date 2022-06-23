import React, { useState } from 'react';
import jsonp from 'jsonp';

import './EmailForm.css';

export const Status = {
    idle: 'IDLE',
    loading: 'LOADING',
    success: 'SUCCESS',
    error: 'ERROR'
}

function toQueryString(params) {
    return Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
}

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(Status.idle);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    const url = "https://socale.us14.list-manage.com/subscribe/post?u=dc72b0f9e72dad02d943b7fb3&amp;id=346c7457d6";

    const subscribe = React.useCallback((data) => {
        const params = toQueryString(data);
        const ajaxURL = url.replace("/post?", "/post-json?");

        const newUrl = ajaxURL + "&" + params;

        setError(null);
        setStatus(Status.loading);

        jsonp(newUrl, { param: "c" }, (err, data) => {
            if (err) {
                setStatus(Status.error);
                setError(err);
            } else if (data.result !== "success") {
                setStatus(Status.error);
                setError(data.msg);
            } else {
                setStatus(Status.success);
                setValue(data.msg);
            }
        });
    }, []);

    const onClickSubmit = () => {
        const regEx = new RegExp("/^\S+@\S+\.\S+$/");
        if (regEx.test(email)) {
            subscribe({
                EMAIL: email,
            });
        }
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
                            <input type="text" className='form-control input-send' placeholder="Email Address" onChange={handleChange} />
                            <button className='button-send' onClick={onClickSubmit}><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmailForm;