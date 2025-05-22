import React, { useState } from 'react';
import List from './List';
import logo from '../assets/note-svgrepo-com.svg';

export default function TodoList() {
    const [inputValue, setInputValue] = useState<string>('');
    const [todos, setTodos] = useState<{id: number; text: string;}[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addRow();
        }
    }
    const onDelete = (id) => {
        setTodos(newTodos => newTodos.filter(todo => todo.id !== id));
    };

    return (
        <>
        <div className='flex flex-col items-start justify-start gap-4'>
            <div className='flex items-center gap-2'>
                <h2 className='text-blue-900 text-3xl float-left font-mono w-full font-bold select-none'>To-Do List</h2>
                <img className='w-6 h-6 shadow-md' src={logo}/>
            </div>
            <div className='relative w-full'>
                <input className='pr-32 w-full text-sm bg-gray-300 border-none text-black focus:outline-none rounded-full py-4 px-8 '
                    type="text"
                    value={inputValue}
                    placeholder="Add your task"
                    onChange={onChangeInput}
                    onKeyDown={enterKey}
                />
                <div className='absolute top-0 right-0 bottom-0 flex items-center justify-center'>
                    <button className='py-4 px-10 cursor-pointer hover:border-none bg-[rgb(255,100,59)] hover:bg-orange-600 rounded-4xl transition delay-100 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110' onClick={addRow} > Add </button>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <List todos={todos} onDelete={onDelete} />
        </div>
        </>
    );
}
