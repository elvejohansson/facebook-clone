import { randomUUID } from "crypto";
import { sequelize } from "../sequelize";

export {
	getAllPosts,
	getPostById,
	createPost,
	removePost
};

const getAllPosts = async () => {
	const posts: Array<object> = await sequelize.models.Post.findAll();
	return posts;
};

const getPostById = async (id: string) => {
	const post = await sequelize.models.Post.findByPk(id);
	return post;
};

const createPost = async (data: any) => {
	await sequelize.models.Post.create({
		id: randomUUID(),
		content: data.content,
		author_id: data.author_id,
		author_name: data.author_name,
		created_at: data.created_at,
		author_img: data.author_img
	});
};

const removePost = async (id: string) => {
	await sequelize.models.Post.destroy({
		where: {
			id: id
		}
	});
};