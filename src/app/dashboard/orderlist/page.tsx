"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Bell, Filter, Search } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
	{ icon: "LayersIcon", label: "Dashboard" },
	{ icon: "PackageIcon", label: "Products" },
	{ icon: "MessageCircleIcon", label: "Inbox" },
	{ icon: "ListIcon", label: "Order Lists" },
	{ icon: "FolderIcon", label: "File Manager" },
	{ icon: "CalendarIcon", label: "Calendar" },
	{ icon: "CheckSquareIcon", label: "To-Do" },
	{ icon: "UsersIcon", label: "Contact" },
	{ icon: "FileTextIcon", label: "Invoice" },
	{ icon: "UserIcon", label: "Profile" },
	{ icon: "TableIcon", label: "Table" },
	{ icon: "SettingsIcon", label: "Settings" },
];

const orders = [
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
	{
		id: "00005",
		name: "Aditya Das",
		address: "042 Mylene Throughway",
		date: "08 Sep 2024",
		type: "Electric",
		status: "Processing",
	},
	{
		id: "00006",
		name: "Asmit Singh",
		address: "543 Weimann Mountain",
		date: "08 Sep 2024",
		type: "Construction",
		status: "Completed",
	},
];

export default function OrderList() {
	const [selectedDate, setSelectedDate] = useState("08 Sep 2024");
	const [selectedType, setSelectedType] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("");

	return (
		<div className="flex h-screen bg-gray-100  text-gray-600">
			<aside className="w-64 bg-white p-6 flex flex-col">
				<h1 className="text-2xl font-bold text-blue-600 mb-8">RENOVATORS</h1>
				<nav className="flex-1">
					<ul className="space-y-2">
						{sidebarItems.map((item, index) => (
							<li
								key={index}
								className={`flex items-center p-2 rounded-lg ${
									item.label === "Order Lists"
										? "bg-blue-100 text-blue-600"
										: "text-gray-600 hover:bg-gray-100"
								}`}
							>
								<span className="mr-3">{/* Icon would go here */}</span>
								{item.label}
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center mt-auto">
					<Avatar className="h-10 w-10">
						<AvatarImage src="/placeholder-avatar.jpg" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<div className="ml-3">
						<p className="font-medium">Logout</p>
					</div>
				</div>
			</aside>
			<main className="flex-1 p-8">
				<header className="flex justify-between items-center mb-8">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<Input className="pl-10 w-64" placeholder="Search" />
					</div>
					<div className="flex items-center space-x-4">
						<Button variant="ghost" size="icon">
							<Bell className="h-5 w-5" />
						</Button>
						<Select defaultValue="english">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select language" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="english">🇬🇧 English</SelectItem>
								{/* Add more language options here */}
							</SelectContent>
						</Select>
						<Avatar>
							<AvatarImage src="/placeholder-avatar.jpg" />
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div>
							<p className="font-medium">Jane Doe</p>
							<p className="text-sm text-gray-500">Admin</p>
						</div>
					</div>
				</header>
				<h2 className="text-2xl font-bold mb-6">Order Lists</h2>
				<div className="bg-white rounded-lg shadow">
					<div className="flex items-center justify-between p-4 border-b">
						<div className="flex space-x-2">
							<Select value={selectedDate} onValueChange={setSelectedDate}>
								<SelectTrigger className="w-[180px]">
									<Filter className="w-4 h-4 mr-2" />
									<SelectValue placeholder="Filter by" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="08 Sep 2024">08 Sep 2024</SelectItem>
									{/* Add more date options */}
								</SelectContent>
							</Select>
							<Select value={selectedType} onValueChange={setSelectedType}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Order Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="electric">Electric</SelectItem>
									<SelectItem value="renovation">Renovation</SelectItem>
									<SelectItem value="construction">Construction</SelectItem>
								</SelectContent>
							</Select>
							<Select value={selectedStatus} onValueChange={setSelectedStatus}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Order Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="completed">Completed</SelectItem>
									<SelectItem value="processing">Processing</SelectItem>
									<SelectItem value="rejected">Rejected</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button variant="ghost" className="text-red-600">
							Reset Filter
						</Button>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>
								<TableHead>NAME</TableHead>
								<TableHead>ADDRESS</TableHead>
								<TableHead>DATE</TableHead>
								<TableHead>TYPE</TableHead>
								<TableHead>STATUS</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{orders.map((order) => (
								<TableRow key={order.id}>
									<TableCell>{order.id}</TableCell>
									<TableCell>{order.name}</TableCell>
									<TableCell>{order.address}</TableCell>
									<TableCell>{order.date}</TableCell>
									<TableCell>{order.type}</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
												order.status === "Completed"
													? "bg-green-100 text-green-800"
													: order.status === "Processing"
													? "bg-purple-100 text-purple-800"
													: "bg-red-100 text-red-800"
											}`}
										>
											{order.status}
										</span>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<div className="flex justify-between items-center p-4 border-t">
						<Button variant="outline" className="text-gray-600">
							Prev. Date
						</Button>
						<Button variant="outline" className="text-gray-600">
							Next Date
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
