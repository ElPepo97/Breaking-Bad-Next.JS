import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allEpisodes: [],
    favoritesEpisodes: []
}

const episodesReducer = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        fullEpisodes(state, action){
            state.allEpisodes = action.payload
        },
        setFavoritesEpisodes(state, action) {
            const favorite = state.favoritesEpisodes.filter(c => c.title === action.payload.title)
            if (favorite.length) {
                const newFavoritesEpisodes = state.favoritesEpisodes.filter(c => c.title !== action.payload.title)

                return void(state.favoritesEpisodes = newFavoritesEpisodes)
            }
            void(state.favoritesEpisodes = [...state.favoritesEpisodes, action.payload])
        }
    }
})

export const {
    fullEpisodes,
    setFavoritesEpisodes
} = episodesReducer.actions

export default episodesReducer.reducer