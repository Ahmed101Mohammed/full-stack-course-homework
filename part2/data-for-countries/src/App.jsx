import { useState, useEffect } from "react"
import api from "./services/data-for-countries-api"
import SearchForm from "./components/SearchForm"
import ResultsContainer from "./components/ResaltsContainer"

function App() {
  const [searchContent, setSearchContent] = useState(null)
  const [countries, setCountries] = useState(null)
  const [singleCountry, setSingleCountry] = useState(null)

  const search = ()=>
  {
    if(!countries || !searchContent)
    {
      singleCountry? setSingleCountry(null):null;
      return []
    }
    
    const possipleShownData = countries.filter(countryName => {
      return countryName.slice(0,searchContent.length).toLowerCase() === searchContent.toLowerCase()
    })

    if(possipleShownData.length === 1) 
    {
      api.getCountry(possipleShownData[0]).then(data => {
        if((singleCountry && singleCountry.name.common !== data.name.common)||!singleCountry)
        {
          setSingleCountry(data)
        }
      })
      .catch(err=>console.log("Failed to load full country data."))
    }
    else if(possipleShownData.length !== 1)
    {
      if(singleCountry)
      {
        setSingleCountry(null)
      }
      return possipleShownData
    }

  }

  const shownData = search();

  const getAllCountriesNames = ()=>
  {
    api.getAll()
    .then(data => 
      {  
        const countiresNames = data.map(country => country.name.common)
        setCountries(countiresNames)
      })
  }
  

  useEffect(getAllCountriesNames,[])

  return (
    <main>
      <SearchForm updateSearchContent={(e)=> setSearchContent(e.target.value)} searchContent={searchContent}/>
      <ResultsContainer countriesData={shownData} singleCountry={singleCountry} setSearchContent={setSearchContent}/>
    </main>
    
  )
}

export default App
