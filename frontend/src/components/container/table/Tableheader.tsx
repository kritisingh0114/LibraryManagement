import { ContentType } from "../../../types/ContentType"
import { BookTableHeader } from "./book/BookTableHeader"
import { UserTableHeader } from "./user/UserTableHeader"

type Props={
    contentType:string
}
export function TableHeader(props:Props){
    return (<thead><tr>

    
        {props.contentType===ContentType.BOOK && <BookTableHeader/>}
        {props.contentType===ContentType.USER && <UserTableHeader/>}
        </tr>
    </thead>)
}