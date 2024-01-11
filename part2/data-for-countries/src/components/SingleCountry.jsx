import objectMap from "../liberary/objectMap"

const SingleCountry = ({singleCountryData})=>
{
    return (
        <article>
            <h1 className="country-name">{singleCountryData.name.common}</h1>
            <p>Capital {singleCountryData.capital}</p>
            <p>Area {singleCountryData.area} Km<sup>2</sup></p>

            <h2>Languages</h2>
            <ul>
                {objectMap(item=><li key={item}>{item}</li>,singleCountryData.languages)}
            </ul>
            <img src={singleCountryData.flags.svg} alt={singleCountryData.flags.alt} />
        </article>
    )
}

export default SingleCountry