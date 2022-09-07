import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from 'react-redux'
import { getAllEpisodes } from "../redux-toolkit/actions/episodesActions";
import EpisodeCard from '../components/EpisodeCard.js'
import { clearInfo } from "../redux-toolkit/reducers/characters.slice";
import LoadingSpinner from "../components/LoadingSpinner";
import EpisodesFilters from "../components/EpisodesFilters";


export default function Episode() {
    const episodes = useSelector(store => store.episodes.allEpisodes4)
    const dispatch = useDispatch()
    const [allEpisodes, setAllEpisodes] = useState([])
    const { loading } = useSelector(store => store.characters)

    useEffect(() => {
        dispatch(getAllEpisodes())
        dispatch(clearInfo())
    }, [])

    useEffect(() => {
        setAllEpisodes(episodes)
    }, [episodes])


    return <div className="bg-yellow-700 min-h-screen pt-10">
        <NavBar />
        <div>
            <h1 className='text-gray-300 flex justify-center text-3xl m-6'>Episodes</h1>
            <EpisodesFilters episode={allEpisodes} />
            <div className='flex justify-center'>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
            !loading ? allEpisodes.map(c => {
                return (
                    <div key={c.episode_id} className='m-10'>
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
            : <div className="absolute"><LoadingSpinner /></div>
            }
            </section>
            </div>
        </div>
    </div>
}