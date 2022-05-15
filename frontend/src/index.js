import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import TopBar from "./components/TopBar.js";
import Main from "./pages/Main";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Router>
		<TopBar />
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	</Router>
);
