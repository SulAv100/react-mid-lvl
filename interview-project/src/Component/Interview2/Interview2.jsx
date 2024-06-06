import React, { useState, useReducer } from "react";
import "./Interview2.css";

function Interview2() {
  const items = [
    { id: 1, name: "Asus", quantity: 0 },
    { id: 2, name: "Lenovo", quantity: 0 },
    { id: 3, name: "Hp", quantity: 0 },
    { id: 4, name: "Acer", quantity: 0 },
    { id: 5, name: "Victus", quantity: 0 },
  ];

  const initialState = items;

  const reducer = (state, action) => {
    switch (action.type) {
      case "DECREMENT":
        return state.map((item) =>
          item.id === action.payload.id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      case "INCREMENT":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
  };

  const [cartItems, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="reducer-item-box">
        {cartItems?.map((item, index) => (
          <div key={index} className="reducer-container">
            <div key={item.id} className="reducer-single-item">
              <p>{item.name}</p>
            </div>

            <div className="reducer-action-button">
              <button
                onClick={() => dispatch({ type: "DECREMENT", payload: item })}
              >
                Decrease
              </button>
              <input type="text" value={item.quantity} readOnly />
              <button
                onClick={() => dispatch({ type: "INCREMENT", payload: item })}
              >
                Increase
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Interview2;
