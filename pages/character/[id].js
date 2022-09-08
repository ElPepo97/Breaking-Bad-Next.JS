import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import {
    getCharacterDeath,
    getCharacterDetail,
    getCharacterDeaths
} from "../../redux-toolkit/actions/charactersActions";
import LoadingSpinner from "../../components/LoadingSpinner";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { setFavorites } from "../../redux-toolkit/reducers/characters.slice";


export default function CharacterDetail() {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()
    const {
        characterDetail,
        characterDeath,
        characterDeaths,
        loading
    } = useSelector(store => store.characters)
    const [pressed, setPressed] = useState(false)
    
    useEffect(() => {
        dispatch(getCharacterDetail(id))
    }, [id])

    const handleButton = (e) => {
        e.preventDefault()
        setPressed(!pressed)
    }

    useEffect(() => {
        if (Object.keys(characterDetail).length) {
            dispatch(getCharacterDeaths(characterDetail.name?.split(' ').join('+')))
            dispatch(getCharacterDeath(characterDetail.name?.split(' ').join('+')))
        }
    }, [characterDetail])

    const handleGoBack = (e) => {
        e.preventDefault()
        history.back()
    }

    const { favorites } = useSelector(store => store.characters)

    const favorite = favorites.filter(c => c.name === characterDetail.name)

    const handleFavorite = (e) => {
        e.preventDefault()
        dispatch(setFavorites({
            name: characterDetail.name,
            nickname: characterDetail.nickname,
            img: characterDetail.img,
            category: characterDetail.category,
            id
        }))
    }

    return <div className="bg-yellow-700 min-h-screen">
        <NavBar />
        <div className="flex justify-center">
            {!loading ?
            <div className="w-3/4 py-10 flex justify-evenly bg-neutral-600 text-slate-200 rounded-md shadow-xl my-14">
                <div className="w-60 flex-col flex items-center">
                    {
                        favorite.length
                        ? <AiFillStar className="absolute ml-64 text-3xl mt-1 text-amber-500 hover:scale-150 duration-200 rotate-12 cursor-pointer" onClick={handleFavorite}/>
                        : <AiOutlineStar className="absolute ml-64 text-3xl mt-1 text-amber-500 hover:scale-150 duration-200 rotate-12 cursor-pointer" onClick={handleFavorite}/>
                }
                    <p className="text-2xl mb-2">{characterDetail?.name}</p>
                    <img src={`${characterDetail?.img}`} alt={`${characterDetail?.name}`} className='rounded-xl shadow-lg'/>
                </div>
                <div className="flex flex-col text-left justify-center w-1/2 border-l-2 border-gray-700">
                    <div className="ml-16 font-medium">
                    <p>Nickname: {characterDetail?.nickname}</p>
                    <p>Interpreted by: {characterDetail?.portrayed}</p>
                    {characterDetail.category?.includes("Breaking Bad")
                    ? <p>Breaking Bad: Appears on season/s {characterDetail?.appearance.join(', ')}</p>
                    : null}
                    {characterDetail.category?.includes("Better Call Saul")
                    ? <p>Better Call Saul: Appears on season/s {characterDetail?.better_call_saul_appearance.join(', ')}</p>
                    : null
                    }
                    {!pressed ?
                    <button
                        className="bg-black text-white w-fit flex self-center py-1 px-2 rounded-lg mt-10"
                        onClick={handleButton}
                    >
                        Spoiler!
                    </button>
                    : <div className="mt-10">
                        <button
                            className="bg-black text-white w-fit py-1 px-2 rounded-lg"
                            onClick={handleButton}
                        >
                            Don&apos;t spoil!
                        </button>
                        <p>Occupation: {characterDetail?.occupation.join(', ')}</p>
                        <p>{characterDetail?.status !== 'Alive' ? <span>⚰</span> : <span>✔</span>}{characterDetail?.status}</p>
                        {characterDeath
                        ? <div>
                            <p>Killed by: {characterDeath?.responsible}</p>
                            <p>Cause of death: {characterDeath?.cause}</p>
                            <p>Last words: {characterDeath?.last_words}</p>
                        </div>
                        : null}
                        {characterDeaths?.deathCount > 0 ? <p>People killed: {characterDeaths?.deathCount}☠</p> : null}
                    </div>}
                    </div>
                </div>
                <TiArrowBack className="text-3xl cursor-pointer" onClick={handleGoBack} />
            </div>
            : <div className="w-3/4 py-10 flex justify-evenly bg-stone-400 rounded-md shadow-xl  my-14">
                <LoadingSpinner />
            </div>}
        </div>
    </div>
}