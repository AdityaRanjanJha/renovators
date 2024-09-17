"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Circle, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
			setNewTodo("");
		}
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<Card className="w-full max-w-3xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-blue-600">
						To-Do List
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex space-x-2 mb-4">
						<Input
							type="text"
							placeholder="Add a new task"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							className="flex-grow"
						/>
						<Button onClick={addTodo} className="bg-blue-600 hover:bg-blue-700">
							<PlusCircle className="w-5 h-5 mr-2" />
							Add Task
						</Button>
					</div>
					<ul className="space-y-2">
						{todos.map((todo) => (
							<li
								key={todo.id}
								className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
							>
								<div className="flex items-center space-x-3">
									<button
										onClick={() => toggleTodo(todo.id)}
										className="text-blue-600 hover:text-blue-800"
									>
										{todo.completed ? (
											<CheckCircle className="w-5 h-5" />
										) : (
											<Circle className="w-5 h-5" />
										)}
									</button>
									<span
										className={`${
											todo.completed
												? "line-through text-gray-500"
												: "text-gray-800"
										}`}
									>
										{todo.text}
									</span>
								</div>
								<button
									onClick={() => deleteTodo(todo.id)}
									className="text-red-500 hover:text-red-700"
								>
									<Trash2 className="w-5 h-5" />
								</button>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}
