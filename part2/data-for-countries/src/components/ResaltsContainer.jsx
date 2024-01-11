import Countries from "./Countries"
import SingleCountry from "./SingleCountry"

const ResultsContainer = ({countriesData, singleCountry, setSearchContent})=>{
    countriesData = !countriesData? []: countriesData; 
    if(singleCountry)
    {
        return <SingleCountry singleCountryData={singleCountry}/>
    }
    return <Countries countries={countriesData} setSearchContent={setSearchContent}/>
}

export default ResultsContainer