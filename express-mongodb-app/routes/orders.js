// routes/orders.js
const express = require("express");
const router = express.Router();

// POST: Create a new order
router.post("/", async (req, res) => {
	try {
		const newOrder = req.body;
		const result = await req.db.collection("orders").insertOne(newOrder);
		res.status(201).json({ message: "Order created", result });
	} catch (error) {
		res.status(500).json({ message: "Error creating order", error });
	}
});

// GET: Retrieve all orders
router.get("/", async (req, res) => {
	try {
		const orders = await req.db.collection("orders").find().toArray();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving orders", error });
	}
});

// PUT: Update an order by ID
router.put("/:id", async (req, res) => {
	try {
		const orderId = req.params.id;
		const updatedOrder = req.body;
		const result = await req.db
			.collection("orders")
			.updateOne(
				{ _id: new require("mongodb").ObjectId(orderId) },
				{ $set: updatedOrder }
			);
		res.status(200).json({ message: "Order updated", result });
	} catch (error) {
		res.status(500).json({ message: "Error updating order", error });
	}
});

// DELETE: Delete an order by ID
router.delete("/:id", async (req, res) => {
	try {
		const orderId = req.params.id;
		const result = await req.db
			.collection("orders")
			.deleteOne({ _id: new require("mongodb").ObjectId(orderId) });
		res.status(200).json({ message: "Order deleted", result });
	} catch (error) {
		res.status(500).json({ message: "Error deleting order", error });
	}
});

module.exports = router;
