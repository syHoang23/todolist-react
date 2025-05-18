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
    const handleClickSave = () => {
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
                        <div className="flex items-center justify-between mb-2 w-full">
                            <Input value={input} onChange={onChange} onSave={onSave}/>
                            <button onClick={handleClickSave}>Save</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-between mb-1 w-full">
                            <div className="flex items-center">
                                <input
                                type="checkbox"
                                onChange={handleChangeCheckbox}
                                checked={isChecked}
                                className="mr-2 accent-orange-500 rounded-full"
                                />
                                <span
                                className="inline-flex items-baseline text-gray-950 "
                                style={{
                                    textDecoration: isChecked ? 'line-through' : 'none',
                                    opacity: isChecked ? 0.5 : 1,
                                }}
                                >
                                {input}
                                </span>
                            </div>

                            <div className="flex gap-1">
                                <button
                                className="bg-black text-white px-3 py-1 rounded"
                                onClick={handleClickEdit}
                                >
                                Edit
                                </button>
                                <button
                                className="bg-black text-white px-3 py-1 rounded"
                                onClick={handleClickDelete}
                                >
                                Delete
                                </button>
                            </div>
                            </div>
                    </>
                )}
            </div>
        </>
    );
}