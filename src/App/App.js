import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
//import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

/**
 * @todo Configure store appropriately to continue
 */
//const store = configureStore();
/* 
<Provider store={store}>
	<p>
		{" "}
		This is a fresh app with support of react dates, react redux, redux, moment,
		uuid, and Test using Jest.{" "}
	</p>
	<AppRouter />
</Provider>; */

const App = () => <AppRouter />;

export default App;
