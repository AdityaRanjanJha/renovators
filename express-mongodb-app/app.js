// app.js
const express = require("express");
const { MongoClient } = require("mongodb");
const calendarRoutes = require("./routes/calendar");
const orderRoutes = require("./routes/orders");

const app = express();
const PORT = 6969;

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "renovators";

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((client) => {
		console.log("Connected to MongoDB");
		const db = client.db(dbName);

		// Attach the database to the request object for each request
		app.use((req, res, next) => {
			req.db = db;
			next();
		});

		// Use the routes
		app.use("/calendar", calendarRoutes);
		app.use("/orders", orderRoutes);

		// Start the server
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});
