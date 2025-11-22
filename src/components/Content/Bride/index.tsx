import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import ImaFoto from "../../../../public/images/ima.jpg"
import AgusFoto from "../../../../public/images/agus.jpg"

export default function ContentBrideComponent() {
  const messageOpeningRef: any = useRef(null)
  const brideAvatarRef: any = useRef(null)
  const groomAvatarRef: any = useRef(null)
  const brideNameRef: any = useRef(null)
  const groomNameRef: any = useRef(null)
  const ampersandRef: any = useRef(null)

  const isMessageOpeningVisibility = useVisibility(messageOpeningRef)
  const isBrideAvatarVisibility = useVisibility(brideAvatarRef)
  const isGroomAvatarVisibility = useVisibility(groomAvatarRef)
  const isBrideNameVisibility = useVisibility(brideNameRef)
  const isGroomNameVisibility = useVisibility(groomNameRef)
  const isAmpersandVisibility = useVisibility(ampersandRef)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-10 lg:px-20 pt-16 lg:pt-0">
        <div ref={messageOpeningRef} className="px-2 lg:px-20">
          <Typography
            size="small"
            weight="bold"
            text="بسم الله الرحمن الرحيم"
            className={`text-secondary text-center transition-all duration-1000 ease-in-out ${
              isMessageOpeningVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
          <Typography
            size="small"
            weight="medium"
            text="Kami mohon do'a & restunya atas pernikahan kami"
            className={`text-secondary text-center mt-4 transition-all duration-1000 ease-in-out ${
              isMessageOpeningVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-col items-center">
            <div
              ref={brideAvatarRef}
              className={`w-24 h-24 p-1 overflow-hidden bg-secondary rounded-full transition-all duration-1000 ease-in-out ${
                isBrideAvatarVisibility
                  ? " translate-y-0 opacity-100"
                  : " translate-y-full opacity-0"
              }`}
            >
              <img src={ImaFoto} alt="Ima" className="rounded-full" />
            </div>
            <div ref={brideNameRef}>
              <Typography
                size="title"
                weight="medium"
                text="Ima Putri Yulianto"
                className={`text-secondary text-center mt-4 font-dancingScript transition-all duration-1000 ease-in-out ${
                  isBrideNameVisibility
                    ? " translate-y-0 opacity-100"
                    : " translate-y-full opacity-0"
                }`}
              />
              <Typography
                size="small"
                weight="thin"
                text="Putri Bpk. Eko Yulianto & Ibu Yanti Ristianti"
                className={` text-center transition-all duration-1000 ease-in-out ${
                  isBrideNameVisibility
                    ? " translate-y-0 opacity-100"
                    : " translate-y-full opacity-0"
                }`}
              />
            </div>
          </div>
          <div ref={ampersandRef}>
            <Typography
              size="heading"
              weight="medium"
              text="&"
              className={`text-secondary text-center my-4 font-dancingScript transition-all duration-1000 ease-in-out ${
                isAmpersandVisibility
                  ? " translate-y-0 opacity-100"
                  : " translate-y-full opacity-0"
              }`}
            />
          </div>
          <div className="flex flex-col items-center">
            <div
              ref={groomAvatarRef}
              className={`w-24 h-24 p-1 overflow-hidden bg-secondary rounded-full transition-all duration-1000 ease-in-out ${
                isGroomAvatarVisibility
                  ? " translate-y-0 opacity-100"
                  : " translate-y-full opacity-0"
              }`}
            >
              <img src={AgusFoto} alt="Agus" className="rounded-full" />
            </div>
            <div ref={groomNameRef}>
              <Typography
                size="title"
                weight="medium"
                text="I Gusti Putu Agus Kesatria Wiguna"
                className={`text-secondary text-center mt-4 font-dancingScript transition-all duration-1000 ease-in-out ${
                  isGroomNameVisibility
                    ? " translate-y-0 opacity-100"
                    : " translate-y-full opacity-0"
                }`}
              />
              <Typography
                size="small"
                weight="thin"
                text="Putra Bpk. I Gusti Ngurah Rai Parwata & Ibu I Gusti Putu Ayu Sri Astini"
                className={` text-center transition-all duration-1000 ease-in-out ${
                  isGroomNameVisibility
                    ? " translate-y-0 opacity-100"
                    : " translate-y-full opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
