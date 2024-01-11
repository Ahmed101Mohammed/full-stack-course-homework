const SearchForm = ({updateSearchContent, searchContent})=>
{
    return (
        <form>
            <label htmlFor="search">
                find countries
                <input 
                    type = "text" 
                    id = "search" 
                    placeholder = "Enter Country Name, eg: egypt" 
                    onChange = {updateSearchContent} 
                    value = {searchContent? searchContent:""} />
            </label>
        </form>
    )
}

export default SearchForm