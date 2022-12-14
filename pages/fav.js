import NavBar from "../components/NavBar";
import CharacterCard from "../components/CharacterCard";
import { useSelector } from "react-redux";
import EpisodeCard from "../components/EpisodeCard";
import { useState } from "react";


export default function Fav() {
    const { favorites } = useSelector(store => store.characters)
    const { favoritesEpisodes } = useSelector(store => store.episodes)
    const [favPage, setFavPage] = useState('characters')

    const handleCharacters = (e) => {
        e.preventDefault()
        setFavPage('characters')
    }

    const handleEpisodes = (e) => {
        e.preventDefault()
        setFavPage('episodes')
    }

    return <div className="bg-yellow-700 min-h-screen pt-10">
        <NavBar />
        <h1 className='text-gray-300 flex justify-center text-3xl m-6'>Favorites List</h1>
        {
            favPage === 'characters' ?
            <div>
            <div className="flex justify-center">
                <button
                    className="mt-10 mr-10 w-44 p-2 rounded-md bg-zinc-500 cursor-auto font-semibold text-white"
                    onClick={handleCharacters}
                >
                    Favorites characters
                </button>
                <button className="mt-10 w-44 bg-white p-2 rounded-md" onClick={handleEpisodes}>
                    Favorites episodes
                </button>
            </div>
            <div className='flex justify-center mt-12'>
                <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {favorites.length ? favorites.map(c => {
                        return (
                            <div key={c.id} className='m-10'>
                                <CharacterCard
                                    name={c.name}
                                    nickname={c.nickname}
                                    img={c.img}
                                    category={c.category}
                                    id={c.id}
                                    />
                            </div>
                        )
                    })
                    : <div className="text-xl text-center w-screen">No characters added to your favorites list.</div>}
                </section>
            </div>
        </div>
        : null
        }
        {
        favPage === 'episodes' ?
        <div>
            <div className="flex justify-center">
                <button className="mt-10 bg-white mr-10 w-44 p-2 rounded-md" onClick={handleCharacters}>
                    Favorites characters
                </button>
                <button
                    className="mt-10 w-44 p-2 rounded-md bg-zinc-500 cursor-auto font-semibold text-white"
                    onClick={handleEpisodes}
                >
                    Favorites episodes
                </button>
            </div>
            <div className='flex justify-center mt-12'>
                <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {favoritesEpisodes.length ? favoritesEpisodes.map(c => {
                        return (
                            <div key={c.title} className='m-10'>
                                <EpisodeCard
                                    episode={c.episode}
                                    title={c.title}
                                    season={c.season}
                                    series={c.series}
                                    characters={c.characters}
                                />
                            </div>
                        )
                    })
                    : <div className="text-xl text-center w-screen">No episodes added to your favorites list.</div>}
                </section>
            </div>
        </div>
        : null
        }
    </div>
}