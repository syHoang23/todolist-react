import Card from './Card';

export default function List({ todos, onDelete }) {
    return (
        <div>
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
