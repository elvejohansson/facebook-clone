import React, { useState, useEffect } from "react";
import { GetAll } from "../services/posts.service";

import { Wrapper } from "../styles/shared";

const HomePage = () => {
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
		<>
			<Wrapper>
				<a href="profile">profile</a>
				{data !== undefined
					? data.map((element: any) =>
						<h1 key={element.id}>{element.content}</h1>
					)
					: <h4>No data</h4>
				}
			</Wrapper>
		</>
	);
};

export default HomePage;