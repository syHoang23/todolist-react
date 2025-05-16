import React from "react";

// Linh

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
}

export default function Input({ value, onChange, onSave }: InputProps) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
        />
    );
}