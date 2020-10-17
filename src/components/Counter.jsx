import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  // Local state
  // let [counter, setCounter] = useState(0);
  let [val, setVal] = useState(0);

  // redux
  let dispatch = useDispatch();
  let counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <div>
      <h1>Counter Value : {counter}</h1>
      <button
        onClick={() => {
          // Local state

          // setCounter(counter + 1);

          // redux
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        Increment{" "}
      </button>
      <button
        onClick={() => {
          // Local state
          // setCounter(counter - 1);
          // Redux Store
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement{" "}
      </button>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          // Local state
          // setCounter(+val + counter);
          // Redux store
          dispatch({
            type: "INCREMENT_BY",
            payload: {
              val: val,
            },
          });
        }}
      >
        Increment by
      </button>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <button
        type="text"
        onClick={() => {
          // Local state
          // setCounter(counter - Number(val));
          // Redux store
          dispatch({
            type: "DECREMENT_BY",
            payload: {
              val: val,
            },
          });
        }}
      >
        Decrement by
      </button>
    </div>
  );
}
