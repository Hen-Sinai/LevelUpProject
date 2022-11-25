const SearchBar = ({ books, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (e.target.value.length > 2) 
            return setSearchResults(e.target.value)
        else
            setSearchResults('')
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
            </form>
        </header>
    )
}
export default SearchBar