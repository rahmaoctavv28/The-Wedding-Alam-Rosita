import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"

const INVITEES = [
  "Kel. (Alm) Awang Wiangsih & (Alm) Kasriyo",
  "Walia Wahamsyah (Ketua PAC Cinambo)",
  "Lilis Sugiarni",
  "Anindha Yanti (Neng)",
  "Listya Ayu Intan Pratama",
  "Rizky Nugraha (Bendahara PAC)",
]

export default function ContentAlsoInvitedComponent() {
  const titleRef: any = useRef(null)
  const alsoInvitedRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isAlsoInvitedVisibility = useVisibility(alsoInvitedRef)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20 pt-20">
        <div ref={titleRef} className="px-4">
          <Typography
            size="regular"
            weight="bold"
            text="Turut Mengundang"
            className={`text-center transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div
          ref={alsoInvitedRef}
          className={`mt-2 transition-all duration-1000 ease-in-out ${
            isAlsoInvitedVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          {INVITEES?.map((name, index) => (
            <Typography
              key={index}
              size="small"
              weight="medium"
              text={name}
              className="text-secondary text-center"
            />
          ))}
        </div>
      </div>
    </ContentLayout>
  )
}
