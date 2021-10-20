import {createStore} from 'redux';
import todoReducer from './todo.reducer.js';

const store = createStore(todoReducer, { todoList: []});

export default store;
