const Countries = ({countries, setSearchContent})=>
{
    if(countries.length > 10)
    {
        return <div>Too many matches, specify another filter</div>
    }

    return (
        <ul>
            {countries.map(country=> <li key={country}>{country} <button onClick={()=> setSearchContent(country)}>Show</button></li>)}
        </ul>
    )
}

export default Countries