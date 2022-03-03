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
	padding: 1rem;

	.top {
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #000;
		margin-bottom: 0.2rem;
	}
	h2 {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.5);
	}
	p {
		font-size: 1rem;
		font-weight: 400;
	}
`;

const Feed = () => {
	const [ data, setData ] = useState([] as Array<object>);

	useEffect(() => {
		retrieveData();
	}, []);
	
	async function retrieveData() {
		const response: Array<object> = await GetAll()
			.then(res => res);
		response.sort((x: any, y: any) => {
			return new Date(y.created_at).valueOf() - new Date(x.created_at).valueOf();
		});
		setData(response);
	}

	return (
		<Wrapper>
			{data !== undefined
				? data.map((element: any) =>
					<Post key={element.id}>
						<div className="top">
							<h1>{element.author_name}</h1>
							<h2>{new Date(element.created_at).toLocaleString()}</h2>
						</div>
						<p>{element.content}</p>
					</Post>
				)
				: <h4>No data</h4>
			}
		</Wrapper>
	);
};

export default Feed;