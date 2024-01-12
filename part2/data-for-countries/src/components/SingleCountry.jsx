import objectMap from "../liberary/objectMap"

const SingleCountry = ({singleCountryData})=>
{
    const weatherIconUrl = `https://openweathermap.org/img/wn/${singleCountryData[1].weather[0].icon}@2x.png`;

    return (
        <article>
            <h1 className="country-name">{singleCountryData[0].name.common}</h1>
            <p>Capital {singleCountryData[0].capital}</p>
            <p>Area {singleCountryData[0].area} Km<sup>2</sup></p>

            <h2>Languages</h2>
            <ul>
                {objectMap(item=><li key={item}>{item}</li>,singleCountryData[0].languages)}
            </ul>
            <img src={singleCountryData[0].flags.svg} alt={singleCountryData[0].flags.alt} />

            <h2>Weather in {singleCountryData[0].capital}</h2>
            <p>Temperature {(singleCountryData[1].main.temp-273.15).toString().slice(0,5)} Celcius</p>
            <img className="icon" src={weatherIconUrl} alt="Icon for weather" />
            <p>Wind {singleCountryData[1].wind.speed} m/s</p>
        </article>
    )
}

export default SingleCountry