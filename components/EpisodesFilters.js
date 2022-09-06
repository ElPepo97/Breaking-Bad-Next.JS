import { useState } from "react"
import { useDispatch } from "react-redux"
import { episodesFilter, filterSeason, filterSeries } from "../redux-toolkit/reducers/episodes.slice"


export default function EpisodesFilters({ episode }) {
    const [series, setSeries] = useState('')
    const [season, setSeason] = useState('All')
    const [episodes, setEpisode] = useState('All')
    const dispatch = useDispatch()
    
    const handleEpisode = (e) => {
        e.preventDefault()
        setEpisode(e.target.value)

        dispatch(episodesFilter(e.target.value))
    }

    const handleSeason = (e) => {
        e.preventDefault()
        var a = document.getElementById('episode')
        if (e.target.value !== 'All') {
            a.removeAttribute('disabled')
        } else {
            a.setAttribute('disabled', 'disabled')
        }
        setEpisode('All')
        setSeason(e.target.value)

        dispatch(filterSeason(e.target.value))
    }

    const handleSeries = (e) => {
        e.preventDefault()
        var a = document.getElementById('episode')
        var b = document.getElementById('season')
        if (e.target.value !== '') {
            b.removeAttribute('disabled')
        } else {
            b.setAttribute('disabled', 'disabled')
        }
        a.setAttribute('disabled', 'disabled')
        setSeason('All')
        setEpisode('All')
        setSeries(e.target.value)

        dispatch(filterSeries(e.target.value))
    }

    return <div className="flex justify-center">
        <div>
            <label htmlFor="series" className="block mb-2 text-sm font-semibold text-gray-900">Filter by series</label>
            <select id="series" value={series} onChange={handleSeries} className="cursor-pointer bg-gray-700 border border-gray-600 text-white text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 placeholder-gray-400">
                <option value="Better">Better Call Saul</option>
                <option value="Breaking">Breaking Bad</option>
                <option value="">Both</option>
            </select>
        </div>
        <div className="mx-16">
            <label htmlFor="season" className="block mb-2 text-sm font-semibold text-gray-900">Filter by season</label>
            <select id="season" value={season} onChange={handleSeason} disabled='disabled' className="cursor-pointer bg-gray-700 border border-gray-600 text-white text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 placeholder-gray-400">
                {
                    series === 'Better' ?
                    <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </>
                    : <>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value='5'>5</option>
                    </>
                }
                <option value="All">All</option>
            </select>
        </div>
        <div>
            <label htmlFor="episode" className="block mb-2 text-sm font-semibold text-gray-900">Filter by episode</label>
            <select onChange={handleEpisode} value={episodes} disabled='disabled' id="episode" className="cursor-pointer bg-gray-700 border border-gray-600 text-white text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 placeholder-gray-400">
                {
                    episode?.map(s => {
                        return <option key={s.episode_id} value={s.episode}>{s.episode}</option>
                    })
                }
                <option value="All">All</option>
            </select>
        </div>
    </div>
}
