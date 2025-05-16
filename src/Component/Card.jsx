import {useState} from 'react';

export default function Card({id, onDelete}) {
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] = useState('Todo');
    const [inputValue, setInputValue] = useState('');
    const [available, setAvailable] = useState(false);
    const handleClickCheck = () => {
        setIsChecked(!isChecked);
    };
    const handleClickEdit = () => {
        setAvailable(true);
    };
    const handleClickSave = () => {
        setValue(inputValue);
        setAvailable(false);
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
            {available && <><input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /><button onClick={handleClickSave}>Save</button></>}
            {available && <button onClick={handleClickCancel}>Cancel</button>}
        </>
    );
}