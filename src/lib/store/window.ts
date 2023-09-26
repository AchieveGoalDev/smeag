import { writable } from "svelte/store";

const windowInit = {
    width: 0,
    height: 0,
    mainScrollY: 0,
}

export const window = writable(windowInit)