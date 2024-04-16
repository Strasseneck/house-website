'use client'
// icons
import { FaInstagram, FaMastodon } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineMenu } from "react-icons/md";
// utils
import { useState } from "react";

const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        if (menuOpen) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true);
        }
    }
    return (
        <>
            {isMobileDevice() ? (
                <div className="w-full h-[100px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[20px] pt-10 pb-6 z-40 font-serif tracking-widest">
                    {menuOpen ? (
                        <>
                            <div className="flex flex-row">
                                <a href={'#about'} className="text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 ">ABOUT</a>
                                <a href={'#listen'} className="text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 ">LISTEN</a>
                                <a href={'#episodes'} className="text-s text-white hover:text-red-600 hover:underline underline-offset-8 mx-5 mb-3 ">READ</a>
                            </div>
                            <MdOutlineMenu className="size-12 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" onClick={handleMenuClick} />
                        </>
                    ) : (
                        <>
                            <a href="#home"><video src={"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4"} autoPlay loop muted className="h-[80px] mb-2" />
                            </a>
                            <div id="icons-container" className="flex flex-row">
                                <a target="_blank" href="mailto:thehousethatshadowsbuilt@gmail.com"><MdOutlineEmail className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                                <a target="_blank" href="https://www.instagram.com/thehousethatshadowsbuilt/"><FaInstagram className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                                <a target="_blank " href="https://mastodon.social/@thehousethatshadowsbuilt"><FaMastodon className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                            </div>
                            <MdOutlineMenu className="size-12 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" onClick={handleMenuClick} />
                        </>
                    )}
                </div>
            ) : (
                <div className="w-full h-[80px] flex flex-row position: fixed top-0 bg-black items-center justify-between pl-[30px] pt-8 pb-6 z-40 font-serif tracking-widest">
                    <a href="#home"><video src={"https://res.cloudinary.com/dl14zept9/video/upload/v1713180271/Glitch_Logo_Animation_transparent_as8gjp.mp4"} autoPlay loop muted className="h-[60px] mb-2" />
                    </a>
                    <a href={'#about'} className="text-white hover:text-red-600 hover:underline underline-offset-8">ABOUT</a>
                    <a href={'#listen'} className="text-white hover:text-red-600 hover:underline underline-offset-8">LISTEN</a>
                    <a href={'#episodes'} className="text-white hover:text-red-600 hover:underline underline-offset-8">READ</a>
                    <div id="icons-container" className="flex flex-row">
                        <a target="_blank" href="mailto:thehousethatshadowsbuilt@gmail.com"><MdOutlineEmail className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                        <a target="_blank" href="https://www.instagram.com/thehousethatshadowsbuilt/"><FaInstagram className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                        <a target="_blank " href="https://mastodon.social/@thehousethatshadowsbuilt"><FaMastodon className="size-6 mx-5 mb-3 cursor-pointer fill-white hover:fill-red-600" /></a>
                    </div>
                </div>
            )}
        </>
    )
}