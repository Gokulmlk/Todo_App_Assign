import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'


function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add new todo
  function addTodo(){
    if (inputValue.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }
    console.log(newTodo)
    
    console.log(setTodos([...todos, newTodo]))
    
    setInputValue('')
  }

  // Handle Enter key press
function handleKeyPress (e){
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  // Toggle todo completion
  function toggleComplete(id){
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Delete todo
  function deleteTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Edit todo
  function editTodo(id, newText){
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  // Calculate Work
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Header 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          activeTodos={activeTodos}
        />
        
        {/* Add Todo Section */}
        <div className="glass-effect rounded-2xl p-6 mb-6 animate-fadeIn">
          <div className="flex gap-3">
            <input
              type="text"
              className="todo-input flex-1"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={addTodo}
              className="btn-primary whitespace-nowrap"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Todo List */}
        <ToDoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  )
}

export default App
