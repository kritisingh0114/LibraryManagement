import { useState } from "react"
import { Book } from "../../../types/Book"
import { Item } from "../../../types/Item"
import { User } from "../../../types/User"
import { BookTableItem } from "./book/BookTableItem"
import { UserTableItem } from "./user/UserTableItem"
import { ContentType } from "../../../types/ContentType"

type Props={
    item:Item
}

export function TableItem(props:Props){
    
    function onClick(id:string,type:string){
        alert("clicked "+type+" "+id+"")
    }
    return (
        <tr onClick={()=>onClick(props.item.id,props.item.type)}>
            {props.item.type===ContentType.BOOK&& (<BookTableItem item={props.item as Book}/>)}
            {props.item.type===ContentType.USER&& (<UserTableItem item={props.item as User}/>)}
        </tr>
    )
}