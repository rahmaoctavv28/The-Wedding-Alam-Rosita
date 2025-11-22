import SageGreenTopPicture from "../../../public/images/SageGreenTexture.png"
import SageGreenBottomPicture from "../../../public/images/SageGreenTexture2.png"
import SageFloralTopPicture from "../../../public/images/GreenSageFloral3.png"
import { ReactNode, useRef } from "react"
import { useVisibility } from "../../utils/custom-hook"

interface ContentLayoutProps {
  children: ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  const containerRef: any = useRef(null)
  const sageTopRef: any = useRef(null)
  const sageBottomRef: any = useRef(null)

  const isContainerVisibility = useVisibility(
    containerRef,
    window.innerHeight + 400
  )
  const isSageTopVisibility = useVisibility(sageTopRef)
  const isSageBottomVisibility = useVisibility(
    sageBottomRef,
    window.innerHeight - 550
  )

  return (
    <div
      ref={containerRef}
      className={`w-11/12 md:w-8/12 lg:w-5/12 bg-white rounded relative min-h-[calc(100vh-2rem)] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] overflow-hidden my-6 transition-all duration-1000 ease-in-out ${
        isContainerVisibility
          ? " translate-y-0 opacity-100"
          : " translate-y-full opacity-0"
      }`}
    >
      <div
        ref={sageTopRef}
        className={`absolute top-0 start-0 w-11/12 md:w-8/12 lg:w-6/12 transition-all duration-1000 ease-in-out ${
          isSageTopVisibility ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={SageGreenTopPicture} alt="Sage Texture" />
      </div>
      <div
        className={`absolute bottom-0 end-0 w-10/12 md:w-8/12 lg:w-6/12 transition-all duration-1000 ease-in-out ${
          isSageBottomVisibility
            ? " translate-y-0 opacity-100"
            : " translate-y-full opacity-0"
        }`}
      >
        <img src={SageGreenBottomPicture} alt="Sage Texture" />
      </div>
      <div
        ref={sageBottomRef}
        className={`absolute -top-5 -start-10 w-10/12 md:w-8/12 lg:w-6/12 transition-all duration-1000 ease-in-out ${
          isSageTopVisibility ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={SageFloralTopPicture} alt="Sage Flower" />
      </div>
      <div className="w-full z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {children}
      </div>
    </div>
  )
}
