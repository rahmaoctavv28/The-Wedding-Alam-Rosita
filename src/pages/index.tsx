import { useState } from "react"
import CoverComponent from "../components/Cover"
import BeautifulInWhite from "../../public/audios/BeautifulInWhiteCover.mp3"
import ContentComponent from "../components/Content"
import { TbMusic, TbMusicOff } from "react-icons/tb"

export default function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="bg-primary min-h-screen relative">
      <button
        className={`bg-secondary text-primary p-4 text-2xl rounded-full fixed top-5 end-5 md:end-12 md:top-8 z-50`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <TbMusic /> : <TbMusicOff />}
      </button>
      <div className="fixed top-5 end-5 md:end-12 md:top-8 z-50 w-12 overflow-hidden">
        <audio
          id="audio"
          loop
          autoPlay
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="opacity-0"
        >
          <source src={BeautifulInWhite} type="audio/mpeg" />
        </audio>
      </div>
      {!isOpen ? (
        <CoverComponent onOpen={() => setIsOpen(true)} />
      ) : (
        <ContentComponent />
      )}
    </main>
  )
}
