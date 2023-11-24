import { useState } from "react"
import { Book } from "../../../types/Book"
import { Item } from "../../../types/Item"
import { User } from "../../../types/User"
import { BookTableItem } from "./book/BookTableItem"
import { UserTableItem } from "./user/UserTableItem"

type Props={
    item:Item
}

function onClick(id:string,type:string){
    alert("clicked "+type+" "+id+"")
}
export function TableItem(props:Props){
    const [id,setId]=useState(props.item.id)
    const [type,setType]=useState(props.item.type)
    
    return (
        <tr onClick={()=>onClick(id,type)}>
            {props.item.type==="book"&& (<BookTableItem item={props.item as Book}/>)}
            {props.item.type==="user"&& (<UserTableItem item={props.item as User}/>)}
        </tr>
    )
}