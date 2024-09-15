import React from "react";
import CardDetails from "./CardDetails";
import BankDetails from "./BankDetails";
import { useDispatch, useSelector } from "react-redux";

const SelectPayment = ()=>{
    const method = useSelector(state=>state.method)
    const dispatch = useDispatch()
    return (
        <div>                                     
            <div class="modal-body">
                <p className='text-center fw-bold'>
                    Select Your Payment Method
                </p>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-dark me-2 px-5'>
                G Pay
                </button>
                <button className='btn btn-dark ms-2 px-4'>
                Pay with Pay
                </button>
            </div>
            <p className='text-center py-2'>
                or
            </p>
            <label className='fw-bold'>Pay with</label>
            <select onChange={(e)=>dispatch({type: 'changeMethod', payload: e.target.value})} className='form-select'>
                <option value={''}>
                Payment Method
                </option>
                <option value={'Card'}>
                Card
                </option>
                <option value={'Checking'}>
                Checking
                </option>
            </select>
            {
                method == 'Card'
                ?
                <CardDetails />
                :
                method == 'Checking'
                ?
                <BankDetails />
                :
                ''
            }
            <button disabled={method == ''} onClick={()=>dispatch({type: 'changeView', payload: 'Otp'})} className='btn btn-success mt-4 mb-5 w-100'>
                Pay $45000
            </button>
            </div>  
        </div>
    )
}

export default SelectPayment