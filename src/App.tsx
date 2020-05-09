import React, {useState, useEffect} from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interface'

function App () {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect( () => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'todos',JSON.stringify(todos)
    )
  },[todos])

  const addHandler = (title: string)=>{
    const newTodo:ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const toggleHandler = (id: number)=>{
    setTodos( 
      todos.map(todo => {
        if( todo.id === id ){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number)=>{
    const shouldRemove = window.confirm('Delete todo?')
    if(shouldRemove){
      setTodos( todos.filter(todo => todo.id !== id) )
    }
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos = {todos} 
          onToggle={toggleHandler} 
          onRemove={removeHandler} 
        />
      </div>
    </>
  );
}

export default App;
