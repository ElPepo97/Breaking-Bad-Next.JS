import { useState } from "react"
import { useDispatch } from "react-redux"
import { seasonFilter, seriesFilter } from "../redux-toolkit/reducers/characters.slice"


export default function CharacterFilters({ character }) {
    const [series, setSeries] = useState('')
    const [season, setSeason] = useState('All')
    const dispatch = useDispatch()

    const handleSeason = (e) => {
        e.preventDefault()
        setSeason(e.target.value)

        dispatch(seasonFilter(e.target.value))
    }

    const handleSeries = (e) => {
        e.preventDefault()
        var a = document.getElementById('season')
        if (e.target.value !== '') {
            a.removeAttribute('disabled')
        } else {
            a.setAttribute('disabled', 'disabled')
        }
        setSeason('All')
        setSeries(e.target.value)

        dispatch(seriesFilter(e.target.value))
    }

    return <div className="flex justify-center">
        <div className="mx-10">
            <label htmlFor="series" className="block mb-2 text-sm font-semibold text-gray-900">Filter by series</label>
            <select id="series" value={series} onChange={handleSeries} className="cursor-pointer bg-gray-700 border border-gray-600 text-white text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 placeholder-gray-400">
                <option value="Better">Better Call Saul</option>
                <option value="Breaking">Breaking Bad</option>
                <option value="">Both</option>
            </select>
        </div>
        <div className="mx-10">
            <label htmlFor="season" className="block mb-2 text-sm font-semibold text-gray-900">Filter by season</label>
            <select id="season" value={season} onChange={handleSeason} disabled='disabled' className="cursor-pointer bg-gray-700 border border-gray-600 text-white text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 placeholder-gray-400">
                {
                    series === 'Better' ?
                    character?.better_call_saul_appearance.map(s => {
                        return <option key={s} value={s}>{s}</option>
                    })
                    : character?.appearance.map(s => {
                        return <option key={s} value={s}>{s}</option>
                    })
                }
                <option value="All">All</option>
            </select>
        </div>
    </div>
}
