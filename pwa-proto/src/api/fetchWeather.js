import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e4d4bef5c64712d928314a3e2fb65566';

export const fetchWeather = async function(query){
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID:API_KEY
        }
    });

    return data;
}