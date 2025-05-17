import {useState} from 'react';
import Input from './Input';

export default function Card({ key, id, value, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [input, setInput] = useState(value);

    const handleChangeCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const handleClickEdit = () => {
        setIsEdit(true);
    };
    const handleClickCancel = () => {
        setIsEdit(false);
    };
    const onChange = (e) => {
        setInput(e.target.value);
    }
    const onSave = (e) => {
        if (e.key === 'Enter') 
            setIsEdit(false);
    }
    const handleClickDelete = () => {
        onDelete(id);
    };

    return (
        <>
            <div className='flex items-center' id={id} key={key}>
                {isEdit ? (
                    <>
                        <Input value={input} onChange={onChange} onSave={onSave}/>
                        <button onClick={handleClickCancel}>Cancel</button>
                    </>
                ) : (
                    <>
                        <input type="checkbox" onChange={handleChangeCheckbox} checked={isChecked}/>
                        <span className='inline-flex items-baseline ' style={{ textDecoration: isChecked ? 'line-through' : 'none', 
                                    opacity: isChecked ? 0.5 : 1 }}> {input} </span>
                        <button onClick={handleClickEdit}>Edit</button>
                        <button onClick={handleClickDelete}>Delete</button>
                    </>
                )}
            </div>
        </>
    );
}