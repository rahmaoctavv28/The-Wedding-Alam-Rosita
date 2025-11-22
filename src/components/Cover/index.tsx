import { useSearchParams } from "react-router-dom"
import SageFloralTopPicture from "../../../public/images/GreenSageFloral.png"
import SageFloralBottomPicture from "../../../public/images/GreenSageFloral2.png"
import SageGreenTopPicture from "../../../public/images/SageGreenTexture.png"
import SageGreenBottomPicture from "../../../public/images/SageGreenTexture2.png"
import CustomButton from "../_shared/Form/CustomButton"
import Typography from "../_shared/Typography"
import { SlEnvolopeLetter } from "react-icons/sl"

interface CoverComponentProps {
  onOpen: () => void
}

export default function CoverComponent({ onOpen }: CoverComponentProps) {
  const [searchParams] = useSearchParams()
  const receiver = searchParams.get("to") || ""

  return (
    <div className="w-screen h-screen relative bg-white">
      <div className="absolute top-0 start-0 w-10/12 md:w-8/12 lg:w-5/12">
        <img src={SageGreenTopPicture} alt="Sage Texture" />
      </div>
      <div className="absolute bottom-0 end-0 w-10/12 md:w-8/12 lg:w-5/12">
        <img src={SageGreenBottomPicture} alt="Sage Texture" />
      </div>
      <div className="absolute top-0 end-0 w-8/12 lg:w-4/12">
        <img src={SageFloralTopPicture} alt="Sage Flower" />
      </div>
      <div className="absolute bottom-0 start-0 w-8/12 lg:w-4/12">
        <img src={SageFloralBottomPicture} alt="Sage Flower" />
      </div>
      <div className="w-full z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Typography
          size="subtitle"
          weight="thin"
          text="Undangan Pernikahan"
          className="md:font-medium lg:font-thin"
        />
        <div className="mt-8 flex flex-col items-center">
          <Typography
            weight="medium"
            size="insight"
            text="Ima"
            className="font-dancingScript text-5xl"
          />
          <Typography
            weight="medium"
            size="insight"
            text="&"
            className="font-dancingScript my-4 text-5xl"
          />
          <Typography
            weight="medium"
            size="insight"
            text="Agus"
            className="font-dancingScript text-5xl"
          />
        </div>
        <div className="flex items-center mt-20">
          <Typography size="subtitle" weight="medium" text="Sabtu" />
          <span className="h-16 lg:h-20 w-[2px] bg-black mx-4" />
          <div className="text-center">
            <Typography
              size="insight"
              weight="semibold"
              text="27"
              className="text-secondary"
            />
            <Typography size="subtitle" weight="medium" text="Januari" />
          </div>
          <span className="h-16 lg:h-20 w-[2px] bg-black mx-4" />
          <Typography size="subtitle" weight="medium" text="2024" />
        </div>
        <Typography
          size="regular"
          weight="medium"
          text="Kepada Yth:"
          className="mt-12"
        />
        <Typography
          size="subtitle"
          weight="medium"
          text={receiver}
          className="text-secondary"
        />
        <CustomButton
          type="button"
          medium
          primary
          text={"Buka Undangan"}
          className="mt-4"
          icon={<SlEnvolopeLetter className="fill-primary" />}
          left
          onClick={onOpen}
        />
      </div>
    </div>
  )
}
