type Props={
    isAvaliable:boolean
}
export function BookStatus(props:Props){

    return (
        <span className={`bookstatus ${props.isAvaliable? " ":" red"}`}>
            {props.isAvaliable?"Available":"Unavailable"}
        </span>
    )
}