import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize ) => {
	const Post = sequelize.define("Post", {
		id : {
			primaryKey: true,
			type: DataTypes.UUIDV4,
			allowNull: false
		},
		content: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		author_id: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		author_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		created_at: {
			type: DataTypes.TIME,
			allowNull: false
		}
	}, {
		modelName: "Post",
		tableName: "Posts",
		timestamps: false,
	});

	return Post;
};