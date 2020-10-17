import React from "react";
import { useSelector } from "react-redux";

export default function CounterDisplay() {
  let val = useSelector((state) => state.counter);
  let newVal = JSON.stringify(val);

  return <div>Counter Display {newVal}</div>;
}
