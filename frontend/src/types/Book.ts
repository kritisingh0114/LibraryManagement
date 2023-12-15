import { ContentType } from "./ContentType"
import { Item } from "./Item"

export interface Book extends Item{
    
    isAvailable:boolean
    author:string
    category:string
    ISBN:string
    availableAmount:number
    type:ContentType.BOOK
    year:number
    synopsis:string
    rentalDate?:Date
}