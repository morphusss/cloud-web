import type { State } from "../index";

export const apiDataSelector = (state: State) => state.apiData.apiResponse;