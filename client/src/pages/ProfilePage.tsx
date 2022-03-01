import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../components/logoutButton";

const Wrapper = styled.div`
	padding: 5rem 30%;
	text-align: center;

	img {
		width: 25%;
		border-radius: 50%;
		margin: 0 auto 1rem auto;
		display: block;
	}
	h1 {
		display: inline-block;
	}
	.verified {
		display: inline-block;
		width: 20px;
		margin: 0 0 0 0.5rem;
	}
	h2 {
		font-size: 1rem;
		font-weight: 600;
		opacity: 0.5;
		margin-bottom: 5rem;
	}
`;

const ProfilePage = () => {
	const { user } = useAuth0();

	return (
		<Wrapper>
			<img src={user?.picture} alt="Profile image" />
			<h1>{user?.name}</h1>
			{user?.email_verified === true ?
				<img className="verified" src={`${process.env.PUBLIC_URL}verified.svg`} alt="Verified" />
				: <></>
			}
			<h2>{user?.email}</h2>
			<LogoutButton />
		</Wrapper>
	);
};

export default ProfilePage;