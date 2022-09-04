import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import {
    getCharacterDeath,
    getCharacterDetail,
    getCharacterDeaths
} from "../../redux-toolkit/actions/charactersActions";


export default function CharacterDetail() {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()
    const {
        characterDetail,
        characterDeath,
        characterDeaths
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

    return <div className="bg-yellow-700 min-h-screen">
        <NavBar />
        <div className="flex justify-center">
            <div className="w-3/4 py-10 flex justify-evenly bg-stone-400 rounded-md shadow-xl  my-14">
                <div className="w-60 flex-col flex items-center">
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
                            Don't spoil!
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
            </div>
        </div>
    </div>
}