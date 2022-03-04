import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import { Delete, GetAll } from "../../services/posts.service";

const Wrapper = styled.div`
	
`;
const Post = styled.div`
	background: #fff;
	border-radius 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 1.75rem 0;
	width: 600px;
	padding: 1rem;

	.top {
		margin-bottom: 1.5rem;
	}
	.top div {
		display: inline-block;
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
	img {
		border-radius: 100%;
		display: inline-block;
		height: 32px;
		margin-right: 0.5rem;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.4rem;
	}

	hr {
		margin: 1rem 0;
		outline: none;
		border: none;
		height: 1px;
		background: rgba(0, 0, 0, 0.2);
	}

	h3 {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--accent);
	}
`;

const Feed = () => {
	const { user } = useAuth0();
	const [ data, setData ] = useState([] as Array<object>);

	useEffect(() => {
		retrieveData();
	}, []);
	
	async function retrieveData() {
		const response: Array<object> = await GetAll()
			.then(res => res)
			.catch(err => console.error(err));

		if (response !== undefined) {
			response.sort((x: any, y: any) => {
				return new Date(y.created_at).valueOf() - new Date(x.created_at).valueOf();
			});
		}
		
		setData(response);
	}

	async function handleDelete(post: any) {		
		Delete(post.id, post.author_id, user);
		window.location.reload();
	}

	return (
		<Wrapper>
			{data !== undefined
				? data.map((element: any) =>
					<Post key={element.id}>
						<div className="top">
							<img src={element.author_img} />
							<div>
								<h1>{element.author_name}</h1>
								<h2>{new Date(element.created_at).toDateString()}, {new Date(element.created_at).getHours()}:{new Date(element.created_at).getMinutes()}</h2>
							</div>
						</div>
						<p>{element.content}</p>
						<hr />
						{element.author_id === user?.sub?.split("|")[1]
							? <h3 onClick={() => handleDelete(element)}>Delete post</h3>
							: <></>
						}
					</Post>
				)
				: <h4>No data</h4>
			}
		</Wrapper>
	);
};

export default Feed;