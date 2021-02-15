import React from "react";

import TodoListItem from "../todo-list-item";

import './list-todo.css';

const ListTodo = ({items, onDelete, onToggleDone, onToggleImportant}) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps }
                              onDeleted={() => onDelete(id)}
                              onToggleDone={() => onToggleDone(id)}
                              onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default ListTodo;
