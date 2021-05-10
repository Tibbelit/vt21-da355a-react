import React, { useState, useRef } from 'react';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([{
        id: 1,
        title: "First Item"
    }]);
    const inputRef = useRef();

    function addItem(event) {
        if (event.keyCode  === 13) {
            const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
            setTodos([...todos, {
                id: newId,
                title: inputRef.current.value,
            }])

            inputRef.current.value = "";
        }
    }

    function deleteItem(id) {
        setTodos(todos.filter((item) => item.id !== id));
    }

    return (
        <div>
            <input className="form-control" ref={inputRef} placeholder="Add new todo here..." onKeyUp={addItem} />
            <ul className="list-group">
                {todos.map(todo => <Todo key={todo.id} item={todo} deleteItem={deleteItem} />)}
            </ul>
            <strong>{todos.length} </strong> { todos.length === 1 ? "todo" : "todos" } left to do.
        </div>
    )
}