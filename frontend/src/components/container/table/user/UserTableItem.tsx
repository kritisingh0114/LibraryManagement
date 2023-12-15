import { User } from "../../../../types/User"

type Props={
    item:User
}

export function UserTableItem(props:Props){

    return (
        <>
            <td><img className="user-img table-img" src={props.item.imageUrl || "profile.png"}></img></td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
            <td>{props.item.bookRented}</td>
        </>
    )
}