import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allEpisodes: [],
    allEpisodes2: [],
    allEpisodes3: [],
    allEpisodes4: [],
    favoritesEpisodes: [],
}

const episodesReducer = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        fullEpisodes(state, action){
            state.allEpisodes = action.payload
            state.allEpisodes2 = action.payload
            state.allEpisodes3 = action.payload
            state.allEpisodes4 = action.payload
        },
        setFavoritesEpisodes(state, action) {
            const favorite = state.favoritesEpisodes.filter(c => c.title === action.payload.title)
            if (favorite.length) {
                const newFavoritesEpisodes = state.favoritesEpisodes.filter(c => c.title !== action.payload.title)

                return void(state.favoritesEpisodes = newFavoritesEpisodes)
            }
            void(state.favoritesEpisodes = [...state.favoritesEpisodes, action.payload])
        },
        episodesFilter(state, action) {
            if (action.payload !== 'All') {
                const filter = state.allEpisodes3.filter(c => c.episode === action.payload)
    
                state.allEpisodes4 = filter
            } else {
                state.allEpisodes4 = state.allEpisodes3
            }
        },
        filterSeason(state, action) {
            if (action.payload !== 'All') {
                const filter = state.allEpisodes2.filter(c => c.season.includes(action.payload))
    
                state.allEpisodes3 = filter
                state.allEpisodes4 = filter
            } else {
                state.allEpisodes3 = state.allEpisodes2
                state.allEpisodes4 = state.allEpisodes2
            }
        },
        filterSeries(state, action) {
            if (action.payload !== '') {
                const filter = state.allEpisodes.filter(c => c.series.includes(action.payload))
        
                state.allEpisodes2 = filter
                state.allEpisodes3 = filter
                state.allEpisodes4 = filter
            } else {
                state.allEpisodes2 = state.allEpisodes
                state.allEpisodes3 = state.allEpisodes
                state.allEpisodes4 = state.allEpisodes
            }
        },
    }
})

export const {
    fullEpisodes,
    setFavoritesEpisodes,
    episodesFilter,
    filterSeries,
    filterSeason
} = episodesReducer.actions

export default episodesReducer.reducer