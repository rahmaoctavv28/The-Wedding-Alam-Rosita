import { useRef } from "react"
import ContentLayout from "../../../layouts/Content"
import Typography from "../../_shared/Typography"
import { useVisibility } from "../../../utils/custom-hook"

export default function ContentQuranComponent() {
  const verseRef: any = useRef(null)
  const meaningRef: any = useRef(null)
  const surahRef: any = useRef(null)

  const isVerseVisibility = useVisibility(verseRef)
  const isMeaningVisibility = useVisibility(
    meaningRef,
    window.innerHeight - 200
  )
  const isSurahVisibility = useVisibility(surahRef, window.innerHeight - 200)

  return (
    <ContentLayout>
      <div className="flex flex-col items-center px-12 lg:px-20 pt-24">
        <div ref={verseRef}>
          <Typography
            size="regular"
            weight="bold"
            text="وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ"
            className={`text-secondary text-center transition-all duration-1000 ease-in-out ${
              isVerseVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div ref={meaningRef}>
          <Typography
            size="regular"
            weight="medium"
            text="Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
            className={`text-secondary text-center mt-4 italic transition-all duration-1000 ease-in-out ${
              isMeaningVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
        <div ref={surahRef}>
          <Typography
            size="regular"
            weight="extrabold"
            text="Ar Rum: 21"
            className={`text-secondary text-center mt-4 transition-all duration-1000 ease-in-out ${
              isSurahVisibility
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0"
            }`}
          />
        </div>
      </div>
    </ContentLayout>
  )
}
