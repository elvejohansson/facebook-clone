import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading)
		return ( <h1>Loading site...</h1> );

	if (!isAuthenticated)
		return ( <LandingPage /> );

	

	return ( <HomePage /> );
};

export default App;