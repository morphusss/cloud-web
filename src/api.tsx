import axios from "axios";
import type { CityForecast } from "./types/types";
import type { Dispatch, SetStateAction } from "react";

type apiProps = {
    apiData?: CityForecast[],
    setApiData: Dispatch<SetStateAction<CityForecast[]>>,
}

const ApiKey = import.meta.env.VITE_API_KEY;

export async function getCityForecast (props: apiProps ) {
    const { setApiData } = props;
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=London&days=3&aqi=yes&alerts=no`)
        //console.log(response.data)
        setApiData(response.data);
    } catch (error) {
        console.log(error);
    }
}


