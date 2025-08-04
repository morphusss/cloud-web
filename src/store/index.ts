import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherForecastReducer } from "./weatherForecast/weatherForecast.slice";
import { searchCityReducer } from "./searchCity/searchCity.slice";
import { cityNameReducer } from "./cityName/cityName.slice";
import { cityGeoReducer } from "./cityGeoposition/cityGeoposition.slice";
import { themeStyleReducer } from "./themeStyle/themeStyle.slice";

const Reducers = combineReducers({
    weatherForecast: weatherForecastReducer,
    searchCity: searchCityReducer,
    cityName: cityNameReducer,
    cityGeo: cityGeoReducer,
    themeStyle: themeStyleReducer,
})

export default configureStore({
    reducer: Reducers,
})

export type State = ReturnType<typeof Reducers>;