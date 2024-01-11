const Countries = ({countries})=>
{
    if(countries.length > 10)
    {
        return <div>Too many matches, specify another filter</div>
    }

    return (
        <ul>
            {countries.map(country=> <li key={country}>{country}</li>)}
        </ul>
    )
}

export default Countries