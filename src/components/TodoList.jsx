import React, { useState } from 'react';
import List from './List';

export default function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const addRow = () => {
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
            addRow();
        }
    }
    const onDelete = (id) => {
        setTodos(array => array.filter(todo => todo.id !== id));
    };

    return (
        <>
        <div className='flex flex-col items-start justify-start gap-4'>
            <h2 className='text-blue-900 text-3xl float-left font-mono font-bold select-none'>To-Do List</h2>
            <div className='relative w-full'>
                <input className='pr-32 w-full text-sm bg-gray-300 border-none text-black border-2 border-orange-500 focus:outline-none focus:border-orange-600 rounded-full py-4 px-8 '
                    type="text"
                    value={inputValue}
                    placeholder="Add your task"
                    onChange={onChangeInput}
                    onKeyDown={enterKey}
                />
                <div className='absolute top-0 right-0 bottom-0 flex items-center justify-center'>
                    <button className='py-4 px-10 cursor-pointer hover:border-none bg-[rgb(255,100,59)] hover:bg-orange-600 rounded-4xl' onClick={addRow} > Add </button>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <List todos={todos} onDelete={onDelete} />
        </div>
        </>
    );
}
