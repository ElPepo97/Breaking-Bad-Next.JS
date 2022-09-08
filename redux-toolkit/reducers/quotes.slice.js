import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allQuotes: [],
    scoreTable: [
        {name: 'Cosmo Kramer', score: '65'},
        {name: 'Tony Ficante', score: '50'},
        {name: 'Elba Zurita', score: '35'},
        {name: 'Mario Neta', score: '20'},
        {name: 'Guillermo Nigote', score: '5'},
    ]
}

const quotesReducer = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        fullQuotes(state, action) {
            state.allQuotes = action.payload
        },
        updateTable(state, action) {
            state.scoreTable = [...state.scoreTable, action.payload].sort((a, b) => a.score - b.score).reverse()
        }
    }
})

export const {
    fullQuotes,
    updateTable
} = quotesReducer.actions

export default quotesReducer.reducer