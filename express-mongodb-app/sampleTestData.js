module.exports = {
	userProfiles: [
		{ name: "John Doe", email: "john.doe@example.com", role: "Admin" },
		{ name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
		{ name: "Alice Johnson", email: "alice.johnson@example.com", role: "User" },
		{ name: "Bob Brown", email: "bob.brown@example.com", role: "Admin" },
		// Add more user profiles as needed
	],
	orders: [
		{
			id: "00001",
			name: "Rakshit Chatopadhyaya",
			address: "089 Kutch Green Apt. 448",
			date: "08 Sep 2024",
			type: "Electric",
			status: "Completed",
		},
		{
			id: "00002",
			name: "Aakash Rawat",
			address: "979 Immanuel Ferry Suite 526",
			date: "08 Sep 2024",
			type: "Renovation",
			status: "Processing",
		},
		{
			id: "00003",
			name: "Mahesh Babu",
			address: "8587 Frida Ports",
			date: "08 Sep 2024",
			type: "Renovation",
			status: "Rejected",
		},
		{
			id: "00004",
			name: "Ranjan My Goat",
			address: "768 Destiny Lake Suite 600",
			date: "08 Sep 2024",
			type: "Construction",
			status: "Completed",
		},
		// Add more orders as needed
	],
	todoList: [
		{
			title: "Buy materials",
			description: "Purchase materials for the new project",
			status: "Pending",
		},
		{
			title: "Schedule meeting",
			description: "Set up a meeting with the client",
			status: "Completed",
		},
		{
			title: "Review plans",
			description: "Review the architectural plans",
			status: "In Progress",
		},
		{
			title: "Hire subcontractors",
			description: "Hire subcontractors for the project",
			status: "Pending",
		},
		// Add more todo items as needed
	],
	calendarEvents: [
		{
			title: "Project Kickoff",
			date: "2024-09-01",
			description: "Initial meeting with the project team",
		},
		{
			title: "Client Review",
			date: "2024-09-15",
			description: "Review project progress with the client",
		},
		{
			title: "Site Inspection",
			date: "2024-09-20",
			description: "Inspect the construction site",
		},
		{
			title: "Final Presentation",
			date: "2024-09-30",
			description: "Present the final project to the client",
		},
		// Add more calendar events as needed
	],
	materials: [
		{
			name: "Cement",
			quantity: 100,
			unit: "bags",
			price: 5.0,
		},
		{
			name: "Bricks",
			quantity: 1000,
			unit: "pieces",
			price: 0.5,
		},
		{
			name: "Steel Rods",
			quantity: 500,
			unit: "kg",
			price: 2.0,
		},
		{
			name: "Sand",
			quantity: 200,
			unit: "tons",
			price: 10.0,
		},
		// Add more materials as needed
	],
};
