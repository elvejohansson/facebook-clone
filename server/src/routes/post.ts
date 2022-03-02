import { Request, Response } from "express";
import { getAllPosts, getPostById } from "../controllers/post.controller";

export {
	getAll,
	getById
};

async function getAll(req: Request, res: Response) {
	const users = await getAllPosts();
	
	res.status(200).json(users);
}

async function getById(req: Request, res: Response) {
	const user = await getPostById(req.params.id);

	if (!user)
		res.status(404).send("Resource Not Found!");

	res.status(200).json(user);
}