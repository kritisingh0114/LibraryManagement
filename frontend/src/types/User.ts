import { Item } from "./Item"

export interface User extends Item{
    email:string
    bookRented:number
    type:"user"
}