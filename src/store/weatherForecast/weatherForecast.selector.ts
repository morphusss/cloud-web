import type { State } from "../index";

export const weatherForecastSelector = (state: State) => ({
    cityForecast: state.weatherForecast.cityForecast,
    errorResponse: state.weatherForecast.errorResponse,
})