import { useState, createContext } from "react";
import Home from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/AboutPage";
import Portfolio from "./Pages/PortfolioPage";
import Contact from "./Pages/ContactPage";

export const ErrorContext = createContext({
	showError: false,
	setShowError: (setShowError: boolean): void => {},
});

export const SuccessContext = createContext({
	showSuccess: false,
	setShowSuccess: (setShowSuccess: boolean): void => {},
});

export default function App() {
	const [showError, setShowError] = useState<boolean>(false);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	return (
		<div>
			<ErrorContext.Provider value={{ showError, setShowError }}>
				<SuccessContext.Provider value={{ showSuccess, setShowSuccess }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/portfolio" element={<Portfolio />} />
					</Routes>
				</SuccessContext.Provider>
			</ErrorContext.Provider>
		</div>
	);
}
