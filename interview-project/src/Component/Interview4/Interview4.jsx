import React from 'react'
import './Interview4.css'
import { increment, decrement } from './Slice'
import { useDispatch, useSelector } from "react-redux";
function Interview4() {

    const items = useSelector(state => state.bikes.cartItems);

    const dispatch = useDispatch();

  return (
    <>
    <div className="reducer-item-box">
          {
            items.map((item)=>(
                <div key={item.id} className="reducer-container">
            <div  className="reducer-single-item">
              <p>{item.name}</p>
            </div>

            <div className="reducer-action-button">
              <button
              onClick={()=>dispatch(decrement(item.id))}
              >
                Decrease
              </button>
              <input type="text" value={item.quantity}  readOnly />
              <button
               onClick={()=>dispatch(increment(item.id))}
              >
                Increase
              </button>
            </div>
          </div>    
            ))
          }
      </div>
    </>
  )
}

export default Interview4