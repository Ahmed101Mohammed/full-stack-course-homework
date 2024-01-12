import axios from 'axios'

const apiKey = import.meta.env.VITE_SOME_KEY;
const getWhetherOfCity = (cityName)=>
{
    const req = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    const fullReq = axios.get(req)
    return fullReq.then(res=> res.data)
}

export default getWhetherOfCity