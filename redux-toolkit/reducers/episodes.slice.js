import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allEpisodes: []
}

const episodesReducer = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        fullEpisodes(state, action){
            state.allEpisodes = action.payload
        }
    }
})

export const {
    fullEpisodes
} = episodesReducer.actions

export default episodesReducer.reducer