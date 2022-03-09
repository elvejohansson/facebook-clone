import axios from "axios";

export {
	GetAll,
	Create,
	Delete
};


let PORT = process.env.REACT_APP_SERVER_PORT;
if (process.env.NODE_ENV === "development")
	PORT = "3000";


async function GetAll() {
	return await axios
		.get(`http://localhost:${PORT}/api/posts`)
		.then(res => res.data)
		.catch(err => console.error(err));
}
async function Create(content: string, user: any) {
	return await axios
		.post(`http://localhost:${PORT}/api/posts`, {
			"content": content,
			"author_id": user.sub.split("|")[1],
			"author_name": user.name,
			"created_at": new Date().toISOString().slice(0, 19).replace("T", " "),
			"author_img": user.picture
		})
		.then(res => console.log(res))
		.catch(err => console.error(err));
}
async function Delete(id: string, author_id: string, user: any) {
	if (author_id !== user.sub.split("|")[1]) {
		console.error("Wrong user ID, aborting request!");
		return;
	}

	return await axios
		.delete(`http://localhost:${PORT}/api/posts/${id}`)
		.catch((err) => console.error(err));
		
}