import React from 'react'
import {Button} from './Todo.styles';

const TodoItem = ({id, text, onDelete}) => (
    <li>
        <span>{text}</span>
        <Button onClick={() => onDelete(id)}>Delete</Button>
    </li>
);

export default TodoItem;
