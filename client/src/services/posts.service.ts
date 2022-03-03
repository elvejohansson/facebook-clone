import axios from "axios";

export {
	GetAll,
	Create,
	Delete
};

async function GetAll() {
	return await axios
		.get("http://localhost:3000/api/posts")
		.then(res => res.data)
		.catch(err => console.error(err));
}
async function Create(content: string, user: any) {
	return await axios
		.post("http://localhost:3000/api/posts", {
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
	if (author_id !== user.sub.split("|")[1])
		console.log("wrong user id");

	return await axios
		.delete(`http://localhost:3000/api/posts/${id}`)
		.catch((err) => console.error(err));
		
}