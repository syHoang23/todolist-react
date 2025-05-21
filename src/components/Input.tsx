import React from 'react';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange, onSave }: Props) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
            spellCheck="false"
            className="bg-gray-300 px-4 py-0.5 text-black focus:outline-none focus:border-orange-600 rounded-2xl w-full"
        />
    );
}