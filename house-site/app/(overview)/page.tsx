import Player from "../ui/player";
import Image from "next/image";
import logo from '../assets/logo.png';
import bigimage from '../assets/bigimage.webp'
import './page.css';


export default function Page() {
  return (
    <div className="h-screen overflow-y-scroll pt-10">
      <section className="h-screen w-full flex items-center justify-end text-2xl leading-loose p-4 bg-black relative">
        <div className="flex flex-row relative">
          <Image src={bigimage} alt="abadoned-cinema" className="brightness-50"></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: '43%' }}>
            <div className="w-1/3 mx-20">
              <Image src={logo} alt="logo" />
            </div>
          </div>
          <div className="w-1/3 flex flex-col mr-40 items-center justify-center p-8">
            <p className="text-red-600 text-3xl">
              A six part fiction podcast with an original soundtrack.
            </p>
            <button className="dark-button w-[250px] h-[70px]">Subscribe</button>
          </div>
        </div>
      </section>
      <section className="h-screen flex p-4 text-2xl leading-loose relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <video src={'https://res.cloudinary.com/dl14zept9/video/upload/v1713003401/bgkino_gg3emj.mp4'} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
      <section id="about" className="h-screen flex items-center justify-center p-4 leading-loose">
        <div className="w-2/5 mx-8">
          <strong className="text-red-600 text-3xl">
            In an a nameless city, a nameless narrator lives with their best friend ‘The Chewing Gum Kid’ on the very edge of modern society, squatting in deserted buildings and shoplifting for food.
          </strong>
        </div>
        <div className="w-2/5 mx-8">
          <p className="text-red-600 text-2xl">
            When the two of them discover and take over an abandoned cinema, we follow their transformation from scavenging outsiders to leaders of an underground counter culture movement but what starts as a radical experiment slowly descends into something much, much, darker...
          </p>
        </div>
      </section>
      <section id="listen" className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 ">
          <video src={'https://res.cloudinary.com/dl14zept9/video/upload/v1713003417/bgglitch_fflkoh.mp4'} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" disablePictureInPicture />
        </div>
        <div className="relative z-10 w-full">
          <Player />
        </div>
        <p className="absolute bottom-0 text-red-600">© 2024 The House That Shadows Built</p>
      </section>
    </div>
  );
}
