import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Create } from "../../services/posts.service";

const Wrapper = styled.div`
	background: #fff;
	border-radius 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 1.75rem 0;
	width: 600px;
	padding: 1rem;
	display: flex;
	align-items: center;

	img {
		border-radius: 100%;
		width: 2.5rem;
		display: inline-block;
		margin-right: 1rem;
	}

	form {
		display: inline-block;
	}

	input {
		padding: 0.75rem 1rem;
		border-radius: 2rem;
		border: none;
		outline: none;
		width: 200%;
		background: rgba(0, 0, 0, 0.05);
		font-size: 0.9rem;
	}
`;

const MessagePoster = () => {
	const { user } = useAuth0();
	const [ message, setMessage ] = useState("");

	function handleSubmit(e: React.FormEvent<EventTarget>) {
		e.preventDefault();
		Create(message, user);
		window.location.reload();
	}

	return (
		<Wrapper>
			<img src={user?.picture} alt="Profile picture" />
			<form onSubmit={(e) => handleSubmit(e)}>
				<input placeholder="What's on your mind?" onChange={(e) => setMessage(e.currentTarget.value)} />
			</form>
		</Wrapper>
	);
};

export default MessagePoster;