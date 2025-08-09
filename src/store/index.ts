import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherForecastReducer } from "@store/weatherForecast/weatherForecast.slice";
import { searchCityReducer } from "@store/searchCity/searchCity.slice";
import { cityNameReducer } from "@store/cityName/cityName.slice";
import { cityGeoReducer } from "@store/cityGeoposition/cityGeoposition.slice";
import { themeStyleReducer } from "@store/themeStyle/themeStyle.slice";

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