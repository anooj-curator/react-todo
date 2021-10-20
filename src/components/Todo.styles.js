import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    color: white;
    background-color: ${p => p.primary ? 'green': 'red'};
    padding: 10px;
    border-radius: 20px;
    margin: 10px;
`;

const TextInput = styled.input`
    padding: 10px;
    border-radius: 20px;
`;

const TodoList = styled.ul`
    padding-inline-start: 0;
`
export {Button, TextInput, TodoList};
