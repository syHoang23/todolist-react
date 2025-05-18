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
        <div className='inline-block align-middle'>
            <div><h2 className='text-blue-900 text-3xl float-left font-mono font-bold text-shadow-2xs select-none'>To-Do List</h2><br/></div>
            <div>
                <input className='text-black border-2 border-amber-600 rounded-full p-1.5 mb-2.5 mr-2 '
                    type="text"
                    value={inputValue}
                    placeholder="Add a new task..."
                    onChange={onChangeInput}
                    onKeyDown={enterKey}
                />
                <button className='bg-sky-500 hover:bg-red-700 rounded-b-full mb-2.5' onClick={handleAddTodo} > + </button>
            </div>
            
            <List todos={todos} onDelete={handleDelete} />
        </div>
    );
}
