import ContentLayout from "../../../layouts/Content"
import CountdownTimer from "../../_shared/Countdown"
import Typography from "../../_shared/Typography"

export default function ContentCoverComponent() {
  return (
    <ContentLayout>
      <div className="flex flex-col items-center">
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
            text="Rosita"
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
            text="Alam"
            className="font-dancingScript text-5xl"
          />
        </div>
        <div className="mt-16 flex flex-col items-center">
          <Typography size="large" weight="medium" text="Minggu" />
          <div className="grid grid-cols-5 place-items-center">
            <Typography size="regular" weight="medium" text="30" />
            <span className="w-1 h-1 rounded-full bg-black" />
            <Typography size="regular" weight="medium" text="11" />
            <span className="w-1 h-1 rounded-full bg-black" />
            <Typography size="regular" weight="medium" text="2025" />
          </div>
        </div>
        <div className="mt-8">
          <CountdownTimer />
        </div>
      </div>
    </ContentLayout>
  )
}
