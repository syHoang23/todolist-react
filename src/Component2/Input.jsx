

export default function Input({ value, onChange, onSave }) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
        />
    );
}