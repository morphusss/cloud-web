import type { State } from "@store/index";

export const searchCitySelector = (state: State) => state.searchCity.searchValue;