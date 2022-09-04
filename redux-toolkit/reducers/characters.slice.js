import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCharacters: [],
    characterDetail: {},
    characterDeath: {},
    characterDeaths: {}
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
        }
    }
})

export const {
    fullCharacters,
    characterInfo,
    deathInfo,
    deathsInfo,
    clearInfo
} = charactersReducer.actions

export default charactersReducer.reducer