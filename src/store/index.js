// import { createStore } from "redux"; is used when you only have one slice-reducer.
// configureStore can be used for single or multiple slices
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// reducer: {counter: counterSlice.reducer, ..} -> for multiple slice-reducers
const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});

/*
  We dispatch actions by using the slice's "actions" property which is the endpoint for our reducers
  counterSlice.actions.toggleCounter() -> dispatches the toggleCounter action
*/

export default store;
