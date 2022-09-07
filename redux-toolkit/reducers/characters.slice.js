import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCharacters: [],
    allCharacters2: [],
    allCharacters3: [],
    characterDetail: {},
    characterDeath: {},
    characterDeaths: {},
    loading: true,
    favorites: [],
    change: false
}

const charactersReducer = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fullCharacters(state, action){
            state.allCharacters = action.payload
            state.allCharacters2 = action.payload
            state.allCharacters3 = action.payload
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
        },
        seriesFilter(state, action) {
            if (action.payload !== '') {
                const filter = state.allCharacters.filter(c => c.category.includes(action.payload))

                state.allCharacters2 = filter
                state.allCharacters3 = filter
            } else {
                state.allCharacters2 = state.allCharacters
                state.allCharacters3 = state.allCharacters
            }
        },
        seasonFilter(state, action) {
            if (!state.allCharacters3[0].better_call_saul_appearance.length) {
                if (action.payload !== 'All') {
                    const filter = state.allCharacters2.filter(c => c.appearance.includes(Number(action.payload)))
    
                    state.allCharacters3 = filter
                } else {
                    state.allCharacters3 = state.allCharacters2
                }
            } else {
                if (action.payload !== 'All') {
                    const filter = state.allCharacters2.filter(c => c.better_call_saul_appearance.includes(Number(action.payload)))
    
                    state.allCharacters3 = filter
                } else {
                    state.allCharacters3 = state.allCharacters2
                }
            }
        },
        searchCharacter(state, action) {
            state.allCharacters3 = state.allCharacters.filter(c => c.name.toUpperCase().includes(action.payload.toUpperCase()))
            state.change = !state.change
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
    setFavorites,
    seriesFilter,
    seasonFilter,
    searchCharacter
} = charactersReducer.actions

export default charactersReducer.reducer