import { ContentType } from "./ContentType"

export interface Item{
    type:ContentType //book or user
    id:string  //database id
    imageUrl?:string

    name:string
}