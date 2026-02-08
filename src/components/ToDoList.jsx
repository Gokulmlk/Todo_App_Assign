import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className="glass-effect rounded-2xl p-12 text-center animate-fadeIn">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-display font-semibold text-gray-700 mb-2">
          No tasks yet
        </h3>
        <p className="text-gray-500">
          Add your first task to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-2xl p-6 animate-fadeIn">
      <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
        Your Tasks
      </h2>
      <div className="space-y-3">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default ToDoList
