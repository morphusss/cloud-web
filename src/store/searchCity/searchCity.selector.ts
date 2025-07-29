import type { State } from "../index";

export const searchCitySelector = (state: State) => state.searchCity.searchValue;