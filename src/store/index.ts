import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiDataReducer } from "./weatherApiData/apiData.slice";
import { searchCityReducer } from "./searchCity/searchCity.slice";
import { cityNameReducer } from "./cityName/cityName.slice";
import { cityGeoReducer } from "./cityGeoposition/cityGeoposition.slice";

const Reducers = combineReducers({
    weatherApiData: apiDataReducer,
    searchCity: searchCityReducer,
    cityName: cityNameReducer,
    cityGeo: cityGeoReducer,
})

export default configureStore({
    reducer: Reducers,
})

export type State = ReturnType<typeof Reducers>;