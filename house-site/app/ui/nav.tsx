import Image from "next/image";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import logo from '../assets/logo.png'; 

export default function Nav() {
    return (
        <div className="w-full h-[80px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[30px] pt-8 pb-6 z-40">
            <a href="/"><Image src={logo} alt="logo" className="size-16 mb-4"/></a>
            <button className="dark-button w-[100px] h-[50px]"><a href={'#listen'}>Listen</a></button>
            <button className="dark-button w-[100px] h-[50px]">Read</button>
            <button className="dark-button w-[100px] h-[50px]"><a href={'#about'}>About</a></button>
            <div id="icons-container" className="flex flex-row">
                <a href="https://www.instagram.com/thehousethatshadowsbuilt/"><FaInstagram className="size-8 mx-5 cursor-pointer fill-blue-800 hover:fill-red-800" /></a>
                <a href="https://open.spotify.com/show/13AmpupQwdaiylS4PuhtUc"><FaSpotify className="size-8 mx-5 cursor-pointer fill-blue-800 hover:fill-red-800" /></a>
            </div>
        </div>
    )
}