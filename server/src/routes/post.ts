import { Request, Response } from "express";
import { getAllPosts, getPostById, createPost } from "../controllers/post.controller";

export {
	getAll,
	getById,
	create
};

async function getAll(req: Request, res: Response) {
	const posts = await getAllPosts();
	
	res.status(200).json(posts);
}

async function getById(req: Request, res: Response) {
	const post = await getPostById(req.params.id);

	if (!post)
		res.status(404).send("Resource Not Found!");

	res.status(200).json(post);
}

async function create(req: Request, res: Response) {
	if (req.body.id) {
		res.status(400).send("Bad request: ID should not be provided, since it is determined automatically by the database!");
	} else {
		await createPost(req.body);
		res.status(201).end();
	}
}