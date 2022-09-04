import Link from "next/link";


export default function NavBar() {
    return <div className="bg-emerald-800 shadow-md flex h-10">
        <Link href='/home'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/home') ? "w-full text-center cursor-pointer font-semibold text-slate-100 hover:bg-green-800 w-full py-2" : "w-full text-center cursor-pointer font-semibold bg-emerald-900 text-slate-100 w-full py-2"}>
                Home
            </div>
        </Link>
        <Link href='/episode'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/episode') ? "w-full text-center cursor-pointer font-semibold text-slate-100 hover:bg-green-800 w-full py-2" : "w-full text-center cursor-pointer font-semibold bg-emerald-900 text-slate-100 w-full py-2"}>
                Episodes
            </div>
        </Link>
        <Link href='/fav'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/fav') ? "w-full text-center cursor-pointer font-semibold text-slate-100 hover:bg-green-800 w-full py-2" : "w-full text-center cursor-pointer font-semibold bg-emerald-900 text-slate-100 w-full py-2"}>
                Favourite
            </div>
        </Link>
    </div>
};
