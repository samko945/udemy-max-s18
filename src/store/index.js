// import { createStore } from "redux"; is used when you only have one slice-reducer.
// configureStore can be used for single or multiple slices
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter", // every slice needs an id
	initialState,
	reducers: {
		increment(state) {
			// Here we are allowed to so called mutate state.
			// Behind the scenes though, we aren't actually mutating state directly.
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.amount;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// reducer: {counter: counterSlice.reducer, ..} -> for multiple slice-reducers
const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;
