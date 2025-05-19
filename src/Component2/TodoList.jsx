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
                <h2 className='text-blue-900 text-3xl float-left font-mono font-bold select-none'>To-Do List</h2>
            <br/>
            <br/>
            <div className='grid grid-cols-4 mb-2.5'>
                <div className='float-left col-span-3'>
                    <input className='text-black border-2 border-amber-500 focus:outline-none focus:border-amber-600 rounded-full h-[46px] pl-5 w-[300px]'
                        type="text"
                        value={inputValue}
                        placeholder="Add a new task..."
                        onChange={onChangeInput}
                        onKeyDown={enterKey}
                    />
                </div>
                <div className='float-right col-span-1'>
                    <button className='col-span-1 w-[100px] h-[46px] float-right bg-orange-500 hover:bg-orange-700 rounded-b-full' onClick={handleAddTodo} > Add </button>
                </div>
            </div>
            
            <List todos={todos} onDelete={handleDelete} />
        </div>
    );
}
