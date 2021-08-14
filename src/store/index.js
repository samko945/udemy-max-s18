import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
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

const counterReducer = (state = initialState, action) => {
	/* 
    Don't mutate state, always overwrite it by returning new state.
    Wrong -> state.counter++; return state;
    Correct -> return counter: state.counter++;
  */

	if (action.type === "increment") {
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === "increase") {
		return {
			...state,
			counter: state.counter + action.amount,
		};
	}

	if (action.type === "decrement") {
		return {
			...state,
			counter: state.counter - 1,
		};
	}

	if (action.type === "toggle") {
		return {
			...state,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
