import axios from "axios";
import { fullCharacters, characterInfo, deathInfo, deathsInfo, setLoading } from "../reducers/characters.slice";

const URL = 'https://www.breakingbadapi.com/api'

export const getAllCharacters = () => async(dispatch) => {
    try{
        dispatch(setLoading(true))
        const { data } = await axios.get(`${URL}/characters`);
        dispatch(setLoading(false))

        return dispatch(fullCharacters(data))
    }catch(err){
        console.log(err)
    }
}

export const getCharacterDetail = (id) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const { data } = await axios.get(`${URL}/characters/${id}`)
        dispatch(setLoading(false))

        return dispatch(characterInfo(data[0]))
    } catch (error) {
        console.log(error)
    }
}

export const getCharacterDeath = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/death?name=${name}`)

        return dispatch(deathInfo(data[0]))
    } catch (error) {
        console.log(error)
    }
}

export const getCharacterDeaths = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/death-count?name=${name}`)

        return dispatch(deathsInfo(data[0]))
    } catch (error) {
        console.log(error)
    }
}
