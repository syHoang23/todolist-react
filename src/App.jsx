import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="bg-gray-200 w-[400px] sm:w-[500px] p-10 rounded-2xl text-start justify-center animate-[slide-up_1s_ease-out_forwards]">
      <TodoList />
    </div>
  );
}