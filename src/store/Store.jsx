import { createStore } from "redux";
import { reducer } from "./Reducer";

// This createStore required reducer
export const store = createStore(reducer);
