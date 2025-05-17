import { useState } from 'react';
import List from './List';

export default function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
        };
        setTodos(array => [...array, newTodo]);
        setInputValue('');
    };
    const enterKey = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    }
    const handleDelete = (id) => {
        setTodos(array => array.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={inputValue}
                placeholder="..."
                onChange={onChangeInput}
                onKeyDown={enterKey}
            />
            <button onClick={handleAddTodo} >+</button>
            <List todos={todos} onDelete={handleDelete} />
        </div>
    );
}
