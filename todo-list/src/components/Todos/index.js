import React, { useState } from "react";
import AddTodo from "./AddTodo";
import List from "./List";
import {} from './style.css'

function Todos() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'javascript',
            isDone: false,
        },
        {
            id: 2,
            name: 'react',
            isDone: false,
        },
        {
            id: 3,
            name: 'node',
            isDone: false,
        },
        
    ])

    return (
        <div id="app-container">
            <h1>Todos</h1>
            <AddTodo addTodo={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todos;
