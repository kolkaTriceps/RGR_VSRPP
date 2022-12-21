import { characterTypes } from "./ActionTypes";

export const addCharacterAction = (payload) => ({type: characterTypes.ADD_CHARACTER, payload});
export const removeCharacterAction = (payload) => ({type: characterTypes.REMOVE_CHARACTER, payload});