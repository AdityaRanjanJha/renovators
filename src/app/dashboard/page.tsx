import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Bell,
	CheckSquare,
	ChevronDown,
	FileSpreadsheet,
	FileText,
	FolderKanban,
	Inbox,
	LayoutDashboard,
	LogOut,
	Package,
	Settings,
	Table2,
	UserCircle,
	Users,
} from "lucide-react";

export default function Dashboard() {
	return (
		<div className="flex h-screen bg-gray-100  text-gray-600">
			{/* Sidebar */}
			<aside className="w-64 bg-white p-4 shadow-md">
				<div className="text-2xl font-bold text-blue-500 mb-8">RENOVATORS</div>
				<nav className="space-y-2">
					<Button variant="default" className="w-full justify-start">
						<LayoutDashboard className="mr-2 h-4 w-4" />
						Dashboard
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Package className="mr-2 h-4 w-4" />
						Products
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Inbox className="mr-2 h-4 w-4" />
						Inbox
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<FileText className="mr-2 h-4 w-4" />
						Order Lists
					</Button>
					<div className="pt-4 pb-2">
						<p className="px-4 text-xs font-semibold text-gray-400 uppercase">
							Pages
						</p>
					</div>
					<Button variant="ghost" className="w-full justify-start">
						<FolderKanban className="mr-2 h-4 w-4" />
						File Manager
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<CheckSquare className="mr-2 h-4 w-4" />
						To-Do
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Users className="mr-2 h-4 w-4" />
						Contact
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<FileSpreadsheet className="mr-2 h-4 w-4" />
						Invoice
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<UserCircle className="mr-2 h-4 w-4" />
						Profile
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Table2 className="mr-2 h-4 w-4" />
						Table
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Settings className="mr-2 h-4 w-4" />
						Settings
					</Button>
				</nav>
				<div className="absolute bottom-4 left-4 flex items-center space-x-4">
					<Avatar>
						<AvatarImage src="/placeholder-user.jpg" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<Button variant="ghost" size="sm">
						<LogOut className="mr-2 h-4 w-4" />
						Logout
					</Button>
				</div>
			</aside>

			{/* Main content */}
			<main className="flex-1 p-8 overflow-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold">Dashboard</h1>
					<div className="flex items-center space-x-4">
						<Button variant="outline" size="icon">
							<Bell className="h-4 w-4" />
						</Button>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="English" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">English</SelectItem>
								<SelectItem value="fr">French</SelectItem>
								<SelectItem value="de">German</SelectItem>
							</SelectContent>
						</Select>
						<Avatar>
							<AvatarImage src="/placeholder-user.jpg" />
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div>
							<p className="text-sm font-medium">Jane Doe</p>
							<p className="text-xs text-gray-500">Admin</p>
						</div>
						<ChevronDown className="h-4 w-4 text-gray-500" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total User</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">40,689</div>
							<p className="text-xs text-green-500">8.5% Up from yesterday</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Order</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">10293</div>
							<p className="text-xs text-green-500">1.3% Up from past week</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Cost Saving</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">₹ 89,000</div>
							<p className="text-xs text-red-500">4.3% Down from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Pending Projects
							</CardTitle>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-muted-foreground"
							>
								<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
							</svg>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">12</div>
							<p className="text-xs text-green-500">1.8% Up from yesterday</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Client Satisfaction</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[200px]">
								{/* Placeholder for chart */}
								<div className="w-full h-full bg-gray-100 flex items-center justify-center">
									Chart Placeholder
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Weather Forecast</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm font-medium">Partly Cloudy</p>
									<p className="text-xs text-gray-500">August, 10th 2020</p>
								</div>
								<div className="flex space-x-4">
									{[2, 3, 4, 5, 6].map((hour) => (
										<div key={hour} className="text-center">
											<p className="text-xs">{hour} PM</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-8 w-8 mx-auto"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
												/>
											</svg>
											<p className="text-xs">{70 + hour}°F</p>
										</div>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
