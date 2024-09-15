import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import SelectPayment from './components/SelectPayment';
import Otp from './components/Otp';
import Success from './components/Success';

function App() {
  const view = useSelector(state=>state.view)
  return (
    <div className="container py-5">
      <button className='btn btn-success btn-lg' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Pay Now
      </button>

      <div class="modal fade" data-bs-backdrop="static" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="py-4 px-4">
              <div className='d-flex justify-content-between border-bottom'>
                <div>
                  <p className='fw-bold'>Logo</p>
                </div>
                {
                  view !== 'Success'
                  &&
                  <div>
                    <p className='mb-0 end fw-bold'>Pay</p>
                    <p className='text-success fs-4 fw-bold'>$45000</p>
                  </div>
                }
              </div>
            </div> 
              {
                view == 'Otp'
                ?
                <Otp />
                :
                view == 'Success'
                ?
                <Success />
                :              
                <SelectPayment />
              }      
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
