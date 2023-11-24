import { useState } from "react"
import { Item } from "../../../types/Item"

type Props={
    item:Item
}
export function GridItem(props:Props){
    const [id,setId]=useState(props.item.id)
    const [type,setType]=useState(props.item.type)

    return (<div>
        <img src={props.item.imageUrl}></img>
        <b>{props.item.name}</b>
    </div>)
}