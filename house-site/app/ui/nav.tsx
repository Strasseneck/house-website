import Image from "next/image";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import logo from '../assets/Logo Transparent scaled.png';

export default function Nav() {
    return (
        <div className="w-full h-[80px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[30px] pt-8 pb-6 z-40">
            <a href="/"><video src={"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4"} autoPlay loop muted className="h-[80px]" />
            </a>
            <a href={'#about'} className="text-xl text-white hover:text-red-600">About</a>
            <a href={'#listen'} className="text-xl text-white hover:text-red-600">Listen</a>
            <a href={'#episodes'} className="text-xl text-white hover:text-red-600">Read</a>
            <div id="icons-container" className="flex flex-row">
                <a href="https://www.instagram.com/thehousethatshadowsbuilt/"><FaInstagram className="size-10 mx-5 cursor-pointer fill-blue-800 hover:fill-red-800" /></a>
            </div>
        </div>
    )
}