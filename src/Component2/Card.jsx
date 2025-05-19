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
                            <button className='text-white px-3 py-1 rounded bg-orange-500 hover:bg-orange-700' onClick={handleClickSave}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
                                </svg>
                            </button>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                </button>
                                <button
                                className="text-white px-3 py-1 rounded bg-orange-500 hover:bg-orange-700"
                                onClick={handleClickDelete}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                </button>
                            </div>
                            </div>
                    </>
                )}
            </div>
        </>
    );
}