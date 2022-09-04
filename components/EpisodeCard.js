export default function EpisodeCard({ episode, title, season, series, characters }) {
    return <div className='text-center bg-stone-200 w-80 overflow-hidden rounded-md shadow-md duration-300 hover:scale-110'>
        <h1 className="text-xl pt-3 pb-3 font-semibold bg-green-800 text-white shadow-md">{title}</h1>
        <p className="mb-4 mx-2"><p className="text-xl">Cast:</p> {characters.join(', ')}</p>
        <p className="text-slate-800 border-t-2 border-black border-gray-400">S{season < 10 ? '0' + season : season} E{episode < 10 ? '0' + episode : episode}</p>
        <p className="mb-2 text-slate-800 content-end">{series}</p>
    </div>
}