import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OtpInput from "react18-input-otp";

const Otp = ()=>{
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch()
    const handleChange = (enteredOtp)=>{
        setOtp(enteredOtp)
    }
    return (
        <div>
            <p className="text-center fw-bold px-md-5">
                Please enter your 4-digit card pin to authorize this payment
            </p>
            <div className="d-flex justify-content-center">
                <div className="col-6">
                <OtpInput value={otp} onChange={handleChange} numInputs={4} inputStyle={'form-control fs-2 w-100 mx-2 px-2'} containerStyle={''} shouldAutoFocus={true}  />
                </div>
            </div>
            <div className="d-flex justify-content-center py-4">
                <button onClick={()=>dispatch({type: 'changeView', payload: ''})} className="btn btn-light-green me-2 px-4">
                    Go Back
                </button>
                <button onClick={()=>dispatch({type: 'changeView', payload: 'Success'})} className="btn btn-success ms-2 px-4">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Otp