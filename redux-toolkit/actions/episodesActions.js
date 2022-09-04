import {
    fullEpisodes
} from '../reducers/episodes.slice';
import axios from "axios";
import { setLoading } from '../reducers/characters.slice';

const URL = 'https://www.breakingbadapi.com/api'

export const getAllEpisodes = () => async(dispatch) => {
    try{
        dispatch(setLoading(true))
        const { data } = await axios.get(`${URL}/episodes`);
        dispatch(setLoading(false))

        dispatch(fullEpisodes(data))
    }catch(err){
        console.log(err)
    }
}