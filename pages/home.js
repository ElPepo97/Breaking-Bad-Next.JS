import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { getAllCharacters } from '../redux-toolkit/actions/charactersActions'

export default function Home() {
    const characters = useSelector(store => store.characters.allCharacters);
    const [allCharacters, setAllCharacters] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCharacters())
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
            <section className='grid grid-cols-3'>
            {
            allCharacters ? allCharacters.map(c => {
                return (
                    <div key={c.id} className='m-10'>
                        <Card
                            name={c.name}
                            nickname={c.nickname}
                            img={c.img}
                            category={c.category}
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
