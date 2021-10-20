import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelector } from '../redux/todo.selectors';
import { addAll, addItem, deleteItem } from '../redux/todo.actions';
import TodoItem from './TodoItem';
import {Button, TextInput, TodoList} from './Todo.styles';
import { callLocalStorage } from '../utilities';

const Todo = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(todoSelector);
    useEffect(() => {
        const storedTodoList = callLocalStorage('todoList');
        storedTodoList && dispatch(addAll(storedTodoList));
    }, []);

    const [itemValue, setItemValue] =useState('');

    const onDelete = (curretId) => {
        const updTodoList = todoList.filter(({id}) => curretId!==id);
        callLocalStorage('todoList', updTodoList);
        setItemValue('');
        dispatch(deleteItem({curretId}));
    }

    const onAddItem = () => {
        if(itemValue){
            const item = {text: itemValue, id: Date.now(), isComplete: false};
            const updTodoList = [...todoList, item];
            callLocalStorage('todoList', updTodoList);
            setItemValue('');
            dispatch(addItem(item));
        }
    }

    const handleChange = (event) => {
        setItemValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13){
            onAddItem();
            setItemValue('');
        }
    }

    const displayTodoList = () => todoList.map(({text, id}) =>
        <TodoItem key={id} id={id} text={text} onDelete={onDelete}/>)

    return (
        <div>
            <TextInput onChange={handleChange} onKeyDown={handleKeyDown} value={itemValue} placeholder="Please enter Text"/>
            <Button primary onClick={onAddItem}>Add Item</Button>
            <TodoList className="todo-list">{displayTodoList()}</TodoList>
        </div>
    )
};

export default Todo;
