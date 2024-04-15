import { FaInstagram } from "react-icons/fa";

export default function Nav() {
    return (
        <div className="w-full h-[80px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[30px] pt-8 pb-6 z-40 font-serif tracking-widest">
            <a href="/"><video src={"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4"} autoPlay loop muted className="h-[70px] mb-2" />
            </a>
            <a href={'#about'} className="text-xl text-white hover:text-red-600 hover:underline underline-offset-8">ABOUT</a>
            <a href={'#listen'} className="text-xl text-white hover:text-red-600 hover:underline underline-offset-8">LISTEN</a>
            <a href={'#episodes'} className="text-xl text-white hover:text-red-600 hover:underline underline-offset-8">READ</a>
            <div id="icons-container" className="flex flex-row">
                <a href="https://www.instagram.com/thehousethatshadowsbuilt/"><FaInstagram className="size-8 mx-5 mb-3 cursor-pointer fill-blue-800 hover:fill-red-800" /></a>
            </div>
        </div>
    )
}