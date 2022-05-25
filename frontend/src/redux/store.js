import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import count_reducer from "./count";

const rootReducer = combineReducers({
	count: count_reducer,
});

export default function generateStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk)),
	);
	return store;
}
