const express = require("express");
const router = express.Router();

// POST: Create a new todo item
router.post("/", async (req, res) => {
	try {
		const newTodo = req.body;
		const result = await req.db.collection("todoList").insertOne(newTodo);
		res.status(201).json({ message: "Todo item created", result });
	} catch (error) {
		res.status(500).json({ message: "Error creating todo item", error });
	}
});

// GET: Retrieve all todo items
router.get("/", async (req, res) => {
	try {
		const todoList = await req.db.collection("todoList").find().toArray();
		res.status(200).json(todoList);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving todo items", error });
	}
});

// PUT: Update a todo item by ID
router.put("/:id", async (req, res) => {
	try {
		const todoId = req.params.id;
		const updatedTodo = req.body;
		const result = await req.db
			.collection("todoList")
			.updateOne({ _id: new ObjectId(todoId) }, { $set: updatedTodo });
		res.status(200).json({ message: "Todo item updated", result });
	} catch (error) {
		res.status(500).json({ message: "Error updating todo item", error });
	}
});

// DELETE: Delete a todo item by ID
router.delete("/:id", async (req, res) => {
	try {
		const todoId = req.params.id;
		const result = await req.db
			.collection("todoList")
			.deleteOne({ _id: new ObjectId(todoId) });
		res.status(200).json({ message: "Todo item deleted", result });
	} catch (error) {
		res.status(500).json({ message: "Error deleting todo item", error });
	}
});

module.exports = router;
