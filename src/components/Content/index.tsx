import { useScrollToElement } from "../../utils/custom-hook"
import Typography from "../_shared/Typography"
import ContentBrideComponent from "./Bride"
import ContentClosingComponent from "./Closing"
import ContentCoverComponent from "./Cover"
import ContentFilterComponent from "./Filter"
import ContentGalleryComponent from "./Gallery"
import ContentGiftComponent from "./Gift"
import ContentQuranComponent from "./Quran"
import ContentScheduleComponent from "./Schedule"
import ContentWishComponent from "./Wish"
import { RiDeviceRecoverFill } from "react-icons/ri"
import { GiSelfLove } from "react-icons/gi"
import { GrGallery } from "react-icons/gr"
import { IoIosGift } from "react-icons/io"
import { IoChatbubbleEllipses } from "react-icons/io5"
import { useEffect, useState } from "react"

export default function ContentComponent() {
  const [coverRef, scrollToCover] = useScrollToElement()
  const [detailRef, scrollToDetail] = useScrollToElement()
  const [galleryRef, scrollToGallery] = useScrollToElement()
  const [giftRef, scrollToGift] = useScrollToElement()
  const [wishRef, scrollToWish] = useScrollToElement()

  const [activeSection, setActiveSection] = useState<string | null>(null)

  const NAVIGATIONS = [
    {
      icon: <RiDeviceRecoverFill />,
      to: scrollToCover,
      key: "cover",
    },
    {
      icon: <GiSelfLove />,
      to: scrollToDetail,
      key: "detail",
    },
    {
      icon: <GrGallery />,
      to: scrollToGallery,
      key: "gallery",
    },
    {
      icon: <IoIosGift />,
      to: scrollToGift,
      key: "gift",
    },
    {
      icon: <IoChatbubbleEllipses />,
      to: scrollToWish,
      key: "wish",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionRefs = {
        cover: coverRef.current,
        detail: detailRef.current,
        gallery: galleryRef.current,
        gift: giftRef.current,
        wish: wishRef.current,
      }

      let activeSection = null

      for (const [section, ref] of Object.entries(sectionRefs)) {
        const position = ref.getBoundingClientRect().top

        if (
          position <= 0 &&
          position > -1000 &&
          (section === "cover" || section === "detail" || section === "wish")
        ) {
          activeSection = section
          break
        }
        if (position <= 200 && position > -400) {
          activeSection = section
          break
        }
      }

      setActiveSection(activeSection)
    }

    document
      ?.getElementById("content-container")
      ?.addEventListener("scroll", handleScroll)

    return () => {
      document
        ?.getElementById("content-container")
        ?.removeEventListener("scroll", handleScroll)
    }
  }, [coverRef, detailRef, galleryRef, giftRef, wishRef])

  return (
    <div
      id="content-container"
      className="w-screen min-h-screen max-h-screen flex flex-col items-center overflow-y-auto pb-20 lg:pb-10"
    >
      <div ref={coverRef} className="flex flex-col items-center w-full">
        <ContentCoverComponent />
        <ContentQuranComponent />
      </div>
      <div ref={detailRef} className="flex flex-col items-center w-full">
        <ContentBrideComponent />
        <ContentScheduleComponent />
      </div>
      <div ref={galleryRef} className="flex flex-col items-center w-full">
        <ContentGalleryComponent />
      </div>
      <div ref={giftRef} className="flex flex-col items-center w-full">
        <ContentGiftComponent />
      </div>
      <div ref={wishRef} className="flex flex-col items-center w-full">
        <ContentWishComponent />
        <ContentFilterComponent />
        <ContentClosingComponent />
      </div>
      <Typography
        size="small"
        weight="semibold"
        text={`&copy;${new Date().getFullYear()}. All Right Reserved. <a href="https://instagram.com/taufiksmail_" target="blank">Taufik Ismail</a>`}
        className="mt-8"
      />
      <div className="flex md:flex-col items-center fixed bottom-0 md:bottom-1/4 md:start-0 bg-white rounded-tl-xl rounded-tr-xl md:rounded-tl-none md:rounded-br-xl px-8 md:px-2 py-2 md:py-8 border border-secondary">
        {NAVIGATIONS.map((nav, index) => (
          <button
            key={index}
            className={`text-sm mx-2 md:mx-0 md:my-2 p-2 rounded-lg ${
              activeSection === nav.key
                ? "text-primary bg-secondary"
                : "text-secondary"
            }`}
            onClick={nav.to}
          >
            {nav.icon}
          </button>
        ))}
      </div>
    </div>
  )
}
