import { characterTypes } from "../actions/ActionTypes";

const initialState = {
    characters: [
        {id: 0, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.com"},
        {id: 1, firstName: "John", lastName: "Wick", email: "wick@mail.com"},
        {id: 2, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.com"},
        {id: 3, firstName: "Hoolio", lastName: "Alpacho", email: "alpacho@mail.com"},
        {id: 4, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.com"},
        {id: 5, firstName: "Bubble", lastName: "Gum", email: "gum@mail.com"},
        {id: 6, firstName: "Thomas", lastName: "Shelby", email: "shelby@mail.com"},
        {id: 7, firstName: "Walter", lastName: "White", email: "white@mail.com"},
        {id: 8, firstName: "Jessy", lastName: "Pinkman", email: "pinkman@mail.com"},
        {id: 9, firstName: "Doctor", lastName: "Haus", email: "haus@mail.com"},
        {id: 10, firstName: "Mister", lastName: "Robot", email: "mr.robot@mail.com"},
        {id: 11, firstName: "Antonio", lastName: "Banderos", email: "banderos@mail.com"},
    ]
}

export const CharactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case characterTypes.ADD_CHARACTER:
            return {...state, characters: [...state.characters, action.payload]}

        case characterTypes.REMOVE_CHARACTER:
            return {...state, characters: state.characters.filter((character) => character.id !== action.payload)}

        default:
            return state;
    }
}