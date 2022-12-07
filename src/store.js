import { writable } from "svelte/store";
import data from "./data.json";

export const datos = writable(data)
export const lengthArray = writable(data.length)