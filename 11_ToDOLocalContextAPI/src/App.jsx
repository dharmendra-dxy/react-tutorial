import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);

  // addTodo:
  const addTodo = (todo) => {
    setTodos( (previous) => [ {id: Date.now(), ...todo }, ...previous ] );
  }

  // updateTodo:
  const updateTodo = (id, todo) => {
    setTodos( (previous) =>  previous.map( (previousTodo) => (previousTodo.id === id ? todo:previousTodo) )  );
  }

  // deleteTodo:
  const deleteTodo = (id) => {
    setTodos( (previous) => previous.filter( (todo) => (todo.id!== id) ))
  };

  //toggleComplete: 
  const toggleComplete = (id) => {
    setTodos( (previous) => previous.map( (previousTodo) => (previousTodo.id===id ? {...previousTodo, completed : !previousTodo.completed} :previousTodo) ) )
  };


  // Implementing Local storage:

  useEffect( () => {

    // localStorage.getItem("todos") --=> returns a string but we want JSON, so convert in JSON:
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length >0){
      setTodos(todos);
    }
  }, [])


  useEffect( () => {

    // setItem syntax: localStorage.setItem("key", "value")
    // using : JSON.stringify() --=> converts to string.
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">

      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

        <div className="mb-4">
          {/* ---Todo form goes here--- */} 
          <TodoForm />

        </div>

        <div className="flex flex-wrap gap-y-3">
           {/* ----Loop and Add TodoItem here---- */}

           { todos.map( (todo) => (

              <div 
              key={todo.id}
              className="w-full"
              >
                
                <TodoItem todo={todo} />

              </div> 

           ) ) }

        </div>

      </div>

    </div>
    </TodoProvider>
  )
}

export default App
