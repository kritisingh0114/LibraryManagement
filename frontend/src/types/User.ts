import { ContentType } from "./ContentType"
import { Item } from "./Item"

export interface User extends Item{
    email:string
    bookRented:number
    type:ContentType.USER
}