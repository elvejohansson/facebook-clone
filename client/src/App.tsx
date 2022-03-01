import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LoadingModal from "./components/loadingModal";

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading)
		return ( <LoadingModal /> );

	if (!isAuthenticated)
		return ( <LandingPage /> );

	return ( <HomePage /> );
};

export default App;