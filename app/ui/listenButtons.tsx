import Image from 'next/image';
import AppleLight from '../assets/buttons/Apple Podcasts.svg'
import AmazonLight from '../assets/buttons/Amazon Music.svg'
import SpotifyLight from '../assets/buttons/Spotify light.svg'

export default function ListenButtons() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly w-[600px] mt-10">
            <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/the-house-that-shadows-built/id1740729197"
                className='flex items-center mb-2 md:mb-0'
            >
                <Image src={AppleLight} alt='Apple podcasts logo' className='mx-8' />
            </a>
            <a
                target="_blank"
                href="https://open.spotify.com/show/13AmpupQwdaiylS4PuhtUc"
                className='flex items-center mb-2 md:mb-0'
            >
                <Image src={SpotifyLight} alt='Spotify logo' className='mx-8' />
            </a>
            <a
                target="_blank"
                href="https://music.amazon.de/podcasts/b530d239-08ba-4918-a3fb-b6a436cbd292/the-house-that-shadows-built"
                className='flex items-center mb-2 md:mb-0'
            >
                <Image src={AmazonLight} alt='Amazon Music logo' className='mx-8' />
            </a>
        </div>
    );
}
