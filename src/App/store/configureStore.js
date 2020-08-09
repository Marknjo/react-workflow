/**
 * @Todo Import your Reducers here
 */

import { createStore, combineReducers } from "./node_modules/redux";

export default () => {
	const store = createStore(
		combineReducers({}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
