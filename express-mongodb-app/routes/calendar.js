// routes/calendar.js
const express = require("express");
const router = express.Router();

// POST: Create a new calendar event
router.post("/", async (req, res) => {
	try {
		const newEvent = req.body;
		const result = await req.db
			.collection("calendarEvents")
			.insertOne(newEvent);
		res.status(201).json({ message: "Event created", result });
	} catch (error) {
		res.status(500).json({ message: "Error creating event", error });
	}
});

// GET: Retrieve all calendar events
router.get("/", async (req, res) => {
	try {
		const events = await req.db.collection("calendarEvents").find().toArray();
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving events", error });
	}
});

// PUT: Update an event by ID
router.put("/:id", async (req, res) => {
	try {
		const eventId = req.params.id;
		const updatedEvent = req.body;
		const result = await req.db
			.collection("calendarEvents")
			.updateOne(
				{ _id: new require("mongodb").ObjectId(eventId) },
				{ $set: updatedEvent }
			);
		res.status(200).json({ message: "Event updated", result });
	} catch (error) {
		res.status(500).json({ message: "Error updating event", error });
	}
});

// DELETE: Delete an event by ID
router.delete("/:id", async (req, res) => {
	try {
		const eventId = req.params.id;
		const result = await req.db
			.collection("calendarEvents")
			.deleteOne({ _id: new require("mongodb").ObjectId(eventId) });
		res.status(200).json({ message: "Event deleted", result });
	} catch (error) {
		res.status(500).json({ message: "Error deleting event", error });
	}
});

module.exports = router;
