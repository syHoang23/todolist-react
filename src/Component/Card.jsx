import {useState} from 'react';

export default function Card({id, onCreate, inputValue, onDelete}) {
    const [value, setValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [available, setAvailable] = useState(false);
    const handleClickCheck = () => {
        setIsChecked(!isChecked);
    };
    if (onCreate(true))
    {
        setValue(inputValue);
        onCreate(false);
    }
    const handleClickEdit = () => {
        setAvailable(true);
    };
    const handleClickDelete = () => {
        onDelete(id);
    };
    const handleClickCancel = () => {
        setAvailable(false);
    };
    return (
        <>
            <br />
            <input type="checkbox" checked={isChecked} onChange={handleClickCheck}/>
            <span
                style={{
                textDecoration: isChecked ? 'line-through' : 'none',
                opacity: isChecked ? 0.5 : 1
                }}
            >
                {value}
            </span>
            <button onClick={handleClickEdit}>Edit</button>
            <button onClick={handleClickDelete}>Delete</button>
            {available && <input type="text" />}
            {available && <button >Save</button>}
            {available && <button onClick={handleClickCancel}>Cancel</button>}
        </>
    );
}