import axios from "axios";

export {
	GetAll
};

async function GetAll() {
	return await axios
		.get("http://localhost:3000/api/posts")
		.then(res => res.data)
		.catch(err => console.error(err));
}