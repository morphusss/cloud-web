import axios, { AxiosError } from "axios";
import type { CityForecast } from "./types/types";

const ApiKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function getCityForecast (city: string): Promise<CityForecast | AxiosError | null> {
    try {
        const response = await axios.get<CityForecast>(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=3&aqi=yes&alerts=no`)
        return response.data 
    } catch (error) {
        console.log(error)
        if(axios.isAxiosError(error)) {
            return error;
        } else{
            return null;
        }

    }
}


