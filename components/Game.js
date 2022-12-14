import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner";
import { updateTable } from "../redux-toolkit/reducers/quotes.slice";

export default function Game({ allQuotes, setPage }) {
    const [correct, setCorrect] = useState(0)
    const { loading } = useSelector(store => store.characters)
    const [rightQuote, setRightQuote] = useState(allQuotes[0] || {quote: "I am not in danger, Skyler. I am the danger!", author: "Walter White"})
    const [options, setOptions] = useState([])
    const [incorrect, setIncorrect] = useState(false)
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const [review, setReview] = useState(false)

    const names = [
        "Walter White",
        "Skyler White",
        "Saul Goodman",
        "Jesse Pinkman",
        "Hank Schrader",
        "Mike Ehrmantraut",
        "Gus Fring",
        "Hector Salamanca",
        "Jimmy McGill",
        "Kim Wexler",
        "Chuck McGill",
    ]

    useEffect(() => {
        mixNames()
    }, [, rightQuote])

    const mixNames = () => {
        let arreglo = [rightQuote.author]
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * (names.length))
            if (arreglo.includes(names[randomIndex])
            || (names[randomIndex] === 'Saul Goodman' && arreglo.includes('Jimmy McGill'))
            || (names[randomIndex] === 'Jimmy McGill' && arreglo.includes('Saul Goodman'))) {
                i--;
                continue
            }
            arreglo.push(names[randomIndex])
        }

        for (let i = arreglo.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let temporal = arreglo[i];
            arreglo[i] = arreglo[randomIndex];
            arreglo[randomIndex] = temporal;
        }
        setOptions(arreglo);
    }

    const handleAnswer = (e) => {
        e.preventDefault()
        var a = document.getElementById('rightAnswer')
        a.className = 'flex self-center text-center text-black font-semibold bg-green-700 p-2 rounded-lg w-60 cursor-pointer mb-2 m-2'
        a.disabled = true
        var b = document.querySelectorAll('#wrongAnswer')
        b.forEach(o => o.disabled = true)
        

        if (e.target.value !== rightQuote.author) {
            e.target.className = 'flex self-center text-center text-black font-semibold bg-rose-700 p-2 rounded-lg w-60 cursor-pointer mb-2 m-2'
            e.target.id = 'incorrect'
        }
        setReview(true)
    }

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleScore = (e) => {
        e.preventDefault()
        dispatch(updateTable({name, score: correct}))

        setPage('menu')
    }

    const handleNext = (e) => {
        var a = document.getElementById('rightAnswer')
        var b = document.querySelectorAll('#wrongAnswer')
        a.disabled = false
        b.forEach(o => o.disabled = false)
        
        var c = document.getElementById('incorrect')
        if (c) {
            setReview(false)
            setIncorrect(true)
        } else {
            a.className = 'flex self-center text-center text-black font-semibold bg-gray-300 p-2 rounded-lg w-60 cursor-pointer mb-2 m-2 hover:bg-gray-500 focus:bg-gray-600'
            setRightQuote(allQuotes[correct + 1])
            setCorrect(correct + 1)
            setReview(false)
        }
    }

    return <div className="flex justify-center">
        {
            loading ?
            <div className="flex justify-center">
                <LoadingSpinner />
            </div>
            : <div className="flex justify-center flex-col">
                { !incorrect
                ? <div className="flex justify-center flex-col">
                    <p className="flex self-center text-center text-xl text-white mb-8 mx-2">&quot;{rightQuote?.quote}&quot;</p>
                    {options?.map((o, index) => {
                    return <input type='button'
                        className="flex self-center text-center text-black font-semibold bg-gray-300 p-2 rounded-lg w-60 cursor-pointer mb-2 m-2 hover:bg-gray-500 focus:bg-gray-600"
                        value={o}
                        key={index}
                        onClick={handleAnswer}
                        id={o === rightQuote.author ? 'rightAnswer' : 'wrongAnswer'}
                        disabled={false}
                    />
                    })}
                    {review ?
                    <button
                        className="flex self-center bg-black text-white w-fit py-1 px-2 rounded-lg mt-6"
                        onClick={handleNext}
                        id='correct'
                    >
                        Next
                    </button> : null}
                </div>
                : <div className="flex flex-col">
                    <h1 className="text-2xl text-center text-white">Game over</h1>
                    <h2 className="text-md text-center mb-10 text-white">{correct} correct answers</h2>
                    <input
                        value={name}
                        type='text'
                        className="p-2 w-60 text-sm text-center font-semibold bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white"
                        placeholder="Your name..."
                        onChange={handleName}
                    />
                    <button className="flex self-center bg-black text-white w-fit py-1 px-2 rounded-lg mt-2" onClick={handleScore}>
                        Submit score
                    </button>
                </div>
            }
            </div>
        }
    </div>
}