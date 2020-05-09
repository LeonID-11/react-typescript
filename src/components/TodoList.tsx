import React from 'react'
import { ITodo } from '../interface';

type TodoListProps = {
   todos: ITodo[],
   onToggle(id: number): void
   onRemove: (id: number)=> void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
   if(todos.length === 0){
     return <p className="center">No todos</p>
   }
   return (
      <ul>
         {todos.map(todo=>{
            const cls = ['todo', 'mb1']

            if(todo.completed){ cls.push('completed') }

            return(
               <li className={cls.join(' ')} key={todo.id}>
                  <label>
                     <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={onToggle.bind(null, todo.id)}
                     />
                     <span>{todo.title}</span>
                     <i 
                        onClick={event=>{
                           event.preventDefault()
                           onRemove(todo.id)
                        }}
                        className="material-icons red-text"
                     >delete</i>
                  </label>
               </li>
         )})}
      </ul>
   )
}
