import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logoutButton";

const HomePage = () => {
	const { user } = useAuth0();

	return (
		<>
			<h1>Welcome to &quot;not-facebook&quot;</h1>
			<LogoutButton />

			<h2>User info</h2>
			{JSON.stringify(user, null, 2)};
		</>
	);
};

export default HomePage;