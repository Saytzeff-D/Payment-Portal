import React from "react"
import { useDispatch } from "react-redux"

const CardDetails = ()=>{
    const dispatch  = useDispatch()
    return (
        <div>
            <p className="fw-bold pt-4 h5">
                Card Details
            </p>
            <div className="col">
                <label className="fw-bold">
                    Cardholder's name
                </label>
                <input className="form-control" placeholder="As seen on your card" />
            </div>
            <div className="col pt-2">
                <label className="fw-bold">
                    Enter Card Number
                </label>
                <input className="form-control" placeholder="5078 0000 0000 0000" />
            </div>
            <div className="row">
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        Expiry Date
                    </label>
                    <input className="form-control" placeholder="00/24" />
                </div>
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        CVC
                    </label>
                    <input className="form-control" placeholder="000" />
                </div>
            </div>
            {/* Billing Address */}
            <p className="fw-bold pt-4 h5">
                Billing Address
            </p>
            <div className="col">
                <label className="fw-bold">
                    Country
                </label>
                <select className="form-select">
                    <option>Select Country</option>
                    <option>Nigeria</option>
                </select>
            </div>            
            <div className="row">
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        State
                    </label>
                    <input className="form-control" placeholder="Select State" />
                </div>
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        City
                    </label>
                    <input className="form-control" placeholder="Select City" />
                </div>
            </div>
            <div className="row">
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        Address 1
                    </label>
                    <input className="form-control" placeholder="Input address" />
                </div>
                <div className="col-6 pt-2">
                    <label className="fw-bold">
                        Address 2
                    </label>
                    <input className="form-control" placeholder="Input address" />
                </div>
            </div>
        </div>
    )
}

export default CardDetails