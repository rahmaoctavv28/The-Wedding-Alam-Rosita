export interface TypographyInterface {
    text?: any,
    className?: string,
    thin?: boolean,
    extralight?: boolean,
    light?: boolean,
    medium?: boolean,
    semibold?: boolean,
    bold?: boolean,
    extrabold?: boolean,
    black?: boolean,
}

export interface CustomButtonInterface {
    text: any,
    icon?: any,
    left?: boolean,
    right?: boolean,
    onClick?: () => void,
    primary?: boolean | null,
    secondary?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    type: "submit" | "button" | "reset",
    className?: string,
    textClassName?: string,
    disabled?: boolean
}