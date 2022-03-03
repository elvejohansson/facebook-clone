import React from "react";

import Feed from "../components/feed";
import MessagePoster from "../components/messagePoster";

import { Wrapper } from "../styles/shared";

const HomePage = () => {
	return (
		<Wrapper>
			<MessagePoster />
			<Feed />
		</Wrapper>
	);
};

export default HomePage;