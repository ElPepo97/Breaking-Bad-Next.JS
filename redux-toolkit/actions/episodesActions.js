import {
    fullEpisodes
} from '../reducers/episodes.slice';
import axios from "axios";

const URL = 'https://www.breakingbadapi.com/api'

export const getAllEpisodes = () => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL}/episodes`);

        dispatch(fullEpisodes(data))
    }catch(err){
        console.log(err)
    }
}