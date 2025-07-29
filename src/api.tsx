import axios from "axios";
import type { CityForecast } from "./types/types";
import { useDispatch } from "react-redux";
import { changeData } from "./store/weatherApiData/apiData.slice";

const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;



export async function getCityForecast (city: string) {
    try {
        // const dispatch = useDispatch();
        const response = await axios.get<CityForecast>(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=3&aqi=yes&alerts=no`)
        //console.log(response.data)
        // dispatch(changeData(response.data))
        return response.data 
    } catch (error) {
        console.log(error);
    }
}


