import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/characters.slice'
import episodesReducer from "./reducers/episodes.slice";

export const store = configureStore({
    reducer:{
        characters: charactersReducer,
        episodes: episodesReducer
    }
});