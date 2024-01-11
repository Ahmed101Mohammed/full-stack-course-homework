import Countries from "./Countries"
import SingleCountry from "./SingleCountry"

const ResultsContainer = ({countriesData, singleCountry})=>{
    countriesData = !countriesData? []: countriesData; 
    if(singleCountry)
    {
        return <SingleCountry singleCountryData={singleCountry}/>
    }
    return <Countries countries={countriesData}/>
}

export default ResultsContainer