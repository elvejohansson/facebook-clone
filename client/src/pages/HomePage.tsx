import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../components/logoutButton";
import Nav from "../components/nav";

const Wrapper = styled.main`
	padding: 2rem 1rem;
`;

const HomePage = () => {
	const { user } = useAuth0();

	return (
		<>
			<Nav />

			<Wrapper>
				<LogoutButton />
			</Wrapper>
		</>
	);
};

export default HomePage;