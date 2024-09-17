import React from "react"

const Crypto = ()=>{
    return (
        <div>
            <p className="fw-bold fs-5">
                Pay with Ethereum
            </p>
            <p className="text-muted">
                To complete this payment for REF 4578, send exactly 15,7500 ETH to the address below
            </p>
            <p className="text-muted">
                0x742d35Cc6634C0532925a3b844Bc454e4438f44e
            </p>
            {/* QRCode */}
            <p className="text-muted">
                Please make sure to only send ETH to this address
            </p>
            <div className="bg-secondary py-2 px-4 text-muted">
                <div className="d-flex justify-content-between">
                    <p>Amount to due</p>
                    <p>15 <i className="fa fa-copy"></i></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Address</p>
                    <p>0x742d35Cc... <i className="fa fa-copy"></i></p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Remaining time</p>
                    <p>00:26:20 <i className="fa fa-copy"></i></p>
                </div>
            </div>
            <div className="px-2">
                <p className="fw-bold fs-4">
                    Connect Account
                </p>                
            </div>
            <button className="btn btn-success w-100">
                Pay 15,7500 ETH
            </button>
        </div>
    )
}

export default Crypto