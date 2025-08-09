import type { State } from "@store/index";

export const cityNameSelector = (state: State) => state.cityName.cityName;