interface TypographyProps {
  text: string
  className?: string
  ref?: any
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
  size?:
    | "small"
    | "regular"
    | "large"
    | "subtitle"
    | "title"
    | "heading"
    | "insight"
}

export default function Typography({
  text,
  className = "",
  weight = "thin",
  size = "small",
  ref,
}: TypographyProps) {
  const weightClasses = [
    {
      key: "thin",
      class: "font-thin",
    },
    {
      key: "extralight",
      class: "font-extralight",
    },
    {
      key: "light",
      class: "font-light",
    },
    {
      key: "medium",
      class: "font-medium",
    },
    {
      key: "semibold",
      class: "font-semibold",
    },
    {
      key: "bold",
      class: "font-bold",
    },
    {
      key: "extrabold",
      class: "font-extrabold",
    },
    {
      key: "black",
      class: "font-black",
    },
  ]

  const sizeClasses = [
    {
      key: "small",
      class: "text-xs",
    },
    {
      key: "small",
      class: "text-xs",
    },
    {
      key: "regular",
      class: "text-sm",
    },
    {
      key: "large",
      class: "text-base lg:text-lg",
    },
    {
      key: "subtitle",
      class: "text-lg lg:text-xl",
    },
    {
      key: "title",
      class: "text-xl md:text-2xl lg:text-3xl",
    },
    {
      key: "heading",
      class: "text-3xl md:text-4xl lg:text-5xl",
    },
    {
      key: "insight",
      class: "text-4xl md:text-[40px] lg:text-[56px] lg:leading-[64px]",
    },
  ]

  const fontClasses = [
    weightClasses?.find((item) => item?.key === weight)?.class,
    sizeClasses?.find((item) => item?.key === size)?.class,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <p
      ref={ref}
      className={fontClasses}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
