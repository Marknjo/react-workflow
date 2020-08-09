import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App/App";

const rootApp = (
	<StrictMode>
		<App />
	</StrictMode>
);

ReactDOM.render(rootApp, document.getElementById("root"));
