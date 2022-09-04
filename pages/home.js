import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'
import { useSelector, useDispatch } from 'react-redux'
import CharacterCard from '../components/CharacterCard'
import { useEffect, useState } from 'react'
import { getAllCharacters } from '../redux-toolkit/actions/charactersActions'
import { clearInfo } from '../redux-toolkit/reducers/characters.slice'

export default function Home() {
    const characters = useSelector(store => store.characters.allCharacters);
    const [allCharacters, setAllCharacters] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(clearInfo())
    }, [])

    useEffect(() => {
        setAllCharacters(characters)
    }, [characters])

  return (
    <div className="bg-yellow-700 min-h-screen">
        <NavBar />
        <div>
            <h1 className='flex justify-center text-3xl m-6'>Characters</h1>
            <div className='flex justify-center'>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
            allCharacters ? allCharacters.map(c => {
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
            : null
            }
            </section>
            </div>
        </div>
    </div>
  )
}
