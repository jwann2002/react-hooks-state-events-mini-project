import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const tasksToDisplay = tasks.filter((task) => categoryFilter === "All" || task.category === categoryFilter);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={categoryFilter} onSelectedCategoryChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;