import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../components/logoutButton";

const ProfilePage = () => {
	const { user } = useAuth0();

	return (
		<>
			<a href="/">&lt; back</a>
			<h1>{user?.name}</h1>
			{JSON.stringify(user, null, 2)}
			<LogoutButton />
		</>
	);
};

export default ProfilePage;