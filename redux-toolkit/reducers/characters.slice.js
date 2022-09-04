import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCharacters: [],
    characterDetail: {},
    characterDeath: {},
    characterDeaths: {},
    loading: true
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
        }
    }
})

export const {
    fullCharacters,
    characterInfo,
    deathInfo,
    deathsInfo,
    clearInfo,
    setLoading
} = charactersReducer.actions

export default charactersReducer.reducer