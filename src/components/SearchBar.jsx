function SearchBar({ text, setText }) {

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <input 
            type="text" 
            onChange={handleChange} 
            value={text} 
        />
    )
}

export default SearchBar