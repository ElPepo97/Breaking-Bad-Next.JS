import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesEpisodes } from "../redux-toolkit/reducers/episodes.slice";


export default function EpisodeCard({ episode, title, season, series, characters }) {
    const { favoritesEpisodes } = useSelector(store => store.episodes)
    const dispatch = useDispatch()

    const favorite = favoritesEpisodes.filter(c => c.title === title)

    const handleFavorite = (e) => {
        e.preventDefault()
        dispatch(setFavoritesEpisodes({
            title,
            episode,
            season, 
            series,
            characters
        }))
    }

    return <div className='text-center bg-stone-200 w-80 overflow-hidden rounded-md shadow-md'>
            {
                favorite.length
                ? <AiFillStar className="absolute ml-72 mt-1 text-3xl text-amber-500 cursor-pointer hover:scale-150 duration-200 hover:rotate-12" onClick={handleFavorite}/>
                : <AiOutlineStar className="absolute ml-72 mt-1 text-3xl text-amber-500 cursor-pointer hover:scale-150 duration-200 hover:rotate-12" onClick={handleFavorite}/>
            }
            <h1 className="text-xl pt-3 pb-3 font-semibold bg-green-800 text-white shadow-md">{title}</h1>
            <div className="mb-4 mx-2"><p className="text-xl">Episode characters:</p> {characters.join(', ')}</div>
            <p className="text-slate-800 border-t-2 border-black border-gray-400">S{season < 10 ? '0' + season : season} E{episode < 10 ? '0' + episode : episode}</p>
            <p className="mb-2 text-slate-800 content-end">{series}</p>
    </div>
}
