// import { createStore } from "redux"; is used when you only have one slice-reducer.
// configureStore can be used for single or multiple slices
import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

// reducer: {counter: counterSlice.reducer, ..} -> for multiple slice-reducers
const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

/*
  We dispatch actions by using the slice's "actions" property which is the endpoint for our reducers
  counterSlice.actions.toggleCounter() -> dispatches the toggleCounter action
*/
// export slice actions to be used in a component.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
