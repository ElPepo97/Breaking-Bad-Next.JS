import NavBar from '../components/NavBar.js'
import { useSelector, useDispatch } from 'react-redux'
import CharacterCard from '../components/CharacterCard'
import { useEffect, useState } from 'react'
import { getAllCharacters } from '../redux-toolkit/actions/charactersActions'
import { clearInfo, searchCharacter } from '../redux-toolkit/reducers/characters.slice'
import LoadingSpinner from '../components/LoadingSpinner.js'
import CharacterFilters from '../components/CharacterFilters.js'


export default function Home() {
    const characters = useSelector(store => store.characters.allCharacters3);
    const [allCharacters, setAllCharacters] = useState([])
    const dispatch = useDispatch()
    const { loading } = useSelector(store => store.characters)
    const [name, setName] = useState('')
    
    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(clearInfo())
    }, [])

    useEffect(() => {
        setAllCharacters(characters)
    }, [characters])

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchCharacter(name))
        setName('')
    }

  return (
    <div className="bg-yellow-700 min-h-screen pt-10">
        <NavBar />
        <div>
            <h1 className='flex text-gray-300 justify-center text-3xl m-6'>Characters</h1>
            <form className='flex justify-center mb-4'>   
                <label htmlFor="default-search" className="mb-2 text-sm font-semibold text-gray-900 sr-only">Search</label>
                <div className="relative flex inline-block">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap  ="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value={name} onChange={handleChange} type="search" id="default-search" className="mr-4 p-2.5 pl-10 w-72 text-sm font-semibold bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white" placeholder="Character name..." />
                    <button onClick={handleSearch} type="submit" className="text-white focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
                </div>
            </form>
            <CharacterFilters character={allCharacters[0]} />
            <div className='flex justify-center'>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
            !loading ? allCharacters.map(c => {
                return (
                    <div key={c.char_id} className='m-10'>
                        <CharacterCard
                            name={c.name}
                            nickname={c.nickname}
                            img={c.img}
                            category={c.category}
                            id={c.char_id}
                        />
                    </div>
                )
            })
            : <div className='absolute'><LoadingSpinner /></div>
            }
            </section>
            </div>
        </div>
    </div>
  )
}
