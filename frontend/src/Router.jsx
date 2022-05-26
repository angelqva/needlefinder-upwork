import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import generateStore from "./redux/store";
import Home from "./views/Home";
import Page1 from "./views/Page1";
import message from "./i18n";
import { IntlProvider } from "react-intl";
const store = generateStore();

function Router() {
	return (
		<StyledEngineProvider injectFirst>
			<Provider store={store}>
				<IntlProvider
					locale="it"
					timeZone="it-IT"
					messages={{ ...message["it"] }}
				>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />}>
								{/* <Route index element={<Page1 />} /> */}
								<Route path="page1" element={<Page1 />} />
								{/* <Route path="example" element={<Custom />} />
                            <Route path="profesores" element={<Profesores />} />
                            <Route path="postgrados-nacionales" element={<Nacionales />} />
                            <Route path="postgrados-internacionales" element={<Internacionales />} />
                            <Route path="reportes" element={<Reportes />} />*/}
							</Route>
						</Routes>
					</BrowserRouter>
				</IntlProvider>
			</Provider>
		</StyledEngineProvider>
	);
}

export default Router;
