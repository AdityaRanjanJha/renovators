import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FacebookIcon, SendIcon } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
				<h1 className="text-3xl font-bold text-blue-600 mb-6">RENOVATORS</h1>
				<h2 className="text-2xl font-semibold mb-6 text-gray-600">Create an Account</h2>
				<form className="space-y-4">
					<div className="space-y-2  text-gray-600">
						<Label htmlFor="email">Email address:</Label>
						<Input
							id="email"
							type="email"
							placeholder="esteban_schiller@gmail.com"
						/>
					</div>
					<div className="space-y-2  text-gray-600">
						<Label htmlFor="username">Username</Label>
						<Input id="username" placeholder="Username" />
					</div>
					<div className="space-y-2 text-gray-600">
						<div className="flex justify-between">
							<Label htmlFor="password">Password</Label>
							<Link href="#" className="text-sm text-blue-600 hover:underline">
								Forgot Password?
							</Link>
						</div>
						<Input id="password" type="password" />
					</div>
					<div className="flex items-center space-x-2  text-gray-600">
						<Checkbox id="terms" />
						<Label htmlFor="terms">I accept terms and conditions</Label>
					</div>
					<Button className="w-full bg-blue-500 hover:bg-blue-600">
						Sign Up
					</Button>
				</form>
				<div className="mt-6 text-center">
					<p className="text-sm text-gray-600">
						Already have an account?{" "}
						<Link href="#" className="text-blue-600 hover:underline">
							Login
						</Link>
					</p>
				</div>
				<div className="mt-6 flex justify-center space-x-4">
					<Button variant="outline" size="icon">
						<svg
							className="h-5 w-5 text-blue-600"
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
							<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
							<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
							<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
						</svg>
					</Button>
					<Button variant="outline" size="icon">
						<FacebookIcon className="h-5 w-5 text-blue-600" />
					</Button>
					<Button variant="outline" size="icon">
						<SendIcon className="h-5 w-5 text-blue-600" />
					</Button>
				</div>
			</div>
		</div>
	);
}
