import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import BCALogo from "../../../../public/images/BCALogo.png"

export default function ContentGiftComponent() {
  const titleRef: any = useRef(null)
  const bankLogoRef: any = useRef(null)
  const firstAccountRef: any = useRef(null)
  const secondAccountRef: any = useRef(null)
  const thirdAccountRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isBankLogoVisibility = useVisibility(bankLogoRef)
  const isFirstAccountVisibility = useVisibility(firstAccountRef)
  const isSecondAccountVisibility = useVisibility(secondAccountRef)
  const isThirdAccountVisibility = useVisibility(thirdAccountRef)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20 pt-12">
        <div ref={titleRef} className="px-8">
          <Typography
            size="subtitle"
            weight="bold"
            text="Cado Cashless"
            className={`text-secondary text-center font-dancingScript transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
          <Typography
            size="small"
            weight="extralight"
            text="Anda dapat mengirimkan kado cashless:"
            className={`text-center mt-1 hidden md:block transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div
          ref={bankLogoRef}
          className={`mt-8 flex flex-col items-center transition-all duration-1000 ease-in-out ${
            isBankLogoVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          <img
            src={BCALogo}
            alt="Bank BCA"
            className="w-6/12 lg:w-5/12 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
          <div
            ref={firstAccountRef}
            className={`flex flex-col items-center lg:me-4 transition-all duration-1000 ease-in-out ${
              isFirstAccountVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          >
            <Typography size="regular" weight="bold" text="Atas Nama" />
            <Typography
              size="regular"
              weight="medium"
              text="Alam Saputra"
              className="text-secondary"
            />
            <Typography size="regular" weight="bold" text="Nomor Rekening" />
            <Typography
              size="regular"
              weight="medium"
              text="2833299565"
              className="text-secondary"
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
