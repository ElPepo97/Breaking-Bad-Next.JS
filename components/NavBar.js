import Link from "next/link";
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter().pathname

    return <div className="bg-emerald-800 shadow-md flex h-10 fixed top-0 w-full z-20">
        <Link href='/home'>
            <div className={`w-full text-center cursor-pointer font-semibold text-white w-full py-2 ${(router !== '/home' && router !== '/character/[id]') ? "hover:bg-green-800 text-neutral-300" : "bg-emerald-900"}`}>
                Home
            </div>
        </Link>
        <Link href='/episode'>
            <div className={`w-full text-center cursor-pointer font-semibold text-white w-full py-2 ${router !== '/episode' ? "hover:bg-green-800 text-neutral-300" : "bg-emerald-900"}`}>
                Episodes
            </div>
        </Link>
        <Link href='/fav'>
            <div className={`w-full text-center cursor-pointer font-semibold text-white w-full py-2 ${router !== '/fav' ? "hover:bg-green-800 text-neutral-300" : "bg-emerald-900"}`}>
                Favorite
            </div>
        </Link>
        <Link href='/play'>
            <div className={`w-full text-center cursor-pointer font-semibold text-white w-full py-2 ${router !== '/play' ? "hover:bg-green-800 text-neutral-300" : "bg-emerald-900"}`}>
                Play
            </div>
        </Link>
    </div>
}
