import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCharacters: []
}

const charactersReducer = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fullCharacters(state, action){
            state.allCharacters = action.payload
        },
        clearInfo(state){
            state.allCharacters = {}
        }
    }
})

export const {
    fullCharacters,
    clearInfo
} = charactersReducer.actions

export default charactersReducer.reducer