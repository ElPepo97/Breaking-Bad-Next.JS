import Link from "next/link";


export default function NavBar() {
    return <div className="bg-lime-700 shadow-md flex justify-center h-10 items-center w-screen">
        <Link href='/home'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/home') ? "px-48 cursor-pointer font-semibold text-slate-100 hover:bg-lime-800 w-full py-2" : "px-48 cursor-pointer font-semibold bg-lime-900 text-slate-100 w-full py-2"}>
                Home
            </div>
        </Link>
        <Link href='/episode'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/episode') ? "px-48 cursor-pointer font-semibold text-slate-100 hover:bg-lime-800 w-full py-2" : "px-48 cursor-pointer font-semibold bg-lime-900 text-slate-100 w-full py-2"}>
                Episodes
            </div>
        </Link>
        <Link href='/fav'>
            <div className={(typeof window !== "undefined" && window.location.pathname !== '/fav') ? "px-48 cursor-pointer font-semibold text-slate-100 hover:bg-lime-800 w-full py-2" : "px-48 cursor-pointer font-semibold bg-lime-900 text-slate-100 w-full py-2"}>
                Favourite
            </div>
        </Link>
    </div>
};
