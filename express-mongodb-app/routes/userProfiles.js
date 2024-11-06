const express = require("express");
const router = express.Router();

// POST: Create a new user profile
router.post("/", async (req, res) => {
	try {
		const newUserProfile = req.body;
		const result = await req.db
			.collection("userProfiles")
			.insertOne(newUserProfile);
		res.status(201).json({ message: "User profile created", result });
	} catch (error) {
		res.status(500).json({ message: "Error creating user profile", error });
	}
});

// GET: Retrieve all user profiles
router.get("/", async (req, res) => {
	try {
		const userProfiles = await req.db
			.collection("userProfiles")
			.find()
			.toArray();
		res.status(200).json(userProfiles);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving user profiles", error });
	}
});

// PUT: Update a user profile by ID
router.put("/:id", async (req, res) => {
	try {
		const userProfileId = req.params.id;
		const updatedUserProfile = req.body;
		const result = await req.db
			.collection("userProfiles")
			.updateOne(
				{ _id: new ObjectId(userProfileId) },
				{ $set: updatedUserProfile }
			);
		res.status(200).json({ message: "User profile updated", result });
	} catch (error) {
		res.status(500).json({ message: "Error updating user profile", error });
	}
});

// DELETE: Delete a user profile by ID
router.delete("/:id", async (req, res) => {
	try {
		const userProfileId = req.params.id;
		const result = await req.db
			.collection("userProfiles")
			.deleteOne({ _id: new ObjectId(userProfileId) });
		res.status(200).json({ message: "User profile deleted", result });
	} catch (error) {
		res.status(500).json({ message: "Error deleting user profile", error });
	}
});

module.exports = router;
