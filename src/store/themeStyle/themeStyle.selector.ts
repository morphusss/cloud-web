import type { State } from "../index";

export const themeStyleSelector = (state: State) => state.themeStyle.type;