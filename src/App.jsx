import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo'
import { CreateTodo } from './components/CreateTodo'

// let id = 1;

function App() {
  const [todos, setTodos] = useState([]);

  function fetchFunction(){
    async function fetchData(){
      try {
        const response = await fetch("https://todo-app-backend-or8b.onrender.com/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
  
    fetchData();
  }
  useEffect(fetchFunction, []);

  function handleTodoCreated(){
    fetchFunction();
  }

  // function handleClickMarkComplete(){
  //   fetchFunction();
  // }

  function clickDeleteHandler(){
    fetchFunction();
  }

  return (
    <>
      <CreateTodo onTodoCreated={handleTodoCreated}></CreateTodo>
      {todos.map((todo) => {
        return (
          <Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description} completed={todo.completed} onClickDelete={clickDeleteHandler}></Todo>
        )
      })}
    </>
  )
}

export default App
