import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import CustomButton from "../../_shared/Form/CustomButton"
import FilterThumbnail from "../../../../public/images/FilterIG.png"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function ContentFilterComponent() {
  const titleRef: any = useRef(null)
  const thumbnailRef: any = useRef(null)
  const buttonRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isThumbnailVisibility = useVisibility(thumbnailRef)
  const isButtonVisibility = useVisibility(buttonRef)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20 pt-20">
        <div ref={titleRef} className="px-4">
          <Typography
            size="title"
            weight="bold"
            text="this is filter you can use during my wedding day"
            className={`text-secondary text-center font-dancingScript transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <img
          ref={thumbnailRef}
          src={FilterThumbnail}
          alt="IG STORY Filter"
          className={`w-6/12 mt-8 transition-all duration-1000 ease-in-out ${
            isThumbnailVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        />
        <div
          ref={buttonRef}
          className={`mt-8 transition-all duration-1000 ease-in-out ${
            isButtonVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          <Link
            to={"https://www.instagram.com/ar/340993285413738"}
            target="blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              type="button"
              small
              primary
              text={"Buka Instagram Filter"}
              icon={<FaInstagram className="fill-primary" />}
              left
            />
          </Link>
        </div>
      </div>
    </ContentLayout>
  )
}
