

export default function Input({ value, onChange, onSave }) {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            onKeyDown={onSave}
            spellcheck="false"
            className="p-3 mr-2 text-black border-2 border-amber-500 focus:outline-none focus:border-amber-600 rounded-2xl h-[40px] w-[255px] "
        />
    );
}