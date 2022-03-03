import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { GetAll } from "../../services/posts.service";

const Wrapper = styled.div`
	
`;
const Post = styled.div`
	background: #fff;
	border-radius 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 1.5rem 0;
	width: 600px;
`;

const Feed = () => {
	const [ data, setData ] = useState(undefined as any);

	useEffect(() => {
		retrieveData();
	}, []);
	
	async function retrieveData() {
		const data = await GetAll()
			.then(res => res);
		setData(data);
	}

	return (
		<Wrapper>
			{data !== undefined
				? data.map((element: any) =>
					<Post key={element.id}>
						<h3>{element.author_name}</h3>
						<h1>{element.content}</h1>
					</Post>
				)
				: <h4>No data</h4>
			}
		</Wrapper>
	);
};

export default Feed;