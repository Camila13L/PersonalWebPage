import React, {FC} from "react"
type Props = {
    className: string
    label:string
    onClick: any
}
export const Button: FC<Props> = ({className, label, onClick}) => {
    return(
        <button className={className} onClick={onClick}>{label}</button>
    )
}