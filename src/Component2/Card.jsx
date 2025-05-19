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
            <div className='flex items-center justify-between mb-1 w-full' id={id} key={key}>
                {isEdit ? (
                    <>
                        <div className="flex items-center justify-between mb-1 w-full">
                            <Input value={input} onChange={onChange} onSave={onSave}/>
                            <button className='text-white px-3 py-1 rounded bg-orange-500 hover:bg-orange-700' onClick={handleClickSave}>Save</button>
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
                                className="mr-2 accent-orange-500 w-5 h-5 rounded-full appearance-none border-2 border-gray-300 checked:bg-orange-500 checked:border-transparent focus:outline-none transition duration-200 cursor-pointer"
                                />
                                <span
                                onClick={handleChangeCheckbox}
                                className="inline-flex items-baseline text-gray-950 select-none w-[150px] overflow-auto focus:outline-none transition cursor-pointer"
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
                                className="text-white px-3 py-1 rounded bg-orange-500 hover:bg-orange-700"
                                onClick={handleClickEdit}
                                >
                                Edit
                                </button>
                                <button
                                className="text-white px-3 py-1 rounded bg-orange-500 hover:bg-orange-700"
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