const express = require("express");
const router = express.Router();

// POST: Create a new material
router.post("/", async (req, res) => {
	try {
		const newMaterial = req.body;
		const result = await req.db.collection("materials").insertOne(newMaterial);
		res.status(201).json({ message: "Material created", result });
	} catch (error) {
		res.status(500).json({ message: "Error creating material", error });
	}
});

// GET: Retrieve all materials
router.get("/", async (req, res) => {
	try {
		const materials = await req.db.collection("materials").find().toArray();
		res.status(200).json(materials);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving materials", error });
	}
});

// PUT: Update a material by ID
router.put("/:id", async (req, res) => {
	try {
		const materialId = req.params.id;
		const updatedMaterial = req.body;
		const result = await req.db
			.collection("materials")
			.updateOne({ _id: new ObjectId(materialId) }, { $set: updatedMaterial });
		res.status(200).json({ message: "Material updated", result });
	} catch (error) {
		res.status(500).json({ message: "Error updating material", error });
	}
});

// DELETE: Delete a material by ID
router.delete("/:id", async (req, res) => {
	try {
		const materialId = req.params.id;
		const result = await req.db
			.collection("materials")
			.deleteOne({ _id: new ObjectId(materialId) });
		res.status(200).json({ message: "Material deleted", result });
	} catch (error) {
		res.status(500).json({ message: "Error deleting material", error });
	}
});

module.exports = router;
