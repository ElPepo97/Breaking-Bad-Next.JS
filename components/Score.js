import { useSelector } from "react-redux"
import LoadingSpinner from './LoadingSpinner'

export default function Score() {
    const { scoreTable } = useSelector(store => store.quotes)


    return <div className="flex justify-center flex-col">
        <p className="font-medium text-xl flex self-center justify-center mb-4 border-b-2 w-40 border-zinc-500">Best streaks</p>
        {
            scoreTable ?
            scoreTable.map((s, index) => {
                if (index < 5) {
                    return <div key={index} className="flex justify-between">
                        <span className="ml-32">{s.name}</span>
                        <span className="mr-32">{s.score}</span>
                    </div>
                }
            })
            : <LoadingSpinner />
        }
    </div>
}