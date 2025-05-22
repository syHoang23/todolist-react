import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="bg-gray-200 w-[400px] sm:w-[640px] p-10 rounded-2xl shadow-md text-start justify-center">
      <TodoList />
    </div>
  );
}