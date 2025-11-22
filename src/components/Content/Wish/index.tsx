import { useRef, useState } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"
import CustomButton from "../../_shared/Form/CustomButton"

const BRIDE_NAME = "Rosita Celsi"
const GROOM_NAME = "Alam Saputra"
const PHONE_NUMBER = "+62881025268884"

export default function ContentWishComponent() {
  const titleRef: any = useRef(null)
  const formRef: any = useRef(null)

  const isTitleVisibility = useVisibility(titleRef)
  const isFormVisibility = useVisibility(formRef)

  const [formData, setFormData] = useState({
    name: "",
    wish: "",
  })

  const weddingMessage = `
  *Ucapan & Doa untuk Kedua Mempelai:*
  "${formData.wish}"

  _Selamat & Terima kasih kepada kedua mempelai ${BRIDE_NAME} dan ${GROOM_NAME}, telah mengundang kami menjadi bagian dari momen istimewa ini. Semoga rumah tangga kalian selalu dipenuhi dengan cinta dan kedamaian._

  *Tanda Tangan:*
  ${formData.name}
`

  const sendMessageToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      weddingMessage
    )}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20">
        <div ref={titleRef} className="px-8">
          <Typography
            size="heading"
            weight="bold"
            text="Ucapan & Doa"
            className={`text-secondary text-center font-dancingScript transition-all duration-1000 ease-in-out ${
              isTitleVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <form
          ref={formRef}
          onSubmit={sendMessageToWhatsApp}
          className={`mt-8 w-full flex flex-col items-center transition-all duration-1000 ease-in-out ${
            isFormVisibility
              ? " translate-y-0 opacity-100"
              : " translate-y-full opacity-0"
          }`}
        >
          <input
            type="text"
            name="name"
            className="bg-primary w-full border-none outline-none px-4 py-1 rounded-md"
            required
            placeholder="Nama Kamu"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <textarea
            name="wish"
            placeholder="Tulis Ucapan & Doa"
            className="bg-primary w-full border-none outline-none px-4 py-1 rounded-md mt-2"
            required
            rows={5}
            onChange={(e) => setFormData({ ...formData, wish: e.target.value })}
            value={formData.wish}
          />
          <CustomButton
            small
            primary
            type="submit"
            text={"Kirim Ucapan"}
            className="w-full mt-2"
          />
        </form>
      </div>
    </ContentLayout>
  )
}
