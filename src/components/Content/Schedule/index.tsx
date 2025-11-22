import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import CustomButton from "../../_shared/Form/CustomButton"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const LATITUDE = -6.939774
const LONGITUDE = 107.691494

export default function ContentScheduleComponent() {
  const titleRef: any = useRef(null)
  const contentRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isContentVisibility = useVisibility(contentRef)

  const googleMapsUrl = `https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}`

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20">
        <div ref={titleRef} className="px-8">
          <Typography
            size="heading"
            weight="bold"
            text="Acara"
            className={`text-secondary text-center font-dancingScript transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
          <Typography
            size="small"
            weight="extralight"
            text="Kami bermaksud untuk mengundang saudara/(i) dalam acara pernikahan kami pada:"
            className={`text-center mt-1 transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div
          ref={contentRef}
          className={`mt-12 transition-all duration-1000 ease-in-out ${
            isContentVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center">
            <Typography
              size="large"
              weight="bold"
              text="Akad Nikah & Resepsi"
            />
            <Typography
              size="regular"
              weight="medium"
              text="Sabtu, 27 Januari 2024"
              className="text-secondary"
            />
            <Typography size="regular" weight="medium" text="10.00 s/d 15.00" />
          </div>
          <div className="flex flex-col items-center mt-4">
            <Typography
              size="small"
              weight="medium"
              text="Babakan Pangulu RT03/RW06 Kel. Babakan Penghulu Kecamatan Cinambo"
              className="text-center"
            />
            <Link
              to={googleMapsUrl}
              target="blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <CustomButton
                type="button"
                primary
                small
                text={"Navigasi Map"}
                icon={<FaMapMarkerAlt className="fill-primary" />}
                left
              />
            </Link>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
