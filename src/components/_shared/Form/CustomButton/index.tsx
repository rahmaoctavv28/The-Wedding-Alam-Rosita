import { CustomButtonInterface } from "../../../../interfaces"

export default function CustomButton({
  text,
  icon,
  right,
  left,
  onClick,
  primary,
  secondary,
  small,
  medium,
  large,
  type,
  className,
  textClassName,
  disabled,
  ...props
}: CustomButtonInterface) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`flex items-center justify-center gap-2 font-bold rounded px-4 border py-2 cursor-pointer ${
          small
            ? "text-xs"
            : medium
            ? "text-sm"
            : large
            ? "text-base"
            : "text-xs"
        }
           ${
             primary
               ? "bg-secondary border-secondary text-white hover:bg-btn-secondary-hover"
               : secondary
               ? "bg-white text-secondary hover:bg-neutral-200"
               : disabled
               ? "text-white hover:bg-gray border-gray bg-gray"
               : "bg-secondary border-secondary text-white hover:bg-btn-secondary-hover"
           }  ${className}`}
        onClick={onClick}
        {...props}
      >
        <span
          className={`${
            primary ? "text-white" : secondary ? "text-primary" : "text-white"
          }`}
        >
          {left ? icon : <></>}
        </span>
        <span
          className={`${
            primary
              ? "text-white"
              : secondary
              ? "text-primary"
              : "text-secondary"
          } ${textClassName}`}
        >
          {text ? text : <></>}
        </span>
        <span
          className={`${
            primary ? "text-white" : secondary ? "text-primary" : "text-white"
          }`}
        >
          {right ? icon : <></>}
        </span>
      </button>
    </>
  )
}
