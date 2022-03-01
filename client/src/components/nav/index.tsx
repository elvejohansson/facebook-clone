import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
	width: 100%;
	padding: 1rem 2rem;
	background: #fff;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;

	h1 {
		font-size: 1.3rem;
	}
`;

const Nav = () => {
	return (
		<Navbar>
			<Link className="link" to="/">
				<h1>!Facebook</h1>	
			</Link>
		</Navbar>
	);
};

export default Nav;