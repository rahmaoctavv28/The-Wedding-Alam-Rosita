import { useRef, useState } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import Gallery1 from "../../../../public/images/gallery1.jpg"
import Gallery2 from "../../../../public/images/gallery2.jpg"
import Gallery3 from "../../../../public/images/gallery3.jpg"
import Gallery4 from "../../../../public/images/gallery4.jpg"
import Gallery5 from "../../../../public/images/gallery5.jpg"
import Gallery6 from "../../../../public/images/gallery6.jpg"
import Gallery7 from "../../../../public/images/gallery7.jpg"
import Gallery8 from "../../../../public/images/gallery8.jpg"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const images = [
  {
    src: Gallery1,
  },
  {
    src: Gallery2,
  },
  {
    src: Gallery3,
  },
  {
    src: Gallery4,
  },
  {
    src: Gallery5,
  },
  {
    src: Gallery6,
  },
  {
    src: Gallery7,
  },
  {
    src: Gallery8,
  },
]

export default function ContentGalleryComponent() {
  const titleRef: any = useRef(null)
  const contentRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isContentVisibility = useVisibility(contentRef)

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20 relative">
        <div ref={titleRef} className="mb-8">
          <Typography
            size="heading"
            weight="bold"
            text="Galeri"
            className={`text-secondary text-center font-dancingScript transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div
          ref={contentRef}
          className={`transition-all duration-1000 ease-in-out ${
            isContentVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-center">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-8 mx-1 cursor-pointer rounded border-2 ${
                  index === activeIndex ? "border-secondary" : "border-primary"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={img.src} alt={`Gallery${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="relative w-64 h-96 mt-4 mx-auto rounded-lg overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-full rounded-lg absolute transition-all ease-in-out duration-1000 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={`Gallery${index + 1}`}
                  className="rounded-lg w-64 h-96 object-cover"
                />
              </div>
            ))}
            <div className="absolute top-1/2 start-2 end-2 flex justify-between items-center ">
              <button
                className="rounded-full bg-secondary p-2"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0 ? images.length - 1 : activeIndex - 1
                  )
                }
              >
                <IoIosArrowBack className="fill-primary" />
              </button>
              <button
                className="rounded-full bg-secondary p-2"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === images.length - 1 ? 0 : activeIndex + 1
                  )
                }
              >
                <IoIosArrowForward className="fill-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
