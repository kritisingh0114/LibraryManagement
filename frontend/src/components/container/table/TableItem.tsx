import { useState } from "react"
import { Book } from "../../../types/Book"
import { Item } from "../../../types/Item"
import { User } from "../../../types/User"
import { BookTableItem } from "./book/BookTableItem"
import { UserTableItem } from "./user/UserTableItem"
import { ContentType } from "../../../types/ContentType"
import { Link, useNavigate } from "react-router-dom"

type Props={
    item:Item
}

export function TableItem(props:Props){
    const navigate = useNavigate();

    function onClick(id:string,type:string){
        // alert("clicked "+type+" "+id+"")
        if(type===ContentType.USER){
            navigate("/profile/"+id)
        }
        
    }
    return (
        <tr onClick={()=>onClick(props.item.id,props.item.type)}>
            {props.item.type===ContentType.BOOK&& (<BookTableItem item={props.item as Book}/>)}
            {props.item.type===ContentType.USER&& (
                <UserTableItem item={props.item as User}/>
            )}
        </tr>
    )
}