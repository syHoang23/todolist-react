import React from 'react';

export default function Input({ value, onChange, onSave }) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
            spellCheck="false"
            className="bg-gray-300 px-4 py-1 text-black focus:outline-none focus:border-orange-600 rounded-2xl w-full"
        />
    );
}