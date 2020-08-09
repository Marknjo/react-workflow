import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Layouts/Header";
import NotFoundPage from "../components/NotFoundPage";

const Home = () => (
	<div>
		<h2>Home Page</h2>
		<p>
			This is a fresh app with support of react dates, react redux, redux,
			moment, uuid, and Test using Jest.
		</p>
	</div>
);
const Help = () => (
	<div>
		<h2>Help Page</h2>
	</div>
);

const AppRouter = () => (
	<BrowserRouter>
		<>
			<Header />
			<Switch>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/help">
					<Help />
				</Route>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</>
	</BrowserRouter>
);

export default AppRouter;
