

export default function Input({ value, onChange, onSave }) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
            spellcheck="false"
            className="caret-pink-500 text-orange-600"

        />
    );
}