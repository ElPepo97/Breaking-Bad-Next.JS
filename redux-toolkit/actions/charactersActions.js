import axios from "axios";
import { fullCharacters } from "../reducers/characters.slice";

const URL = 'https://www.breakingbadapi.com/api'

export const getAllCharacters = () => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL}/characters`)

        const characters = data.map(c => {
            let newCharacter = {
                id: c.char_id,
                name: c.name,
                img: c.img,
                nickname: c.nickname || null,
                category: c.category
            }
            return newCharacter
        })

        dispatch(fullCharacters(characters))
    }catch(err){
        console.log(err)
    }
}