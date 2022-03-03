import { randomUUID } from "crypto";
import { sequelize } from "../sequelize";

export {
	getAllPosts,
	getPostById,
	createPost,
	removePost
};

async function getAllPosts() {
	const posts: Array<object> = await sequelize.models.Post.findAll();
	return posts;
}

async function getPostById(id: string) {
	const post = await sequelize.models.Post.findByPk(id);
	return post;
}

async function createPost(data: any) {
	await sequelize.models.Post.create({
		id: randomUUID(),
		content: data.content,
		author_id: data.author_id,
		author_name: data.author_name,
		created_at: data.created_at,
		author_img: data.author_img
	});
}

async function removePost(id: string) {
	await sequelize.models.Post.destroy({ where: {id: id} });
}