import React from 'react'
import useCounter from './useCounter'; 

function Interview6() {

    const {count, increment, decrement } = useCounter(0);

    
  return (
    <>
    <h1>Counter</h1>
    <button onClick={decrement} >Decrease</button>
    <span>{count}</span>
    <button  onClick={increment} >Increase</button>
    </>
)
}

export default Interview6