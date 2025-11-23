import React, { useState } from 'react'
import { useToDo } from '../contexts';

function TodoForm() {
    
    // for indiviual todo:
    const [todo, setTodo] = useState("");

    // 
    const {addTodo} = useToDo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return 

        // else part:
        // addTodo({id: Date.now(), todo:todo, completed: false}) --=> syntax can be also used:
        addTodo({todo, completed: false});

        // cleaning up the value now:
        setTodo("");

    } 




    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={ (e) => setTodo(e.target.value) }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

