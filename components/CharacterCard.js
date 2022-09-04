import Link from "next/link";

export default function CharacterCard({ name, nickname, img, category, id }) {
    return <Link href={`/character/${id}`}>
    <div className='cursor-pointer text-center bg-stone-200 w-80 overflow-hidden rounded-md shadow-md duration-300 hover:scale-110'>
        <img src={`${img}`} className='w-80 h-96 object-cover shadow-md'/>
        <p className="text-xl">{name}</p>
        <p>Nickname: {nickname}</p>
        <p>{category}</p>
    </div>
        </Link>
}