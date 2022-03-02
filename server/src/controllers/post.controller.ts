import { sequelize } from "../sequelize";

export {
	getAllPosts,
	getPostById
};

const getAllPosts = async () => {
	const posts: Array<object> = await sequelize.models.Post.findAll();
	return posts;
};

const getPostById = async (id: string) => {
	const post = await sequelize.models.Post.findByPk(id);
	return post;
};