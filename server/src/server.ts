import express from "express";
import cors from "cors";

import { PORT } from "./config/server.config";
import { sequelize } from "./sequelize";

class App {
	public app: express.Application;
	public port: number | string;
	public routes: object;
  
	constructor(routes: object) {
		this.app = express();
		this.port = PORT || 8080;
		this.routes = routes;
  
		this.initializeDatabaseConnection();
		this.initializeMiddlewares();
		this.initializeRoutes();
	}

	public getServer() {
		return this.app;
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`[server]: Server is running at http://localhost:${this.port}`);
		});
	}

	private async initializeDatabaseConnection() {
		try {
			await sequelize.authenticate();
			await sequelize.sync();
			console.log("Database connection OK.");
		} catch (error: any) {
			console.log("Cannot connect to the database...");
			console.error(error.message);	
			process.exit(1);
		}
	}

	private initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors({
			origin: "http://localhost",
			optionsSuccessStatus: 200
		}));
	}

	private initializeRoutes() {
		this.app.get("/", (req, res) => {
			res.sendStatus(418);
		});

		for (const [routeName, routeController] of Object.entries(this.routes)) {
			if (routeController.getAll) {
				this.app.get(
					`/api/${routeName}`,
					this.handleAsyncError(routeController.getAll)
				);
			}
			if (routeController.getById) {
				this.app.get(
					`/api/${routeName}/:id`,
					this.handleAsyncError(routeController.getById)
				);
			}
			if (routeController.create) {
				this.app.post(
					`/api/${routeName}`,
					this.handleAsyncError(routeController.create)
				);
			}
		}
	}

	private handleAsyncError(handler: any) {
		return async function(req: express.Request, res: express.Response, next: express.NextFunction) {
			try {
				await handler(req, res);
			} catch (error) {
				next(error);
			}
		};
	}
}

export default App;