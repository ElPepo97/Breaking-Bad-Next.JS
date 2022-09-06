import Link from "next/link";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../redux-toolkit/reducers/characters.slice";

export default function CharacterCard({ name, nickname, img, category, id }) {
    const { favorites } = useSelector(store => store.characters)
    const dispatch = useDispatch()

    const favorite = favorites.filter(c => c.name === name)

    const handleFavorite = (e) => {
        e.preventDefault()
        dispatch(setFavorites({
            name,
            nickname,
            img, 
            category,
            id
        }))
    }

    return <Link href={`/character/${id}`}>
    <div className='cursor-pointer text-center bg-stone-200 w-80 overflow-hidden rounded-md shadow-md'>
        {
            favorite.length
            ? <AiFillStar className="absolute ml-72 text-3xl mt-1 text-amber-500 hover:scale-150 duration-200 hover:rotate-12" onClick={handleFavorite}/>
            : <AiOutlineStar className="absolute ml-72 text-3xl mt-1 text-amber-500 hover:scale-150 duration-200 hover:rotate-12" onClick={handleFavorite}/>
        }
        <img src={`${img}`} className='w-80 h-96 object-cover shadow-md'/>
        <p className="text-xl">{name}</p>
        <p>Nickname: {nickname}</p>
        <p>{category}</p>
    </div>
    </Link>
}
