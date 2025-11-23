import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid : it generates unique id's

// creating a intialState:
const initialState = {
    todos : [{ id:1, text:"Hello world"}] 
}

// creating a slice:

/* SNTAX: 
    createSlice({
        name: "--", 
        initialState, 
        reducer: { properties: (state,action)=>{}  }
    })
*/

// state: state can access values inside the current state
// action: action will provide the values of the data being passes

// state is basically -=> todos : [{ id:1, text:"Hello world"}] 
// action is basically -=> { id:1, text:"Hello world"}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo={
                id:nanoid(),
                text:action.payload,  
            }
            // push value to state i.e. (todos)
            state.todos.push(todo);
        },


        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id!== action.payload)
        },
    }

})

// export --=> addTodo & removeTodo
export const {addTodo, removeTodo} = todoSlice.actions;

// export todoReducer
export default todoSlice.reducer;