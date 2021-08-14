import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

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
