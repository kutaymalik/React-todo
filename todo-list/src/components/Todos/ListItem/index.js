import React, { useState } from "react";
import {} from '../style.css'

function ListItem({ todos, setTodos, id, name }) {
    const [isShown, setIsShown] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        console.log(todos);
    }

    return (

            <div 
                className="d-flex border rounded-5 mt-2"
                onMouseOver={() => setIsShown(true)} 
                onMouseOut={() => setIsShown(false)} key={id}
            >
                <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    style={{
                        backgroundColor:'white', width: "30px", height: "30px", borderRadius: "100%"
                    }}
                    className="m-2">
                        {isActive ? <h5 className="p-0"></h5> : <h5 className="p-0">v</h5>}
                </button>

                <div 
                    className="m-auto"
                    style={{
                        textDecorationLine: isActive ? 'none' : 'line-through'
                    }}
                >
                    <h4 className="text-white">{name}</h4>
                </div>

                    {isShown &&
                    <button
                        style={{
                            background:'white', width: "30px", height: "30px", borderRadius: "100%"
                        }}
                        className="m-2"
                        onClick={() => deleteTodo(id)}><h5>x</h5></button>}

            </div>
        
    );
}

export default ListItem;
