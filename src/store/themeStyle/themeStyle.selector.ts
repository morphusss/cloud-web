import type { State } from "@store/index";

export const themeStyleSelector = (state: State) => state.themeStyle.type;