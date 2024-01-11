const Filter = ({search, handleChange})=>
{
  return (
    <form>
        <label htmlFor="search">search:</label>
        <input type="search" id="search" value={search} onChange={handleChange} />
    </form>
  )
}

export default Filter