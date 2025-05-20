import React from 'react';
import Card from './Card';

export default function List({ todos, onDelete }) {
    return (
        <div className='flex flex-col mt-4 rounded-2xl gap-1 flex-wrap'>
            {todos.map(todo => (
                <Card
                key={todo.id}
                id={todo.id}
                value={todo.text}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}
