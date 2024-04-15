
import Player from "../ui/player";
import ListenButtons from "../ui/listenButtons";
import Image from "next/image";
import logo from '../assets/logo.png';
import kino1 from '../assets/kino1.webp';
import kino2 from '../assets/kino2.webp';
import RSS from '../assets/buttons/RSS.svg';
import './page.css';

export default function Page() {
  return (
    <main className="h-screen overflow-y-scroll pt-10">
        <section id="home" className="h-screen w-full flex flex-row items-center justify-end text-2xl leading-loose p-4 bg-black relative">
          <div id="image-logo-wrapper" className="flex relative bg-black">
            <Image src={kino1} alt="abadoned-cinema" className="brightness-50 mb-24" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: '50%' }}>
              <div className="mx-16 mb-24 flex flex-col">
                <Image src={logo} alt="logo" className="z-20" />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col mr-40 items-center p-8 bg-black">
            <p className="text-white text-3xl mb-10 w-full font-mono">
              A six part fiction podcast with an original <span className="text-red-600"> soundtrack.</span>
            </p>
            <div className="flex justify-evenly">
              <p className="text-white text-sm">Written & read by Joe Copplestone. Scored by <a target="_blank" href="https://www.alixlhoumeau.com/" className="hover:text-red-600 hover:cursor-pointer">Alix Lhoumeau.</a>
              </p>
            </div>
            <div className="z-10 flex justify-evenly">
              <ListenButtons />
            </div>
          </div>
        </section>
        <section id="about" className="h-screen flex p-4 text-2xl leading-loose relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <video src={'https://res.cloudinary.com/dl14zept9/video/upload/v1713003401/bgkino_gg3emj.mp4'} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover -z-10" />
            <div className="w-2/5 mx-8">
              <strong className="text-red-600 text-3xl">
                In an a nameless city, a nameless narrator lives with their best friend ‘The Chewing Gum Kid’ on the very edge of modern society, squatting in deserted buildings and shoplifting for food.
              </strong>
            </div>
            <div className="w-2/5 mx-8">
              <strong className="text-red-600 text-2xl">
                When the two of them discover and take over an abandoned cinema, we follow their transformation from scavenging outsiders to leaders of an underground counter culture movement but what starts as a radical experiment slowly descends into something much, much, darker...
              </strong>
            </div>
          </div>
        </section>
        <section id="episodes" className="h-screen flex p-4 bg-black text-2xl leading-loose relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/5 mx-8 flex flex-col font-mono it">
              <strong className="text-red-600 text-3xl mb-10 font-serif tracking-widest underline underline-offset-8">
                READ
              </strong>
              <strong className="text-white  hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part One: Mausoleums of The Boom.
              </strong>
              <strong className="text-white hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part Two: The Fatman.
              </strong>
              <strong className="text-white hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part Three: Wall of Tapes.
              </strong>
              <strong className="text-white  hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part Four: The Herd.
              </strong>
              <strong className="text-white hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part Five: The Fear Outside.
              </strong>
              <strong className="text-white  hover:text-red-600 cursor-pointer text-2xl mb-5">
                Part Six: A Slowly Unfolding Apocalypse
              </strong>
            </div>
            <Image src={kino2} alt="abandoned cinema"/>
          </div>
        </section>
        <section id="listen" className="h-screen flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 ">
            <video src={'https://res.cloudinary.com/dl14zept9/video/upload/v1713003417/bgglitch_fflkoh.mp4'} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" disablePictureInPicture />
          </div>
          <div className="relative z-10 w-full">
            <Player />
          </div>
          <a
            target="_blank"
            href="https://feeds.buzzsprout.com/2319717.rss"
            className='flex items-center mt-10'
          >
            <Image src={RSS} alt='RSS logo' className='mx-8 z-10' />
          </a>
          <p className="absolute bottom-0 text-red-600 font-bold">© 2024 The House That Shadows Built</p>
        </section>
    </main>
  );
}
