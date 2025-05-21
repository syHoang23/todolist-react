import React from 'react';
import Card from './Card';

interface Props {
    todos: Array<{
        id: number;
        text: string;
    }>;
    onDelete: (id: number) => void;
}

export default function List({ todos, onDelete }: Props) {
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
