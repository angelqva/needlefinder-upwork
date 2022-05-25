//STATE
const data = {
	count: 0,
};

//ACTION TYPES
const SET_COUNT = "SET_COUNT";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

//REDUCER
export default function count_reducer(state = data, action) {
	switch (action.type) {
		case SET_COUNT:
			return { ...state, count: action.payload };
		case INCREMENT_COUNT:
			return { ...state, count: state.count + action.payload };
		case DECREMENT_COUNT:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
}

//ACTIONS
export const set_count = (value) => async (dispatch) => {
	dispatch({
		type: SET_COUNT,
		payload: value,
	});
};
export const increment_count = (value) => async (dispatch) => {
	dispatch({
		type: INCREMENT_COUNT,
		payload: value,
	});
};
export const decrement_count = (value) => async (dispatch) => {
	dispatch({
		type: DECREMENT_COUNT,
		payload: value,
	});
};
