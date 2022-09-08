import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allQuotes: [],
}

const quotesReducer = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        fullQuotes(state, action){
            state.allQuotes = action.payload
        },
    }
})

export const {
    fullQuotes,
} = quotesReducer.actions

export default quotesReducer.reducer