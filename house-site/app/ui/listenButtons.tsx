import Image from 'next/image';
import Apple from '../assets/buttons/Apple.svg';
import AppleLight from '../assets/buttons/Apple Podcasts.svg'
import Spotify from '../assets/buttons/Spotify.svg';
import Amazon from '../assets/buttons/Amazon.svg';
import AmazonLight from '../assets/buttons/Amazon Music.svg'
import SpotifyLight from '../assets/buttons/Spotify light.svg'
import RSS from '../assets/buttons/RSS.svg';

export default function ListenButtons() {
    return (
        <div className="flex flex-row justify-evenly w-[600px] mt-10">
            <a
                target="_blank"
                href="YOUR APPLE PODCASTS URL"
                className='flex items-center'
            >
                <Image src={AppleLight} alt='Apple podcasts logo' className='mx-8' />
            </a>
            <a
                target="_blank"
                href="YOUR SPOTIFY URL"
                className='flex items-center'
            >
                <Image src={SpotifyLight} alt='Spotify logo' className='mx-8' />
            </a>
            <a
                target="_blank"
                href="YOUR SPOTIFY URL"
                className='flex items-center'
            >
                <Image src={AmazonLight} alt='Amazon Music logo' className='mx-8' />
            </a>
        </div>
    );
}
