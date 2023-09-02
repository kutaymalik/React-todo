import React, { useEffect, useState } from "react";

function AddTodo({ addTodo, todos }) {

    const [input, setInput] = useState('');

    const handleClick =() => {

        let idCount = todos.length + 1;

        addTodo(() => [...todos, {
            id: idCount,
            name: input,
            isDone: false,
        }]);
        console.log(todos);
        setInput('');
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="mt-1">
                <input 
                    name="todo" 
                    placeholder="Todo Name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                
            </div>

            <div className="">
                <button className="m-1" onClick={handleClick}>Add</button>
            </div>
            
        </div>
    );
}

export default AddTodo;
