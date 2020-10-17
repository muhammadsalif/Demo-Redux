import React from "react";
import Counter from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <hr></hr>
      <CounterDisplay></CounterDisplay>
    </Provider>
  );
}

export default App;
