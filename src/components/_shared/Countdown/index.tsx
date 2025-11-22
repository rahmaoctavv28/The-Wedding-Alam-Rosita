import { useState, useEffect } from "react"
import Typography from "../Typography"

const CountdownTimer = () => {
  const targetTime = new Date("2024-01-27T23:59:59").getTime()

  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number.toString()
  }

  const calculateTimeRemaining = () => {
    const now = new Date().getTime()
    const difference = targetTime - now

    if (difference <= 0) {
      setTimeRemaining({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      })
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeRemaining({
        days: formatNumber(days),
        hours: formatNumber(hours),
        minutes: formatNumber(minutes),
        seconds: formatNumber(seconds),
      })
    }
  }

  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const timerInterval = setInterval(() => {
      calculateTimeRemaining()
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  return (
    <div className="flex items-center">
      <div className="me-1">
        <Typography
          size="regular"
          weight="semibold"
          text={`${timeRemaining.days}`}
          className="bg-secondary rounded-full text-primary text-center px-2 py-1"
        />
        <Typography size="regular" weight="semibold" text={`Hari`} />
      </div>
      <div className="me-1">
        <Typography
          size="regular"
          weight="semibold"
          text={`${timeRemaining.hours}`}
          className="bg-secondary rounded-full text-primary text-center px-2 py-1"
        />
        <Typography size="regular" weight="semibold" text={`Jam`} />
      </div>
      <div className="me-1">
        <Typography
          size="regular"
          weight="semibold"
          text={`${timeRemaining.minutes}`}
          className="bg-secondary rounded-full text-primary text-center px-2 py-1"
        />
        <Typography size="regular" weight="semibold" text={`Menit`} />
      </div>
      <div className="me-1">
        <Typography
          size="regular"
          weight="semibold"
          text={`${timeRemaining.seconds}`}
          className="bg-secondary rounded-full text-primary text-center px-2 py-1"
        />
        <Typography size="regular" weight="semibold" text={`Detik`} />
      </div>
    </div>
  )
}

export default CountdownTimer
