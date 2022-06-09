import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import TopBar from "./components/TopBar";
import Main from "./pages/Main";

const container = document.getElementById("root");

ReactDOM.render(
	<Router>
		<TopBar />
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	</Router>

,container
);
