type Props={
    isAvaliable:boolean
}
export function BookStatus(props:Props){

    return (
        <span className={`bookstatus ${props.isAvaliable? " available":" unavailable"}`}>
            {props.isAvaliable?"Available":"Unavailable"}
        </span>
    )
}