import { Item } from "./Item"

export interface Book extends Item{
    
    isAvailable:boolean
    author:string
    category:string
    ISBN:string
    availableAmount:number
    type:"book"
    rentalDate?:Date
}