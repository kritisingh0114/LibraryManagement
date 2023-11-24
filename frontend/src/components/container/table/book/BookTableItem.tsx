import { Book } from "../../../../types/Book"
import { BookStatus } from "./BookStatus"

type Props={
    item:Book
}

export function BookTableItem(props:Props){
    return (
    <>
        <td><img className="book-img table-img" src={props.item.imageUrl || "book.png"}></img></td>
        <td>{props.item.name}</td>
        <td>{props.item.author}</td>
        <td>{props.item.category}</td>
        <td>{props.item.availableAmount}</td>
        <td><BookStatus isAvaliable={props.item.isAvailable}/></td>
    </>
    )
}