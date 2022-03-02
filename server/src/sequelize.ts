import { Sequelize } from "sequelize";
import { DB, DB_PORT, dialect, HOST, PASSWORD, USER } from "./config/db.config";

const sequelize = new Sequelize(
	`postgres://${USER}:${PASSWORD}@${HOST}:${DB_PORT}/${DB}`, {
		dialect: dialect
	});

const modelDefiners = [
	require("./models/post.model")
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

export { sequelize };