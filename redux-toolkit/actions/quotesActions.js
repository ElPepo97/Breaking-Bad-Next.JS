import {
    fullQuotes
} from '../reducers/quotes.slice';
import axios from "axios";
import { setLoading } from '../reducers/characters.slice';

const URL = 'https://www.breakingbadapi.com/api'

export const getAllQuotes = () => async(dispatch) => {
    try{
        dispatch(setLoading(true))
        const { data } = await axios.get(`${URL}/quotes`);
        dispatch(setLoading(false))

        dispatch(fullQuotes(data))
    }catch(err){
        console.log(err)
    }
}