import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
	width: 100%;
	padding: 1rem 3rem;
	background: #fff;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;

	h1 {
		font-size: 1.3rem;
	}

	img {
		width: 2rem;
		border-radius: 100%;
		display: inline-block;
	}
`;

const Nav = () => {
	const { user } = useAuth0();

	return (
		<Navbar>
			<Link className="link" to="/">
				<h1>!Facebook</h1>
			</Link>
			<Link className="link" to="/profile">
				<img src={user?.picture} alt="Profile" />
			</Link>
		</Navbar>
	);
};

export default Nav;