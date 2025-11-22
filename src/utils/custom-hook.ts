import { useEffect, useRef, useState } from "react"

export const useVisibility = (ref: any, offsetTop = window.innerHeight) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect =
          typeof ref.current.getBoundingClientRect === "function" &&
          ref.current?.getBoundingClientRect()
        setIsVisible(rect.top <= offsetTop)
      }
    }

    setIsVisible(
      ref?.current
        ? typeof ref.current.getBoundingClientRect === "function" &&
            ref.current.getBoundingClientRect().top < window.innerHeight + 200
        : false
    )

    document
      .getElementById("content-container")
      ?.addEventListener("scroll", handleScroll)

    return () => {
      document
        .getElementById("content-container")
        ?.addEventListener("scroll", handleScroll)
    }
  }, [ref, offsetTop])

  return isVisible
}

export const useScrollToElement = () => {
  const targetRef: any = useRef(null)

  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      })

      window.scrollBy(0, 2000)
    }
  }

  return [targetRef, scrollToElement]
}
