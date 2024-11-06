const { MongoClient } = require("mongodb");
const sampleData = require("./sampleTestData");

const url = "mongodb://localhost:27017";
const dbName = "renovators";

async function seedDatabase() {
	const client = new MongoClient(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();
		console.log("Connected to MongoDB");
		const db = client.db(dbName);

		for (const [collectionName, documents] of Object.entries(sampleData)) {
			const collection = db.collection(collectionName);
			await collection.deleteMany({});
			await collection.insertMany(documents);
			console.log(`Inserted sample data into ${collectionName}`);
		}

		console.log("Database seeding completed");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		await client.close();
	}
}

seedDatabase();
