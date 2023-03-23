const InputSearch = (props) => {
    return (
        <input 
            type='search'
            placeholder={props.placeholder}
            value={props.value}
            className='input-search'
            onInput={(event) => {
                props.changeSearchInput(event.target.value);
            }}
        />
    )
}

export default InputSearch;