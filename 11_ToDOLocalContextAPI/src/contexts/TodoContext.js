// In context we require to import: useContext , createContext
import {useContext, createContext} from "react";

export const TodoContext = createContext({

    todos: [
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

});

// creating a hook: useTodo

export const useToDo = () => {
    
    // syntax: useContext( --context-that-we-are-talking-about--)
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider;