import React from "react"

const BankDetails = ()=>{
    return (
        <div>
            <p className="fw-bold pt-4 h5">
                Bank Details
            </p>
            <div className="col-8">
                <label className="fw-bold">
                    Account holder's name
                </label>
                <input className="form-control" placeholder="As seen on your card" />
            </div>
            <div className="col-8 pt-2">
                <label className="fw-bold">
                    Routing Number
                </label>
                <input className="form-control" placeholder="50780" />
            </div>
            <div className="col-8 pt-2">
                <label className="fw-bold">
                    Account Number
                </label>
                <input className="form-control" placeholder="1234567890" />
            </div>
        </div>
    )
}

export default BankDetails