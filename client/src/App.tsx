import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadingModal from "./components/loadingModal";
import Nav from "./components/nav";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading)
		return ( <LoadingModal /> );

	if (!isAuthenticated)
		return ( <LandingPage /> );

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={ <HomePage /> } />
				<Route path="/profile" element={ <ProfilePage /> } />
			</Routes>
		</BrowserRouter> 
	);
};

export default App;