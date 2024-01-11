import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = ()=>
{
    const req = axios.get(baseUrl+"all")
    return req.then(res => res.data)
}

const getCountry = (countryName)=>
{
    const req = axios.get(`${baseUrl}name/${countryName}`)
    return req.then(res => res.data)
}

export default {getAll, getCountry}