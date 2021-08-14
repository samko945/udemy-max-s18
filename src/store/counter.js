import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter", // every slice needs an id
	initialState: initialCounterState,
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
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// export slice actions to be used in a component.
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
