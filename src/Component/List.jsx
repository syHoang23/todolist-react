import {useState} from 'react';
import Card from './Card';

export default function List() {
    const [numberCard, setNumberCard] = useState([]);
    const [nextId, setNextId] = useState(0);
    const handleClickCreate = () => {
        setNumberCard([...numberCard, nextId]);
        setNextId(nextId + 1);
    };
    const handleClickDelete = (id) => {
        setNumberCard(numberCard.filter((key) => key !== id));
    };
    return (
        <>
            <div>Number cards: {numberCard.length}</div>
            <button onClick={handleClickCreate}>+</button> Create new card
            {numberCard.map((id) => (
                <Card key={id} id={id} onDelete={handleClickDelete} />
            ))}
        </>
    );
}