import {useState} from 'react';
import Card from './Card';
import Input from './Input';

export default function List() {
    const [numberCard, setNumberCard] = useState([]);
    const [nextId, setNextId] = useState(0);

    // Linh
    const [inputValue, setInputValue] = useState('This is input value');
    const [isEdit, setIsEdit] = useState(false);
    // Linh

    const changeInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleClickCreate = () => {
        setNumberCard([...numberCard, nextId]);
        setNextId(nextId + 1);
    };
    const handleClickDelete = (id) => {
        setNumberCard(numberCard.filter((key) => key !== id));
    };

    // Linh
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const onEdit = () => {
        setIsEdit(true);
    }

    const onSave = (e) => {
        if (e.key === 'Enter') {
            setIsEdit(false);
        }
    }
    // Linh
    
    return (
        <>
            <div>Number cards: {numberCard.length}</div>
            <div>
                <input type="text" onChange={changeInput}/>
                <button onClick={handleClickCreate}>+</button>
            </div>

            {/* Linh-TODO: Need to change or move this logic to Card component  */}
            <div>
                {isEdit ? (
                    <Input
                        value={inputValue}
                        onChange={onChangeInput}
                        onSave={onSave}
                    />
                ) : (
                    <span>{inputValue}</span>
                )}

                <button onClick={onEdit}>Edit</button>
            </div>

            {/* This is List  */}   
            {numberCard.map((id) => (
                <Card key={id} id={id} value={'aaa'} onCreate={true} onDelete={handleClickDelete} />
            ))}
        </>
    );
}