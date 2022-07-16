const express = require('express')
const cors = require('cors')

class Server {

	constructor() {
		// Main app
		this.app = express();

		// Constants
		this.port = process.env.PORT || 8080;
		this.usersPath = "/api/users"

		// Middlewares
		this.middlewares()

		// Routes
		this.routes();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.static('public'));
		this.app.use(express.json());
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/users.routes'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

}

module.exports = Server;