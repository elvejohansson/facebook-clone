import React from "react";
import styled from "styled-components";

import LoginButton from "../components/loginButton";

const Main = styled.main`
	background: var(--background);
	width: 100%;
	height: 95vh;
	padding: 15% 20% 0 20%;

	h1 {
		color: var(--accent);
		font-size: 3.5rem;
		font-weight: 800;
	}

	p {
		font-size: 1.4rem;
		font-weight: 500;
		margin-bottom: 4rem;
	}
`;
const Footer = styled.footer`
	padding: 0 20%;
	height: 5vh;
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 0.8rem;
		font-weight: 300;
	}

	a {
		text-decoration: none;
		color: var(--accent);
		font-size: 0.8rem;
		font-weight: 500;
	}
`;


const LandingPage = () => {
	return (
		<>
			<Main>
				<h1>!Facebook</h1>
				<p>!Facebook helps you connect and share with the people in your life.</p>
				<LoginButton />
			</Main>
			<Footer>
				<p>Elve © 2022</p>
				<a href="https://github.com/elvejohansson/facebook-clone" target="_blank" rel="noreferrer">
					Source code
				</a>
			</Footer>
		</>
	);
};

export default LandingPage;