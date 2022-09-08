import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Game from "../components/Game"
import NavBar from "../components/NavBar"
import Score from "../components/Score"
import { getAllQuotes } from "../redux-toolkit/actions/quotesActions"


export default function Play() {
    const [page, setPage] = useState('menu')
    const dispatch = useDispatch()
    const { allQuotes } = useSelector(store => store.quotes)

    useEffect(() => {
        dispatch(getAllQuotes())
    }, [])

    const handlePage = (e) => {
        e.preventDefault()
        setPage('game')
    }

    return (
        <div className="bg-yellow-700 min-h-screen pt-10">
            <NavBar />
            <div className="flex justify-center flex-col w-screen">
                <h1 className='flex text-gray-300 justify-center text-3xl mt-6'>Who said it?</h1>
                <h1 className='flex text-gray-300 justify-center text-3xl mb-16'>🤔</h1>

                {
                    page === 'menu'
                    ? <div className="flex self-center flex-col w-1/3 bg-gray-300 py-6 rounded-lg">
                        <Score />
                        <button className="flex self-center bg-black text-white w-fit py-1 px-2 rounded-lg mt-6" onClick={handlePage}>Become #1!</button>
                    </div>
                    : page === 'game'
                    ? <div className="flex self-center flex-col w-1/3 bg-gray-300 py-6 rounded-lg">
                        <Game allQuotes={allQuotes}/>
                    </div>
                    : <div>
                        // input para poner el nombre y guardarlo.
                    </div>
                }


            </div>
        </div>
    )
}