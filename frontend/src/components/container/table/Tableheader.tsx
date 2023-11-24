import { BookTableHeader } from "./book/BookTableHeader"
import { UserTableHeader } from "./user/UserTableHeader"

type Props={
    contentType:string
}
export function TableHeader(props:Props){
    return (<thead><tr>

    
        {props.contentType==="book" && <BookTableHeader/>}
        {props.contentType==="user" && <UserTableHeader/>}
        </tr>
    </thead>)
}