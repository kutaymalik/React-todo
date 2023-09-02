import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem';
import {} from '../style.css'

function List({ todos, setTodos }) {

  let todoCount = todos.length;

  const allClick = () => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        console.log(todos);
  }

  return (
    <div>
      {
        todos.map((todo) => (
          <ListItem
            todos={todos}
            setTodos={setTodos}
            id={todo.id}
            name={todo.name}
            isDone={todo.isDone}
            key={todo.id}
          />
        ))
      }
      <div className='mt-2 ml-auto p-2 pb-0 text-white border-bottom border-radius'>
        <h3 onClick={() => allClick()} >All:{todoCount}</h3>

      </div>
    </div>
  )
}

export default List;
