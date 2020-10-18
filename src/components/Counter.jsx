import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementBy, increment } from "../store/Actions";
import { decrement } from "../store/Actions";
import { incrementBy } from "./../store/Actions";

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
          // Before actions files
          // dispatch({
          //   type: "INCREMENT",
          // });

          // After actions files
          dispatch(increment());
        }}
      >
        Increment{" "}
      </button>
      <button
        onClick={() => {
          // Local state
          // setCounter(counter - 1);
          // Redux Store
          // Before action file
          // dispatch({ type: "DECREMENT" });
          // After action file
          dispatch(decrement());
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
          // Before actions file
          // dispatch({
          //   type: "INCREMENT_BY",
          //   payload: {
          //     val: val,
          //   },
          // });
          // After actions file
          dispatch(incrementBy(val));
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
          // Before action file
          // dispatch({
          //   type: "DECREMENT_BY",
          //   payload: {
          //     val: val,
          //   },
          // });
          // After action file
          dispatch(decrementBy(val));
        }}
      >
        Decrement by
      </button>
    </div>
  );
}
