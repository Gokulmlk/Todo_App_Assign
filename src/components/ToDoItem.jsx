import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { FiEdit, FiTrash2 } from "react-icons/fi";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() === '') return
    editTodo(todo.id, editText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/80 shadow-md hover:shadow-lg transition-all duration-200 animate-slideIn">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            todo.completed
              ? 'bg-linear-to-r from-green-400 to-emerald-500 border-green-500'
              : 'border-gray-300 hover:border-orange-400'
          }`}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && (
          <FaCheck className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Todo Text or Edit Input */}
        {isEditing ? (
          <input
            type="text"
            className="flex-1 px-3 py-2 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
          <span
            className={`flex-1 text-gray-800 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </span>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm font-medium"
                aria-label="Save changes"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200 text-sm font-medium"
                aria-label="Cancel editing"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                aria-label="Edit task"
              >
              <FiEdit className="w-5 h-5" />
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                aria-label="Delete task"
              >
              <FiTrash2 className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ToDoItem