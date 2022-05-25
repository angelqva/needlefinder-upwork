import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import generateStore from "./redux/store";
import Home from "./views/Home";
import Page1 from "./views/Page1";
const store = generateStore();
function Router() {
	return (
		<StyledEngineProvider injectFirst>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/page1" element={<Page1 />}></Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</StyledEngineProvider>
	);
}

export default Router;
