

export default function Card({ name, nickname, img, category }) {
    return <div className='top-none text-center bg-stone-200 w-80 overflow-hidden rounded-md shadow-md'>
        <img src={`${img}`} className='w-80 h-96 object-cover shadow-md'/>
        <p className="text-xl">{name}</p>
        <p>Nickname: {nickname}</p>
        <p>{category}</p>
    </div>
}