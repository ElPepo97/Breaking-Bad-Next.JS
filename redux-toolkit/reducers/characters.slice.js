import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCharacters: [],
    characterDetail: {},
    characterDeath: {},
    characterDeaths: {},
    loading: true,
    favorites: []
}

const charactersReducer = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fullCharacters(state, action){
            state.allCharacters = action.payload
        },
        characterInfo(state, action) {
            state.characterDetail = action.payload
        },
        deathInfo(state, action) {
            state.characterDeath = action.payload
        },
        deathsInfo(state, action) {
            state.characterDeaths = action.payload
        },
        clearInfo(state) {
            state.characterDetail = {},
            state.characterDeath = {},
            state.characterDeaths = {}
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setFavorites(state, action) {
            const favorite = state.favorites.filter(c => c.name === action.payload.name)
            if (favorite.length) {
                const newFavorites = state.favorites.filter(c => c.name !== action.payload.name)

                return void(state.favorites = newFavorites)
            }
            void(state.favorites = [...state.favorites, action.payload])
        }
    }
})

export const {
    fullCharacters,
    characterInfo,
    deathInfo,
    deathsInfo,
    clearInfo,
    setLoading,
    setFavorites
} = charactersReducer.actions

export default charactersReducer.reducer