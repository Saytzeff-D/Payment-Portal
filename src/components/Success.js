import React from "react";
import { useDispatch } from "react-redux";

const Success = ()=>{
    const dispatch = useDispatch()
    return (
        <div className="container py-5">
            <p className="fw-bold text-center fs-5 mb-0">
                Payment Completed
            </p>
            <p className="text-muted text-center">
               The payment of $45,000 has been received successfully 
            </p>
            <button onClick={()=>dispatch({type: 'changeView', payload: ''})} data-bs-dismiss="modal" className="btn btn-success w-100">
                Go back to platform
            </button>
        </div>
    )
}

export default Success